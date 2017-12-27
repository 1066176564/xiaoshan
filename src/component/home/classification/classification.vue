<template>
  <div id="app">
      <ul>
      	<li>
      		<span class="backimg1"></span>
      		<span>家电厨卫</span>
      	</li>
      	<li>
      		<span class="backimg2"></span>
      		<span>手机数码</span>
      	</li>
      	<li>
      		<span class="backimg3"></span>
      		<span>食品饮料</span>
      	</li>
      	<li>
      		<span class="backimg4"></span>
      		<span>房车家装</span>
      	</li>
      	<li>
      		<span class="backimg5"></span>
      		<span>服装鞋帽</span>
      	</li>
      	<li>
      		<span class="backimg6"></span>
      		<span>生活服务</span>
      	</li>
      	<li>
      		<span class="backimg7"></span>
      		<span>积分专区</span>
      	</li>
      	<li>
      		<span class="backimg8"></span>
      		<span>品牌</span>
      	</li>
      	<li>
      		<span class="backimg9"></span>
      		<span>活动</span>
      	</li>
      	<li>
      		<span class="backimg10"></span>
      		<span>周边</span>
      	</li>
      </ul>
      <div class="strip"></div>
  </div>
</template>

<style scoped="scoped">
*{margin: 0; padding: 0}
.strip{
	width: 100%;
	height: 0.133333rem;
	background: #f2f2f2;
	float: left;
}
.backimg1{
  display: block;
  width: 60.4%;
  height: 1.226667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 -2.106667rem;
  margin:0 0 0 20%;
  float: left;
}
.backimg2{
  display: block;
  width:  60%;
  height: 1.226667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -2.72rem -2.106667rem;
  margin:0 0 0 20%;
}
.backimg3{
  display: block;
  width:  60%;
  height: 1.226667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -5.373333rem -2.106667rem;
  margin:0 0 0 20%;
}
.backimg4{
  display: block;
  width:  60%;
  height: 1.226667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -8.026667rem -2.106667rem;
  margin:0 0 0 20%;
}
.backimg5{
  display: block;
  width:  60.4%;
  height: 1.226667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 -3.813333rem;
  margin:0 0 0 20%;
}
.backimg6{
  display: block;
  width:  60%;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -2.72rem -3.813333rem;
  margin:0 0 0 20%;
}
.backimg7{
  display: block;
  width:  60%;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -5.373333rem -3.813333rem;
  margin:0 0 0 20%;
}
.backimg8{
  display: block;
  width:  60%;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -8.026667rem -3.813333rem;
  margin:0 0 0 20%;
}
.backimg9{
  display: block;
  width:  60%;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 -5.866667rem;
  margin:0 0 0 20%;
}
.backimg10{
  display: block;
  width:  60.4%;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -2.71rem -5.866667rem;
  margin:0 0 0 20%;
}
ul li{
	width: 20%;
	height: 1.8rem;
	float: left;
	margin-top: 0.533333rem;
  color: #666666;
}
ul{
	width: 100%;
	float: left;
	padding-bottom: 0.533333rem;
}
ul li:nth-child(6){
	margin-top: 0.4rem;
}
ul li:nth-child(7){
	margin-top: 0.4rem;
}
ul li:nth-child(8){
	margin-top: 0.4rem;
}
ul li:nth-child(9){
	margin-top: 0.4rem;
}
ul li:nth-child(10){
	margin-top: 0.4rem;
}
ul li span{
	float: left;
	text-align: center;
	display: block;
	width: 100%;
}
ul li span:last-child{
  margin-top: 0.173333rem;
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