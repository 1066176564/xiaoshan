<template>
  <div id="app">
    	<div class="integral">
    		<span class="title">积分专区</span>
    		<span class="max"></span>
    		<span class="max_text"><router-link to="/integral_detail">更多</router-link></span>
    	</div>
      <!-- <ul>
        <li v-for="item in arr1">
          <router-link :to="'/inte_detail/'+item.id">
            <span class="shop_img1"><img :src="item.img"></span>
            <p class="textOne">{{item.p_top}}</p>
            <p class="textTwo">{{item.p_bottom}}</p>
          </router-link>
        </li>
      </ul> -->
      <ol>
        <li v-for="item in arr">
          <router-link :to="'/integral_detail/'+item.id">
            <img :src="item.img">
            <p class="p_top">{{item.p_top}}</p>
            <p class="p_bottom">{{item.p_bottom}}</p>
          </router-link>
        </li>
      </ol>
  </div>
</template>



<style scoped="scoped">
.p_bottom{
  font-size: 0.24rem;
  color: #f45971;
  font-family: "宋体";
}
.p_top{
  font-size: 0.293333rem;
  color: #666666;
  font-family: "微软雅黑";
}
ol li{
  width: 24.9%;
  height: 2.84rem;
  float: left;
  text-align: center;
  border-right: 0.026667rem solid #f2f2f2;
}
ol li:nth-child(1){
  width: 50.5%;
  height: 2.586667rem;
  float: left;
  border-right: 0.026667rem solid #f2f2f2;
  border-bottom: 0.013333rem solid #f2f2f2;
}
ol li:nth-child(1) img,ol li:nth-child(2) img{
  width: 2rem;
  height: 2rem;
  float: left;
}
ol li:nth-child(1) p,ol li:nth-child(2) p{
  margin-top: 0.566667rem;
}
ol li:nth-child(2){
  width: 49%;
  height: 2.586667rem;
  border-right: none;
  border-bottom: 0.013333rem solid #f2f2f2;
  float: left;
}
ol li:nth-child(4){
  width: 25.5%
}
ol li:last-child{
  border: none;
  width: 24.7%;
}
ol li img{
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.373333rem;
  margin-bottom: 0.053333rem;
}
ol{
  width: 94.6%;
  height: 5.4rem;
  margin-left: 2.7%;
  float: left;
}
.textOne{
  float: left;
  margin-top: 0.92rem;
  font-size: 0.293333rem;
  color: #666666;
  font-family: "微软雅黑";
}
.textTwo{
  float: left;
  margin-top: 1.5rem;
  font-size: 0.24rem;
  color: #f45971;
  font-family: "宋体";
}
.shop_img1{
  width: 2.106667rem;
  height: 2.573333rem;
  float: left;
}
.shop_img2{
  width: 2.32rem;
  height: 2.573333rem;
  float: left;
}
ul li{
  overflow: hidden;
  height: 2.586667rem;
  float: left;
}
ul li:first-child{
  width: 50.5%;
  border-right: 0.026667rem solid #f2f2f2;
}
ul li:last-child{
  width: 49%;
}
ul{
  width: 94.6%;
  height: 2.586667rem;
  margin-left: 2.7%;
  float: left;
  border-bottom: 0.026667rem solid #f2f2f2;
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

.integral{
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
    this.Default_Request()
  },
  methods:{
    Default_Request(){
      var url = "../../src/api/integral.json";
      axios.get(url).then((res)=>{
        this.arr = res.data;
        console.log(this.arr)
      })
    }


  }
}
</script>

