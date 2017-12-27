<template>
  <div id="app">

    <div class="headone">
      <span class="left"></span>
      <p>小善</p>
      <span class="right"></span>
    </div>

  	<div class="headtwo">
      <banners class="banner" :data="obj"></banners> 
  	</div>

  </div>
</template>

<style scoped="scoped">
.headone{
  position: fixed;
  top: 0;
  z-index: 2;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 -18.373333rem;
}
.headtwo{
  width: 100%;
  height: 5.573333rem;
  float: left;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 -18.373333rem;
}
.left{
  display: block;
  width: 0.56rem;
  height: 0.56rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: 0 0;
  margin: 0.266667rem 0 0 0.266667rem;
  float: left;
}
.right{
  display: block;
  width: 0.64rem;
  height: 0.586667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position:  -1.453333rem 0;
  float: right;
  margin: 0.253333rem 0.266667rem 0 0;
}
.headone p{
  float: left;
  width: 8.266667rem;
  height: 1.133333rem;
  text-align: center;
  line-height: 1.133333rem;
  font-size: 0.453333rem;
  color: #ffffff;
}
.banner{
  width: 100%;
  height: 3.8rem;
  margin-top: 1.133333rem;
}


</style>

<script>
import banner from '../../../common/swiper/swiper.vue'
export default {
  name: 'app',
  data () {
    return {
      obj:{
        img:[
           "http://img0.imgtn.bdimg.com/it/u=1085727832,933361700&fm=27&gp=0.jpg",
           "http://img0.imgtn.bdimg.com/it/u=1085727832,933361700&fm=27&gp=0.jpg",
           "http://img0.imgtn.bdimg.com/it/u=1085727832,933361700&fm=27&gp=0.jpg"
        ]
      }
    }
  },
  components:{
    "banners":banner,
  }
}
</script>