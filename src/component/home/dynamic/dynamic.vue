<template>
  <div id="app">
  	
  		
  		<span class="left"></span>
    	<div class="center">
    		<span></span>
    		<span></span>
    		<!-- <p>商城联盟商家结款周期变更通知</p>
    		<p>商铺线下交易订单结算打款方式变更通知</p> -->
        <banners class="banners" :data="obj"></banners>
        <banners class="banners" :data="obj2"></banners>
    	</div>
      
    	<span class="right"></span>
    	<div class="strip"></div>
    	
    	
  </div>
</template>




<script>
import axios from "axios"
import banner from '../../../common/swiper/swiper.vue'
export default {
  name: 'app',
  data () {
    return {
      obj:{
        direction: 'vertical',
        text:true,
        font:[]
      },
      obj2:{
        direction: 'vertical',
        text:true,
        font:[]
      },
      arr:[]
    }
  },
  created(){
    this.gsdt()
  },
  methods:{
    gsdt(){
      axios.get("./src/api/gsdt.json").then((res)=>{
        // console.log(res.data);
        this.arr = res.data;
        // console.log(this.arr);


        for(var i in this.arr) {
          this.obj.font.push(this.arr[i].text)
          this.obj2.font.push(this.arr[i].text2)
          console.log(this.arr[i].text)
        }


    })
  }
},
  components:{
    "banners":banner
  }
}
</script>


<style scoped="scoped">
.strip{
  width: 100%;
  height: 0.133333rem;
  background: #f2f2f2;
  float: left;
}
.center{
  width: 7.466667rem;
  height: 1.2rem;
  float: left;
}
.center p{
  float: right;
  width: 6.453333rem;
  margin-top: 0.106667rem;
  color: #999999;
  letter-spacing: 0.026667rem;
  font-size: 0.266667rem;
}
.center span:nth-child(1){
  display: block;
  width: 0.533333rem;
  height: 0.266667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -5.906667rem 0;
  margin: 0.2rem 0.173333rem 0.266667rem 0.306667rem;
  float: left;
}
.center span:nth-child(2){
  display: block;
  width: 0.533333rem;
  height: 0.266667rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -6.573333rem 0;
  margin: 0.733333rem 0.173333rem 0.2rem -0.706667rem;
  float: left;
}


.left{
  display: block;
  width: 0.853333rem;
  height: 0.8rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -2.72rem 0;
  margin: 0.2rem 0 0 0.266667rem;
  float: left;
}
.right{
  display: block;
  width: 1.146667rem;
  height: 1.2rem;
  background: url(../../../img/home/h_one.png) no-repeat;
  background-size: 10.373333rem 26.626667rem;
  background-position: -4.133333rem 0;
  margin: 0 0.266667rem 0 0;
  float: right;
}


.banners{
  width: 6.3rem;
  height: 0.58rem;
  line-height: 0.58rem;
  float: left;
}


</style>