<template>
  <div id="app">
	<div class="brand">
    	<span class="title">品牌街</span>
    	<span class="max"></span>
    	<router-link :to="'/brand_list/'+0">
    		<span class="max_text">更多</span>
    	</router-link>
    </div>

	<ul>
		<li v-for="data in arr">
			<router-link :to="'/brand_list/'+data.id">
				<h3>{{data.title}}}</h3>
				<p>{{data.refe}}</p>
				<img :src="data.img_left" alt="">
				<img :src="data.img_right" alt="">
			</router-link>
		</li>
	</ul>

  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
			arr:[]
    }
  },
  created(){
			var url = "./src/api/brand.json"
			axios.get(url).then((res)=>{
				this.arr = res.data;
			})
		}

}
</script>


<style scoped="scoped">
ul li:first-child h3{
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
ul li p{
	width: 90%;
	float: left;
	margin-left: 0.266667rem;
	color: #999999;
	font-size: 0.253333rem;
	font-family: "宋体";
}
ul li img{
	width: 50%;
	height: 60%;
	float: left;
}

ul li{
	overflow: hidden;
	float: left;
	height: 3.066667rem;
}
ul li:nth-of-type(odd){
	width: 50.5%
}
ul li:nth-of-type(even){
	width: 49.5%
}



ul li:nth-child(1){border-right: 0.026667rem solid #f2f2f2; border-bottom: 0.026667rem solid #f2f2f2;}
ul li:nth-child(2){border-bottom: 0.026667rem solid #f2f2f2;}
ul li:nth-child(3){border-right: 0.026667rem solid #f2f2f2;}
ul{
	width: 94.6%;
	margin-left: 2.7%;
	float: left;
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
</style>
