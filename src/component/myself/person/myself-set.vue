<template>
  <div id="myself-set">
  	<div class="head">
  		<h2>必备工具</h2>
  	</div>
   <ul>
   	<li>
   		<div class="one">
   			
   		</div>
   		<p>会员卡</p>
   	</li>
   	<li>
   		<div class="two">
   			
   		</div>
   		<p>账户</p>
   	</li>
   	<li>
   		<router-link to="/certification">
   			<div class="three">
   			
	   		</div>
	   		<p>实名认证</p>
   		</router-link>
   	</li>
   	<li >
   		<router-link to="/integral">
   			<div class="four">
	   			
	   		</div>
	   		<p>我的积分</p>
   		</router-link>
   	</li>
   	<li>
   		<div class="five">
   			
   		</div>
   		<p @click="to_collection()">收藏</p>
   	</li>
   	<li>
   		<router-link to="/address">
	   		<div class="six">
	   			
	   		</div>
	   		<p>收货地址</p>
   		</router-link>
   	</li>
   	<li>
   		<router-link to="/words">
   			<div class="seven">
	   			
	   		</div>
	   		<p>我的留言</p>
   		</router-link>
   			
   			
   	</li>
   	<li>
   		<div class="eight">
   			
   		</div>
   		<p>更多</p>
   	</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'myself-set',
  data () {
    return {

    }
  },

  methods:{
    to_collection(){
      this.$router.push({path:"/collection"})
    }
  }
}
</script>

<style scoped="scoped">
a{
	color: #000000;
}
#myself-set{
	width: 100%;
	height:4.8rem;
	background: #ffffff;
	margin-top: 0.133333rem;
	border-bottom: 1px solid #f2f2f2;
	padding-bottom: 0.133333rem;
 }
#myself-set ul{
	width: 100%;
	height: 4.8rem;
	
}
#myself-set ul li{
	width: 25%;
	height: 1.28rem;
	float: left;
	text-align: center;
	margin-top: 0.4rem;
}
#myself-set ul li p{
	margin-top: 0.32rem;
}
#myself-set .head{
	width: 100%;
	height: 1.066667rem;
	border-bottom: 1px solid #f2f2f2;
}
#myself-set .head h2{
	margin-left: 0.333333rem;
	font-size: 0.32rem;
	line-height:1.066667rem; 
}
#myself-set ul li .one{
	width: 0.693333rem;
	height: 0.666667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -1.28rem -1.413333rem;
}
#myself-set ul li .two{
	width: 0.853333rem;
	height: 0.666667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -2.853333rem -1.413333rem;
}
#myself-set ul li .three{
	width: 0.583333rem;
	height: 0.666667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -4.64rem -1.413333rem;
}
#myself-set ul li .four{
	width: 0.64rem;
	height: 0.666667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -6.32rem -1.413333rem;
}
#myself-set ul li .five{
	width: 0.693333rem;
	height: 0.676667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -1.28rem -2.946667rem;
}
#myself-set ul li .six{
	width: 0.6rem;
	height: 0.6766667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -2.853333rem -2.946667rem;
}
#myself-set ul li .seven{
	width: 0.56rem ;
	height: 0.676667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -4.64rem -2.946667rem;
}
#myself-set ul li .eight{
	width: 0.666667rem;
	height: 0.676667rem;
	margin: 0 auto;
	background: url(../../../img/myself/reset.png) no-repeat;
	background-size: 10.0rem 5.333333rem;
	background-position: -6.32rem -2.946667rem;
}
</style>
