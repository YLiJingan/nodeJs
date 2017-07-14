'use strict'
var fs = require('fs');
/*fs模块是node.js内置模块，负责读写文件。和所有其他js模块不同的是，fs模块同时提供了同步和异步的方法*/

// fs.readFile('sample.txt','utf-8',function(err,data){   //异步读文件
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// fs.readFile('sample.jpg',function(err,data){             //读二进制文件，返回Buffer对象
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log(data.length + 'bytes');
//     }
// })

// var data = fs.readFileSync('sample.txt','utf-8');         //同步读文件，不允许传回调函数
// console.log(data);

// var data = 'Hello,Node.js';                               //异步写文件
// fs.writeFile('sample.txt',data,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('ok');
//     }
// })
// var data = '廖雪峰的官方网站';                            //同步写文件
// fs.writeFileSync('sample.txt',data);
// console.log(fs.readFileSync('sample.txt','utf-8'));

// fs.stat('sample.txt',function(err,stat){                   //异步获取文件信息
//     if(err){
//         console.log(err);
//     }else{
//         console.log('isFile:' + stat.isFile());
//         console.log('isDirectory:' + stat.isDirectory());
//     }
//     if(stat.isFile()){
//         console.log('size:' + stat.size);
//         console.log('birth time' + stat.birthtime);
//         console.log('modified time' + stat.mtime);
//     }
// })

   var file = fs.statSync('sample.txt');                 //同步获取文件信息
   console.log('birth time:' +file.birthtime);
   console.log("isFile:" + file.isFile());
   console.log('isDirectory:' + file.isDirectory());
   console.log('size:' + file.size);
   console.log('modified time:' + file.mtime);