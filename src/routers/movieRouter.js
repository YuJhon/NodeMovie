/**
 * <p></p>
 *
 * @className movieRouter
 * @author jiangyu
 * @create 2017-02-03 22:13
 * @version v1.0
 */
//引入express模块
var express = require('express');
//由express创建一个路由
var router = express.Router();
//引入movies.js文件
var movies = require('../controllers/movies.js');

/* 设置post方法路由映射. */
router.post('/',movies.create);
router.post('/pic',movies.uploadPic);
/* 设置get方法路由映射*/
router.get('/all',movies.list);

//导出router
module.exports = router;