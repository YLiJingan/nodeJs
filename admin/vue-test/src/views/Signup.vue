<template>
    <div id="body">
        <nav class="navbar navbar-inverse">
        		<div class="container">
        			<img src="../assets/logo_white.png" alt="logo">
        			<div class="navbar-header">
        				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        					<span class="sr-only">Toggle navigation</span>
        					<span class="icon-bar"></span>
        					<span class="icon-bar"></span>
        					<span class="icon-bar"></span>
        				</button>
        				<a class="navbar-brand" href="#">angryyan</a>
        			</div>
        			<div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
        				<ul class="nav navbar-nav">
        					<li><a href="#">非官方微博</a></li>
        					<li><a href="#about">问题反馈</a></li>
        					<li><a href="#contact">关于</a></li>
        				</ul>
        			</div>
        		</div>
        	</nav>
        	<div class="container">
        		<div class="row">
        			<div class="col-md-2 col-md-offset-1 col-sm-4">
        				<div class="cat"></div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-2 col-sm-1">
        			</div>
        			<div class="col-md-8 panel col-sm-10">
        				<div class="row">
        					<div class="col-md-12">
        						<blockquote>
        							<p>注册账号</p>
        						</blockquote>
        					</div>
        				</div>
        				<div class="row">
        					<div class="col-md-2"></div>
        					<div class="col-md-8">
        						<div class="row">
        							<form class="form-horizontal" id="form" autocomplete="off">
        								<div class="form-group">
        									<label class="col-md-3 col-sm-2 control-label">用户名</label>
        									<div class="col-md-9 col-sm-8">
        										<input type="text" class="form-control"  placeholder="请输入用户名" name="username">
        									</div>
        								</div>
        								<div class="form-group">
        									<label for="phone" class="col-md-3 col-sm-2 control-label">手机号码</label>
        									<div class="col-md-9 col-sm-8">
        										<input type="tel" class="form-control" id="phone" placeholder="请输入手机号码" name="userphone">
        									</div>
        								</div>
        								<div class="form-group">
        									<label for="email" class="col-md-3 col-sm-2 control-label">电子邮箱</label>
        									<div class="col-md-9 col-sm-8">
        										<input type="email" class="form-control" id="email" placeholder="请输入电子邮箱" name="useremail">
        									</div>
        								</div>
        								<div class="form-group">
        									<label for="pwd" class="col-md-3 col-sm-2 control-label">密码</label>
        									<div class="col-md-9 col-sm-8">
        										<input type="password" class="form-control" id="pwd" placeholder="请输入密码" name="userpassword">
        									</div>
        								</div>
        								<div class="form-group">
        									<label for="repwd" class="col-md-3 col-sm-2 control-label">确认密码</label>
        									<div class="col-md-9 col-sm-8">
        										<input type="password" class="form-control" id="repwd" placeholder="请再次输入密码" name="confirmPassword">
        									</div>
        								</div>
        								<button class="btn col-md-3 col-md-offset-4 col-xs-3 col-xs-offset-4" type="submit">
        								<router-link to='/signin'>注册</router-link>
        								</button>
        							</form>
        						</div>

        					</div>
        					<div class="col-md-2"></div>
        				</div>
        			</div>
        			<div class="col-md-2 col-sm-1"></div>
        		</div>
        		<div class="row">
        			<div class="col-md-5 col-xs-4"></div>
        			<div class="col-md-4 col-xs-6">
        				<footer>
        					<p>©2017&nbsp;&nbsp;angryyan诚意出品</p>
        					<div>
        						<span><a href="###">权利声明</a></span>
        						<span>|&nbsp;<a href="###">版本更新</a></span>
        						<span>|&nbsp;<a href="###">帮助中心</a></span>
        					</div>
        				</footer>
        			</div>
        			<div class="col-md-3 col-xs-2"></div>
        		</div>
        	</div>
    </div>
</template>

<script>

</script>

<style scoped>
p,ul,li,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}
li{list-style: none}
a,a:hover,a:focus{text-decoration:none;color:#e7e7e7;}
#body{
    font:14px "微软雅黑";
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    margin:0;
    padding:0;
    background: -webkit-linear-gradient(#92c6fc, #fff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#92c6fc, #fff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#92c6fc, #fff); /* Firefox 3.6 - 15 */
    background: linear-gradient(#92c6fc, #fff); /* 标准的语法 */
    min-width: 560px;
    height: 1000px;
    overflow: hidden;
}

nav img{
    width:80px;
    height:60px;
    float:left;
}

/*.navbar-inverse {*/
    /*background-color: transparent;*/
    /*border-color: transparent;*/
/*}*/
@media (max-width: 768px){
    .navbar-inverse {
        background-color: #000;
        border-color: transparent;
    }
}
.navbar{
    padding-left:110px;
    margin-bottom:10px;
}
@media (max-width:768px){
    .navbar{
        padding-left:0px;
    }
}
@media (max-width:992px){
    .navbar{
        padding-left:40px;
    }
}
.navbar-inverse .navbar-brand {
    color: #fff;
}
.navbar-inverse .navbar-nav>li>a {
    color: #fff;
}

.navbar-inverse .navbar-nav>li>a:hover{
    color:#9d9d9d;
}
.navbar-brand{
    color:#fff;
    font-size:24px;
    padding-top:25px;
}
.navbar-toggle{
    margin-top:13px;
}
#navbar .navbar-nav {
    float:right;
    padding-top:5px;
}
@media (max-width: 768px) {
    #navbar .navbar-nav {
        float: none;
        margin: 0;
    }
}

.cat{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background:url(../assets/cat.jpg) no-repeat;
    background-size:cover;
}
blockquote {
    border-left: 5px solid #000;
}
blockquote p{
    cursor:pointer;
}
.panel{
    padding-top:20px;
    padding-bottom:20px;
    background:#f8fdff;
}
footer{
    margin-top:20px;
}
footer span a{
    color:#000000;
}
.col-xs-2{
    text-align: right;
}
.form-group{
    margin-bottom:28px;
}
button, .btn:hover{
    margin-top:10px;
    background-color: #1584DB;
    color:#fff;
}
</style>
