<template>
  <div id="app">

      <header>
         <div class="back" v-on:click="back()"></div>
          购物车
      </header>  
      <div id="box"></div>
      <div id="main">
          <div class="main_child" v-for=" data in json">
             
            

              <div class="goods">
              <div class="check"><check1 :data="data"></check1> </div>
              <div class="left"><img :src="data.img"></div>
              <div class="right">
                <p>{{data.name}}</p>
                
                <p style="overflow:hidden;"> 
                  <span style="color:#f78395;">￥{{data.price}}</span>
                  <span style="float:right; display:block;width:1.8rem;">
                    <controller1 :data="data" style="width: 100%;display: flex;justify-content: flex-end;"></controller1>  
                  </span>
                  <div style="clear:both"></div>
                </p>
              </div>
              </div>
          </div>
      </div>
      <div id="box"></div>

      <footer></footer>
  </div>
</template>
 
<script>
import axios from 'axios'
import controller from './controller.vue';
import check from './check.vue';

export default {
  name: 'app',
  data () {
    return {
			json:[]
    }
  },
 methods:{
 	 back(){
    	this.$router.go(-1)
    	}
 },
  created(){
  	
	this.json=localStorage.getItem("arr")
	this.json=JSON.parse(this.json)
	console.log(this.json)


  },
  components:{
    "controller1":controller,
    "check1":check
  },
}
</script>

<style scoped="scoped">
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
footer{
  width: 100%;  
  height: 1.333333rem;
  border-top:2px solid #f2f2f2;
  position: fixed;
  bottom:0;
  left: 0;
  background: #e6e6e6;
}
.right p{
  width: 100%;
  height: 0.92rem;
  line-height: 0.46rem;
}
.shop_name{
  width: 100%;
  height: 1.133333rem;
  line-height: 1.133333rem;
  border-bottom:1px solid #f2f2f2;
float: left;

  clear: both;
}
.check1{
  float: left;
 height: 1.133333rem;
  padding: 0.06rem 0;
  width: 0.8rem;
  display: flex;
  justify-content: center;
}
.check{
  clear: both;
  float: left;
  width: 0.8rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items:center;
}
.left{
  float: left;
  width: 2.4rem;
  height: 2.4rem;
}

.left img{
  width: 100%;
  height:100%;
}
.right{
  float: left;
   width: 6rem;
  height: 2.6rem;
  margin-left: 0.266667rem;
  border-bottom:1px solid #f2f2f2;

}
.main_child .goods:nth-last-child(1) .right{
  border-bottom: 0;
}
.goods{
  font-size: 0.32rem;
  padding-top: 0.24rem;
  height: 2.933333rem;
  width: 100%;
  clear: both;

}
.main_child{
  box-sizing: border-box;

  width: 100%;
  background: white;
  margin-bottom: 0.266667rem;
  font-size: 0.426667rem;
  padding-left:0.266667rem;

}
#main{
  width: 100%;
  height: auto;
  background: #f2f2f2;

}
#main after,.main_child after,.goods after{
  display: block;
  content:"";
  clear: both;
}
 header{
    width: 100%;
    height: 1.16rem;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 1.16rem;
    font-size: 0.48rem;
    color: #333333;
    border-bottom:1px solid #f2f2f2;

 }
 #box{
   width: 100%;
    height: 1.16rem;
 }
 header img{
  position: absolute;
  width: 0.266667rem;
  height: 0.48rem;
  top: 0.3rem;
  left: 0.266667rem;
 }
</style>
