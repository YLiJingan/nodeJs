'use strict'

var path = require('path');    

var workdir = path.resolve('.');                    /*解析当前目录*/
var filePath = path.join(workdir,'pub','index.html');

console.log(workdir);
console.log(filePath);