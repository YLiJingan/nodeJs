// // // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// // const Koa = require('koa');

// // const router = require('koa-router')();

// // const bodyParser = require('koa-bodyparser');

// // const fs = require('fs');
// // // 创建一个Koa对象表示web app本身:
// // const app = new Koa();
// // const files = fs.readdirSync('F:/nodeJS/url-koa' + '/controllers')

// // // 对于任何请求，app将调用该异步函数处理请求：
// // // app.use(async (ctx, next) => {
// // //     await next();
// // //     ctx.response.type = 'text/html';
// // //     ctx.response.body = '<h1>Hello, koa2!</h1>';
// // // });

// // app.use(async (ctx, next) => {
// //     console.log(`${ctx.request.method} ${ctx.request.url}`);
// //     await next();
// // });

// // // app.use(async (ctx, next) => {
// // //     const start = new Date().getTime();
// // //     await next();
// // //     const ms = new Date().getTime() - start;
// // //     console.log(`Time: ${ms}ms`);
// // // });

// // // app.use(async (ctx, next) => {
// // //     await next();
// // //     ctx.response.type = 'text/html';
// // //     ctx.response.body = '<h1>Hello,word!</h1>';
// // // })
// // router.get('/hello/:name' ,async(ctx, next) => {
// // 	var name = ctx.params.name;
// // 	ctx.response.body = `<h1>Hello, ${name}</h1>`;
// // });

// // router.get('/' ,async(ctx, next) => {
// // 	ctx.response.body = '<h1>Index</h1>';
// // });

// // /*处理post请求*/

// // router.get('/', async (ctx, naxt) => {
// // 	ctx.response.body = `<h1>Index<h1/>
// // 	<form action="signin" method="post">
// // 	<p>Name:<input name="name" value="koa"/></p>
// // 	<p>Password:<input name="password" type="password"/></p>
// // 	<p><input type="submit" value="submit"/></p>
// // 	</form>`;

// // });

// // router.post('/signin', async (ctx, next) => {
// // 	var name=ctx.request.body.name || '';
// // 	var password = ctx.request.body.password || '';
// // 	console.log(`signin with name: ${name},password: ${password}`);

// // 	if(name === 'koa'  && password === '12345'){
// // 		ctx.response.body = `<h1>welocme, ${name}!</h1>`;
// // 	}else{
// // 		ctx.response.body = `<h1>Login failed</h1>
// // 		<p><a href="/"/>Try again</p>`;
// // 	}

// // });
// // app.use(bodyParser);
// // app.use(router.routes());


// // // 在端口3000监听:
// // app.listen(3000);
// // console.log('app started at port 3000...');


// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
//     var
//         autoescape = opts.autoescape && true,
//         noCache = opts.noCache || false,
//         watch = opts.watch || false,
//         throwOnUndefined = opts.throwOnUndefined || false,
//         env = new nunjucks.Environment(
//             new nunjucks.FileSystemLoader('views', {
//                 noCache: noCache,
//                 watch: watch,
//             }), {
//                 autoescape: autoescape,
//                 throwOnUndefined: throwOnUndefined
//             });
//     if (opts.filters) {
//         for (var f in opts.filters) {
//             env.addFilter(f, opts.filters[f]);
//         }
//     }
//     return env;
// }

// var env = createEnv('views', {
//     watch: true,
//     filters: {
//         hex: function (n) {
//             return '0x' + n.toString(16);
//         }
//     }
// });

// // var s=env.render('demo.html',{name:'<script>xiaoming</sript>'});
// // console.log(s);

// console.log(env.render('extend.html', {
//     header: 'Hello',
//     body: 'bla bla bla...'
// }));










const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:
if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');