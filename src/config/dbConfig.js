/**
 * <p></p>
 *
 * @className dbConfig
 * @author jiangyu
 * @create 2017-02-03 22:15
 * @version v1.0
 */
//mongodb数据库参数配置
var user_name = 'lilythy';  //用户名
var password = '123456';    //密码
var db_url = '127.0.0.1';   //主机名
var db_port = 27017;        //端口
var db_name = 'moviesite';  //database名称

//导出mongodb数据库的连接信息
exports.db_str = 'mongodb://' + user_name + ':' + password + '@' + db_url + ':' + db_port + '/' + db_name;