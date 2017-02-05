//在js文件第一行加上'use strict'使该文件在严格模式下执行，就是对代码书写规范更严格，否则就会报错
'use strict';
//声明一个'app'模块，并设置该模块依赖ui.router、ui.bootstrap和ngFileUpload
var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngFileUpload'
]);

//声明'app'模块的全局常量'DIR'
app.constant('DIR','\\upload\\') ;