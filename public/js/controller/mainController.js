/**
 * <p></p>
 *
 * @className mainController
 * @author jiangyu
 * @create 2017-02-05 15:03
 * @version v1.0
 */
(function(app){
    'use strict';
    app.controller('MainController',function($scope,$rootScope,$state,movies,DIR){
        $rootScope.title = "express_demo2";
        $scope.movies = movies;
        $scope.dir = DIR;
    });
})(angular.module('app'));