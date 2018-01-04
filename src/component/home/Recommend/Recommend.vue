<template>
  <div id="app">
  	<div class="backcolor">
	    <div class="recommend">
	    	<span class="title">推荐宝贝</span>
	    	<span class="max"></span>
	    	<span class="max_text">更多</span>
	    </div>
		
		<ul>
			<router-link to="details">
				<li>
					<img src="../../../img/home/h_home_34.jpg"/>
					<p class="p_one">漫步者蓝牙系列明星爆品 音质出色 持久续航 精致工艺</p>
					<p class="p_two">￥299 <small>1345人付款</small></p>
				</li>
			</router-link>
			<router-link to="details">
			<li>
				<img src="../../../img/home/h_home_36.jpg"/>
				<p class="p_one">漫步者蓝牙系列明星爆品 音质出色 持久续航 精致工艺</p>
				<p class="p_two">￥299 <small>1345人付款</small></p>
			</li>
			</router-link>
			<router-link to="details">
			<li>
				<img src="../../../img/home/h_home_34.jpg"/>
				<p class="p_one">漫步者蓝牙系列明星爆品 音质出色 持久续航 精致工艺</p>
				<p class="p_two">￥299 <small>1345人付款</small></p>
			</li>
			</router-link>
			<router-link to="details">
			<li>
				<img src="../../../img/home/h_home_36.jpg"/>
				<p class="p_one">漫步者蓝牙系列明星爆品 音质出色 持久续航 精致工艺</p>
				<p class="p_two">￥299 <small>1345人付款</small></p>
			</li>
			</router-link>
		</ul>

		<p style="margin-bottom:4.0rem;float:left"></p>
  		
  	</div>
  </div>
</template>

<style scoped="scoped">
.p_one{
	width: 90.6%;
	margin-left: 4.7%;
	font-size: 0.266667rem;
	color: #333333;
}
.p_two{
	width: 92%;
	margin-left: 4%;
	font-size: 0.213333rem;
	color: #fe3253;
	padding-bottom: 0.2rem;
	margin-top: 0.08rem;
}
.p_two small{
	font-size: 0.213333rem;
	color: #a7a7a7;
	font-family: "仿宋";
}
ul li img{
	width: 100%;
}
ul li{
	width: 49%;
	float: left;
	margin-left: 1%;
	background: #fff;
	margin-bottom: 1%;
}
ul{
	width: 94.8%;
	margin-left: 2.2%;
}
.title{
	width: 2.2rem;
	height: 0.666667rem;
	float: left;
	margin-left: 3.946667rem;
	text-align: center;
	padding-top: 0.013333rem;
  font-size: 0.36rem;
  background: -webkit-linear-gradient(left,#ed0598,#f0569b 50%,#f45971 51%,#f38293);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}
.max_text{
	display: block;
	float: right;
	font-size: 0.24rem;
	padding-top: 0.02rem;
  color: #999999;
  font-family: "宋体";
  font-weight: bold;
}
.max{
	display: block;
	width: 0.32rem;
	height: 0.32rem;
    background: url(../../../img/home/h_one.png) no-repeat;
    background-size: 10.373333rem 26.626667rem;
    background-position: -5.373333rem 0;
    float: right;
    margin: 0.173333rem 0.266667rem 0 0.146667rem;
}

.recommend{
	width: 100%;
	height: 0.666667rem;
	line-height: 0.666667rem;
	font-size: 0.373333rem;
    background: url(../../../img/home/h_two.png) no-repeat;
    background-size: 10.373333rem 14.6rem;
    background-position: -0.2rem -13.226667rem;
	float: left;
}
.backcolor{
	background: #f2f2f2;
	float: left;
	margin-bottom: 1.293333rem;
}
</style>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>