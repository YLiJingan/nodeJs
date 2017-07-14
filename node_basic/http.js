'use strict'
/*http模块提供了request对象和response对象
request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有http请求的信息
response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器*/

var http = require('http');       //导入http模块
var server = http.createServer(function(request,response){ //创建http server,并传入回调函数，回调函数接受request和response对象
    console.log(request.method + ':' + request.url);       //获得http请求的method和url
    response.writeHead(200,{'Content-Type':'text.html'});  //将http响应200写入response，同时设置content-type
    response.end('<h1>hello,world!</h1>');                 //将http响应的html写入response
});

server.listen(8080);      //监听端口
console.log('Server is running at http://127.0.0.1:8080/');

