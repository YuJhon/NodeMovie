/**
 * <p></p>
 *
 * @className movieModel
 * @author jiangyu
 * @create 2017-02-03 22:10
 * @version v1.0
 */
//引用mongoose模块
var mongoose = require('mongoose');
//引用movieSchema.js文件
var MovieSchema = require('../schemas/movieSchema');
//通过MovieSchema来创建MovieModel。第一个参数表示MovieModel的名字，第二个参数表示依赖的scheme名称，
// 第三个参数表示数据库中collection的名字(相当于关系型数据库中的表名)
var MovieModel = mongoose.model('Movie',MovieSchema,'Movie');

//导出MovieModel供控制层文件使用
module.exports = MovieModel;