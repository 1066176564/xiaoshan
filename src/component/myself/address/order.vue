<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">我的订单</span>
   	<div class="ss"></div>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <nav>
     <ul>
       <li v-for="(data,i) in arr" @click="dj(i)" :class="{active:change == i}">{{data}}</li>
     </ul>
   </nav>

   <main>
  	<all v-if="change == 0"></all>
  	<order1  v-if="change == 1"></order1>
  	<order2  v-if="change == 2"></order2>
  	<order3  v-if="change == 3"></order3>
  	<order4  v-if="change == 4"></order4>
   </main>

  	<!-- <div style="width:100%; height:1.44rem;"></div> -->
  </div>
</template>

<script>
	import all from "./order/order_01.vue"
	import order1 from "./order/order_02.vue"
	import order2 from "./order/order_03.vue"
	import order3 from "./order/order_04.vue"
	import order4 from "./order/order_05.vue"
export default {
  name: 'app',
  data () {
    return {
      arr:["全部","待付款","待发货","待收货","待评价"],
      change:0
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    dj(i){
      this.change=i;
    }
  },
  components:{
  	"all":all,
  	"order1":order1,
  	"order2":order2,
  	"order3":order3,
  	"order4":order4
  }
}
</script>

<style scoped="scoped">
	
	#app{
		width: 100%;
    height: 100vh;
    background: #f2f2f2;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		margin-bottom: 0;
	}

  /* 头部固定 */
	header{
		width: 100%;
		height: 1.253333rem;
		border-bottom:1px solid #f2f2f2; 
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background:#fff; 
	}

	.back{
		width: 0.266667rem;
		height: 0.466667rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -0.453333rem -0.386667rem;
		position: fixed;
		top: 0.4rem;
		left:0.266667rem;
		z-index: 999;
	}

	.ss{
		width: 0.48rem;
		height: 0.453333rem;
		background:url(../../../img/myself/address/order.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -0.44rem -0.533333rem;
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

  /* 选项卡 */
  nav{
    width: 100%;
    height: 1.2rem;
    background: #fff;
    margin-bottom: 0.266667rem;
  }

  nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  nav ul li{
    line-height: 1.2rem;
    font-size: 0.426667rem;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .active{
    color: #f45971;
    background: url(../../../img/myself/address/underline.png) no-repeat bottom center;
    background-size: 0.8rem 0.04rem;
  }

</style>
