<template>
  <div id="body">
      <div class="bg">
      		<div id="head">
      			<img src="../assets/logo.png" alt="logo">
      			<p>angryyan</p>
      			<ul>
      				<li><a href="###">非官方微博</a></li>
      				<li><a href="###">问题反馈</a></li>
      				<li><a href="###">关于</a></li>
      			</ul>
      		</div>
      		<div id="main">
      			<div class="login-container">
      				<div class="login-header">
      					<h1>Sign in</h1>
      				</div>
      				<div class="login-inpgrp">
      					<div class="err"></div>
      					<form>
      						<div class="login-input">
      							<input type="text" name="name" class="inp-item" placeholder="请输入用户名" v-model='username'>
      						</div>
      						<div class="login-input">
      							<input type="password" name="pwd" class="inp-item" placeholder="请输入密码" v-model='password'>
      						</div>
      						<span><a href="###">忘记密码</a></span><br/>
      						<input type="submit" name="login" value="登     录">
      					</form>
      				</div>
      				<div class="login-footer">
      					<p>还没有账号，立即去<router-link to="/signup">注册</router-link></p>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div id="bottom">
      		<p>©2017&nbsp;&nbsp;angryyan诚意出品</p>
      		<div>
      			<span><a href="###">权利声明</a></span>
      			<span>|&nbsp;<a href="###">版本更新</a></span>
      			<span>|&nbsp;<a href="###">帮助中心</a></span>
      		</div>
      	</div>
  </div>
</template>

<script>
export default {
      data(){
        return{
            username: 'yanxiaoguai',
            password: '123456'
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #body{
        font:14px "微软雅黑";
        box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        margin:0;
        padding:0;
    }
    p,ul,li,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}
    li{list-style: none}
    a{text-decoration:none;color:#1584DB;}
    .bg{
      background:url(../assets/bg.jpg) no-repeat center center;
      width:100%;
      height:780px;
      overflow:hidden;
      background-size: cover;
      min-width: 1000px;
    }
#head p{
	display: inline-block;
	z-index:50;
	font-size:24px;
	vertical-align: top;
    padding-top: 30px;
}
#head img{
	margin-left: 50px;
	width:100px;
	height:80px;
}
#head ul{
	float:right;
	margin-right: 50px;
	height:50px;
	line-height: 70px;
}
#head ul li{
	float:left;
	margin-right: 20px;
}

/*主体样式*/
#main{
	display:table;
	margin:0 auto;
	clear:both;
	width:1000px;
	height:70%;
	overflow: hidden;
	margin-top: 30px;
}
#main .login-container{
	position: relative;
	left:65%;
	width:350px;
	height:430px;
	background-image: url(../assets/container.png);
	z-index: 98;
	clear:both;
}
#main .login-header{
	z-index:9999;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #d9d9d9;

}
#main .login-header h1{
	display:inline-block;
  font-size: 2em;
  font-weight: bold;
  padding-top:12px;
}
#main .login-inpgrp{
	width:80%;
	margin:0 auto;
	height:50%;
}

#main .login-inpgrp .err{
	color:red;
  background: #FFEBEB url(../assets/err.png) no-repeat 1px;
	border:1px #FACCC6 solid;
	margin-top: 6px;
	padding-left: 25px;
	width:70%;
	display:none;
	position:absolute;
	font-size: 12px;
}

#main .login-inpgrp .ok{
	color:green;
    background: #FFEBEB url(../assets/ok.png) no-repeat 1px;
	border:1px #FACCC6 solid;
	margin-top: 6px;
	padding-left: 25px;
	width:70%;
	display:none;
	position:absolute;
	font-size: 12px;
}
#main .login-inpgrp .inp-item{
	height:30px;
	width:95%;
	padding-left: 35px;
	z-index: 999;
	border:none;
}
#main .login-inpgrp input[type='text']{
	background: #fff url(../assets/username.png) no-repeat 6px 8px;
	margin-top: 35px;
}
#main .login-inpgrp input[type='password']{
	background: #fff url(../assets/pwd.png) no-repeat 6px 8px;
	margin-top: 35px;
}
#main .login-inpgrp span{
	display: inline-block;
    margin-top: 30px;
    text-align: right;
    width: 90%;
}
#main .login-inpgrp input[type='submit']{
	width:90%;
	text-align: center;
	height:35px;
	margin:0 auto;
	margin:10px;
	font-size:18px;
	background-color: #1584DB;
	border:none;
	color:#fff;
}

#main .login-container .login-footer{
	margin-top: 60px;
	width:100%;
	text-align: center;
}

#bottom p{
	margin-top: 8px;
	text-align: center;
}
#bottom div{
	text-align: center;
	margin-top: 6px;
}


</style>
