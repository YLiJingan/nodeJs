'use strict'
/*stream是node.js提供的用一个仅在服务器区域可以使用的模块，目的是支持‘流’这种数据结构
流的特点是数据是有序的，而且必须一次读取，或者一次写入
在node.js中，流也是一个对象，我们只需要响应流的事件就可以了
data事件表示流的数据可以读取了
end事件表示这个流已经到末尾了，没有数据可以读取了
error事件表示出错了*/
var fs = require('fs');     

// var rs = fs.createReadStream('sample.txt','utf-8');        //打开一个流
// rs.on('data',function(chunk){
//     console.log('DATA');
//     console.log(chunk);
// });

// rs.on('end',function(){
//     console.log('END');
// });

// rs.on('error',function(err){
//     console.log('ERROR:' + err);
// })

// var ws = fs.createWriteStream('sample.txt','utf-8');           //写文件
// ws.write('使用stream写入文本数据。\n');
// ws.write('不知道还要写什么了。\n');
// ws.write('稳住，能赢！\n');

// var ws1 = fs.createReadStream('sample.txt','utf-8');
// ws1.on('data',function(value){
//     console.log('DATA');
//     console.log(value);
// });

// ws1.on('end',function(){
//     console.log('END');
// });

// ws1.on('error',function(err){
//     console.log('ERROR');
// })

/*一个Readable流和Writeable流串起来后，所有的数据自动从Readable流进入Writeable流，这种操作叫做pipe
实际上就是复制文件的程序*/

var rs = fs.createReadStream('sample.txt','utf-8');
var ws = fs.createWriteStream('copied.txt','utf-8');
rs.pipe(ws);
var data = fs.readFileSync('copied.txt','utf-8');
console.log(data);