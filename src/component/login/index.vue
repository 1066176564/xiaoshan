<template>
  <div id="loginPage">
  	<header>
  		<h1>登录</h1>
  	</header>
  	<div class="logo">
  		<img src="../../img/login/loge_03.jpg"/>
  	</div>
  	<p class="name">小善易购</p>
  	<div class="back" v-on:click="back()"></div>
	<!-- 登录 -->
	<div v-if="show == 1" class="login">
		<input type="text" placeholder="请输入手机号" v-model="dlname">
		<input type="password" placeholder="请输入密码"  v-model="dlpass">
		<button @click="login()">登 录</button>
		<button @click="yzmlogin()">验证码登录</button>
		<p>没有账号?<a @click="zc()">立即注册</a></p>
	</div>
	<!-- 验证码登录 -->
	<div v-if="show == 2" class="login">
		<input type="text" placeholder="请输入手机号" v-model="dlname">
		<input type="text" placeholder="请输入验证码"  v-model="zcyzm">
		<button id="yzmbtn" @click="yzm()" :disabled="disabled">{{yzmval}}</button>
		<button @click="login()">登 录</button>
		<button @click="yhmlogin()">用户名登录</button>
		<p>没有账号?<a @click="zc()">立即注册</a></p>
	</div>
	<!-- 注册 -->
	<div v-if="show == 3" class="zc">
		<input type="text" placeholder="请输入您的手机号" v-model="zcname">
		<input type="text" placeholder="请输入验证码"  v-model="zcyzm">
		<button id="yzmbtn" @click="yzm()" :disabled="disabled">{{yzmval}}</button>
		<input type="password" placeholder="请输入密码"  v-model="zcpass">
		<button @click="reg()" class="zcbtn">注 册</button>
		<p>已有账号?<a @click="yhmlogin()">立即登录</a></p>
	</div>
  </div>
</template>

<script>
//import axios from "axios"
	import {creatParams,BaseUrl} from '../../api/BaseUrl.js'
 	import md5 from 'js-md5';
	
export default {
  name: 'loginPage',
  data () {
    return {

     show:true,
     dlname:"",
     dlpass:"",
     zcname:"",
     zcpass:"",
     zcyzm:"",
     yzms:"",
     yzmval:"获取验证码",
     disabled:false,
     sum:10

    }
  },
  methods:{
  	
       //返回上一页
       back(){
    	this.$router.go(-1)
    	},
    	//登录
    	yzmlogin(){
    	 this.show=2;
     	 this.dlname="";
	     this.dlpass="";
	     this.zcname="";
	     this.zcpass="";
	     this.zcyzm="";
    	},
    	yhmlogin(){
    		this.show=1
     	 this.dlname="";
	     this.dlpass="";
	     this.zcname="";
	     this.zcpass="";
	     this.zcyzm="";
    	},
    	zc(){
    		this.show=3;
     	 this.dlname="";
	     this.dlpass="";
	     this.zcname="";
	     this.zcpass="";
	     this.zcyzm="";
    	},
    login(){

    		var that = this;
	    	if(this.dlname==""||this.dlpass==""){
	    		console.log("用户名或密码不能为空")
	    	}else if(this.dlname.length!=11||this.dlpass.length<6){
	    		console.log("电话格式不对或密码少于六位")
	    	}
	    	else{
					console.log(this.md5.hex("123456"))
    			if(this.show==1){
		    		var data=creatParams('{"act":"login","username":"13126623791","password":"e10adc3949ba59abbe56e057f20f883e"}',"");
		    	}else if(this.show==2){
		    		var data=creatParams('{"act":"login","username":"13126623791","password":"e10adc3949ba59abbe56e057f20f883e"}',"");
		    	}
		    		
    //请求数据
        this.$http.get(BaseUrl+"plat_user"+data).then(res=>{
          console.log(res)
        console.log(JSON.parse(Base64.decode(res.data.data)));
        var token=JSON.parse(Base64.decode(res.data.data))
				localStorage.setItem('token',token.userinfo.token)
				this.$router.push("/home")
      })

    	}
    		
    	},
    	//注册
    reg(){
    	var that = this;
    	if(this.zcname==""||this.zcpass==""){
    		console.log("电话或密码不能为空")
    	}else if(this.zcname.length!=11||this.zcpass.length<6){
    		console.log("电话格式不对或密码少于六位")
    	}else if(this.zcyzm==""){
    		console.log("验证码不能为空")
    	}
		else if(this.zcyzm!=this.yzms){
	    	console.log("验证码错误")
	    }
    	else{
    		var url = "http://114.55.249.153:8028/login/regWithPhone";
	    		axios.post(url,{"phone":this.zcname,"password":this.zcpass}).then(function(res){
	    			if(res){
	    				console.log(res.data)
	    				if(res.data.error_code==1){
	    					console.log("注册失败")
	    				}
	    				
	    				else{
	    					console.log("注册成功")
	    					that.$router.push({path: '/shopping'})

	    				}
	    			}
	    		})
	    	}
    	},
    	yzm(){//验证码
    		console.log(this.zcname.split("").length)
    		if(this.zcname.split("").length==11){
    			var that = this;
	    		var url = "http://114.55.249.153:8028/login/sendCode";
		    		axios.post(url,{"phone":this.zcname}).then(function(res){
		    			if(res){
		    				// console.log(res.data.code)
		    				that.yzms = res.data.code;
		    			}
		    		});
		    		that.sum=59;
		    	that.disabled=true;
    			
		    	var aa=setInterval(function(){
    				that.yzmval = that.sum--;

    				if(that.sum==0){
    				clearInterval(aa)
    				that.disabled=false;
    				that.yzmval="获取验证码";
    				}
    			},1000)
    		}
       			

    	}
    	
  },
  created(){
      this.show=1;
  }
    }


</script>

<style scoped="scoped">
		*{
			margin:0;
			padding:0;
		}
		header{
			width: 100%;
			height: 1.173333rem;
			box-shadow: 0px 1px 20px 0px #CCCCCC;
		}
		header h1{
			width: 100%;
			height: 1.173333rem;
			text-align: center;
			margin: 0;
			line-height: 1.173333rem;
		}
		.name{
			margin: 0 auto;
			text-align: center;
			width: 100%;
			font-size: 0.4rem;
			margin-top: 0.44rem;
			margin-bottom: 2.6rem;
		}
		.logo{
			width: 1.573333rem;
			height: 1.573333rem;
			margin: 0 auto;
			text-align: center;
			line-height: 1.573333rem;
			box-shadow:1px 1px 2px 2px #ccc;
			border-radius: 0.133333rem;
			margin-top: 2.266666rem;
		}
		.logo img{
			width: 0.533333rem;
			height: 1rem;
			vertical-align: middle;
		}
	/*返回上一页样式*/
	.back{
		position: fixed;
		width: 0.32rem;
    height: 0.613333rem;
		background:url(../../img/myself/set/set.png) no-repeat;
		background-size: 10.0rem 5.333333rem;
    background-position: -1.013333rem -0.48rem;
		line-height: 0.613333rem;
		top:0.28rem;
		left: 0.266667rem;
	}
	/*登录*/
	/*.login a{
		text-align: center;
		text-decoration: none;
		display: block;
		font-size:0.373333rem;
		color: #666666;
		margin-top:0.96rem; 
	}*/
	.login p{
		width: 100%;
		text-align: center;
		font-size: 0.32rem;
		margin-top: 0.4rem;
	}
	.login p a{
		text-decoration: none;
	}
	.login input{
		width: 8.4rem;
		height:1.6rem;
		border: none;
		border-bottom: 1px solid #dddddd;
		text-indent: 2em;
		margin: 0 auto;
		font-size: 0.373333rem;
		display: block;
		line-height:1.6rem;
	}
	.login button{
		width: 7.866667rem;
		height: 1.333333rem;
		margin: 0 auto;
		display: block;
		margin-top:0.3rem;
		border:none;
		border-radius: 0.16rem;
		background: #ca3232;
		font-size: 0.48rem;
		color: #fff;
	}
	.login input:nth-child(1){
		margin-top: 0.933333rem;
		background:url(../../img/login/tel.png) no-repeat 0.133333rem center;
		background-size: 0.386667rem 0.666667rem;
	}
	.login input:nth-child(2){
		margin-top: 0.653333rem;
		background:url(../../img/login/suo_guan.png) no-repeat 0.133333rem center;
		background-size: 0.413333rem 0.666667rem;
	}
	/*登录end*/
	/*注册*/
	.zc,.login{
		position: relative;
	}
	.zc input{
		width: 8.4rem;
		height:1.6rem;
		border: none;
		border-bottom: 1px solid #dddddd;
		margin: 0 auto;
		font-size: 0.373333rem;
		display: block;
		line-height:1.6rem;
		text-indent: 1.026667rem;
	}
	#yzmbtn{
		width: 2.133333rem;
		height: 0.666667rem;
		border: none;
		border: 0.026667rem solid #bbbbbb;
		border-radius: 0.093333rem;
		background: none;
		font-size: 0.32rem;
		color: #bbbbbb;
		position: absolute;
		right: 0.8rem;
		top:2.333333rem;
	}
	.zc .zcbtn{
		width: 7.866667rem;
		height: 1.333333rem;
		margin: 0 auto;
		display: block;
		margin-top:0.3rem;
		border:none;
		border-radius: 0.16rem;
		background: #ca3232;
		font-size: 0.48rem;
		color: #fff;
	}
	.zc input:nth-child(1){
		margin-top: 0.266667rem;
		background:url(../../img/login/tel.png) no-repeat 0.053333rem center;
		background-size: 0.386667rem 0.666667rem;
	}
	.zc input:nth-child(2){
		margin-top: 0.253333rem;
		background:url(../../img/login/yanzhen.png) no-repeat left center;
		background-size:0.586667rem 0.586667rem;
	}
	.zc input:nth-child(4){
		margin-top: 0.253333rem;
		background:url(../../img/login/suo_kai.png) no-repeat 0.04rem center;
		background-size: 0.413333rem 0.666667rem;
	}
	.zc input:nth-child(5){
		margin-top: 0.253333rem;
		background:url(../../img/login/yaoqing.png) no-repeat left center;
		background-size:0.586667rem 0.586667rem;
	}
	.zc p{
		width: 100%;
		text-align: center;
		font-size: 0.32rem;
		margin-top: 0.4rem;
	}
	.zc p a{
		text-decoration: none;
	}
	/*注册end*/

	/*页面*/
	#loginPage{
		width: 100%;
		height: 17.786667rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999999999;
		background: #fff;
	}
	/*选项卡*/
	.tab{
		width: 100%;
		height: 1.466667rem;
		background:#f3f3f3;
	}
	.tab div{
		float: left;
		width: 50%;
		height: 100%;
		text-align: center;
		line-height:1.466667rem;
		font-size: 0.426667rem;
		color: #bbbbbb;
	}
	/*选中样式*/
	.active{
		color:#777 !important;
		background: url(../../img/login/jiantou.png) no-repeat;
		background-size: 0.306667rem 0.266667rem;
		background-position: center bottom ;
	}
</style>
