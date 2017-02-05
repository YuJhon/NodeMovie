/**
 * <p></p>
 *
 * @className movieSchema
 * @author jiangyu
 * @create 2017-02-03 22:06
 * @version v1.0
 */
//引入mongoose模块
var mongoose = require('mongoose');
//引用mongoose的Schema模块
var Schema = mongoose.Schema;

// 创建一个MovieSchema对象，并定义其相关属性
var MovieSchema = new Schema({
    moviename:{          //电影名称，设置unique为true表示电影名称必须唯一
        unique: true,
        type: String
    },
    director:String,     //导演
    writers:String,      //编剧
    actors:String,       //主演
    type:String,         //电影类型
    countries:String,    //制片国家
    language:String,     //语言
    meta: {              //把时间相关的属性封装在meta对象里
        createAt: {        //创建数据的时间，默认为录入时的系统时间
            type: Date,
            default: Date.now()
        },
        updateAt: {         //更新数据的时间，默认为更新数据时的系统时间
            type: Date,
            default: Date.now()
        },
        showDate:{          //上映时间，默认为录入数据时的系统时间
            type:Date,
            default: Date.now()
        }
    },
    moviepic:String,       //电影图片的名称
    runtime:String,        //时长
    starnum:Number,        //电影评分
    starclass:Number       //电影评价的星级数
});

/*调用mongoose的pre方法，它起到了起到中间件的作用，会在执行save方法之前调用，这里会给movie对象设置createAt、updateAt的值，我们在处理逻辑的时候就不用管这两个属性了*/
MovieSchema.pre('save',function(next){
    var movie = this;

    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now();
    }

    next();
});

//给MovieSchema定义一些静态的方法，可以在model层直接调用，跟mongoose封装的model上的save,find等方法平级
MovieSchema.statics = {
    //定义了遍历数据库方法fetch
    fetch: function(cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    //定义了通过ID查找某条数据的findById方法
    findById: function(id, callback) {
        return this.findOne({_id: id}).exec(callback);
    }
};
//导出MovieSchema，以便其他文件使用
module.exports =  MovieSchema;