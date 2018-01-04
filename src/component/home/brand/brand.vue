<template>
  <div id="app">
	<div class="brand">
    	<span class="title">品牌街</span>
    	<span class="max"></span>
    	<span class="max_text">更多</span>
    </div>

	<ul>
		<router-link to="details">
			<li>
				<h3>1每日优选</h3>
				<p>正品保障15天售后无忧</p>
				<img src="../../../img/home/h_homes_03.jpg" alt="">
				<img src="../../../img/home/h_homes_04.jpg" alt="">
			</li>
		</router-link>
		<router-link to="details">
		<li>
			<h3>2全球品牌动态</h3>
			<p>1253个品牌资讯和上新</p>
			<img src="../../../img/home/h_homes_06.jpg" alt="">
			<img src="../../../img/home/h_homes_07.jpg" alt="">
		</li>
		</router-link>
		<router-link to="details">
		<li>
			<h3>3每日优选</h3>
			<p>正品保障15天售后无忧</p>
			<img src="../../../img/home/h_homes_11.jpg" alt="">
			<img src="../../../img/home/h_homes_12.jpg" alt="">
		</li>
		</router-link>
		<router-link to="details">
		<li>
			<h3>4全球品牌动态</h3>
			<p>1253个品牌资讯和上新</p>
			<img src="../../../img/home/h_homes_13.jpg" alt="">
			<img src="../../../img/home/h_homes_14.jpg" alt="">
		</li>
		</router-link>
	</ul>

  </div>
</template>


<style scoped="scoped">
*{margin:0; padding:0;}
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

.brand{
	width: 100%;
	height: 0.666667rem;
	line-height: 0.666667rem;
	font-size: 0.373333rem;
    background: url(../../../img/home/h_two.png) no-repeat;
    background-size: 10.373333rem 14.6rem;
    background-position: -0.2rem -13.226667rem;
	float: left;
}

ul{
	width: 94.6%;
	margin-left: 2.7%;
	float: left;
}
ul li{
	width: 50%;
	overflow: hidden;
	float: left;
	height: 3.066667rem;
	border-top: 0.026667rem solid #f2f2f2; 
}
ul a:nth-child(1) li{
	border: none;
	border-right: 0.026667rem solid #f2f2f2;
}
ul a:nth-child(3) li{
	border-right: 0.026667rem solid #f2f2f2;
}
ul a:nth-child(2) li{
	border: none;
}
/*ul a li:nth-of-type(odd){
	border-right: 0.026667rem solid #f2f2f2;
}*/

ul li img{
	width: 50%;
	height: 60%;
	float: left;
}
ul a:first-child li h3{
	color: #e84afd;
} 
ul li p{
	width: 90%;
	float: left;
	margin-left: 0.266667rem;
	color: #999999;
	font-size: 0.253333rem;
	font-family: "宋体";
}
.text_blue{
	color: #e84afd;
	font-size: 0.333333rem;
}
ul li h3{
	float: left;
	width: 90%;
	margin-left: 0.266667rem;
	margin-top: 0.106667rem;
	color: #666666;
	font-size: 0.333333rem;
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
