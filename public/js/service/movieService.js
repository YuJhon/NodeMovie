/**
 * <p></p>
 *
 * @className movieService
 * @author jiangyu
 * @create 2017-02-03 22:55
 * @version v1.0
 */
/*在app模块下定义自定义服务*/
(function (app) {
    'use strict';
    //通过factory()方法创建一个服务MovieService，可以供controller或config使用
    app.factory('MovieService', function ($http, $q) {
        return {
            //将表单数据提交至后台处理
            addMovie:function(movieEntity){
                //后台处理链接
                var url = "http://localhost:3000/movie/";
                /*利用$q服务实现Deferred/Promise方法，利用$q.defer()生成deffered 对象，该对象有三个方法：
                 * 1.resolve(value)：如果异步操作成功，resolve方法将Promise对象的状态变为“成功”。
                 * 2.reject(reason)：如果异步操作失败，则用reject方法将Promise对象的状态变为“失败”。
                 * 3.notify(value) ：表明promise对象为“未完成”状态，在resolve或reject之前可以被多次调用。
                 * 当创建deferred实例时会创建一个新的promise对象,并可以通过 deferred.promise 得到该引用。*/
                var deferred = $q.defer();
                //通过angular的$http服务将表单的Json数据提交给后台，并监听结果
                $http.post(url, movieEntity).then(
                    //成功则将数据返回给deferred对象
                    function success(respData){
                        var movies = respData.data;
                        deferred.resolve(movies);
                    },
                    //失败则返回原因给deferred对象
                    function error(reason) {
                        deferred.reject(reason);
                    }
                )
                //通过deferred.promise获得返回给deferred对象的结果
                return deferred.promise;
            },
            // 通过请求后台接口获取所有电影数据
            getAllMovies: function(){
                // 后台接口链接
                var url = "http://localhost:3000/movie/all";
                // 通过$q服务注册一个延迟对象deferred ,以达到异步的作用
                var deferred = $q.defer();
                // 监听请求结果
                $http.get(url).then(
                    // 成功则返回电影数据
                    function success(respData){
                        var movies = respData.data;
                        console.log(movies);
                        deferred.resolve(movies);
                    },
                    // 失败则返回错误信息
                    function error(reason){
                        deferred.reject(reason);
                    }
                );
                // 通过deferred 延迟对象，可以得到一个承诺promise，而promise会返回当前任务的完成结果
                return deferred.promise;
            }
        }
    });
})(angular.module('app'));