<template>
  <div id="myself-order">
      <h2>我的订单</h2>
      <h2 @click="to_order()">全部订单</h2>
      
  	 <ul>
  	 	<li>
  	 		<div class="one"></div>
  	 		<p>代付款</p>
  	 	</li>
  	 	<li>
  	 		<div class="two"></div>
  	 		<p>代发货</p>
  	 	</li>
  	 	<li>
  	 		<div class="three"></div>
  	 		<p>待收货</p>
  	 	</li>
  	 	<li>
  	 		<div class="four"></div>
  	 		<p>待评价</p>
  	 	</li>
  	 	<li>
  	 		<div class="five"></div>
  	 		<p>退换货</p>
  	 	</li>
  	 </ul>
  </div>
</template>

<script>
export default {
  name: 'myself-order',
  data () {
    return {
    	
    }
  },

  methods:{
    to_order(){
      this.$router.push({path:"/order"})
    }
  }
}
</script>

<style scoped="scoped">
#myself-order{
	width: 100%;
	height: 3.52rem;
	background: #ffffff;
}
#myself-order ul{
	width: 100%;
	height: 3.52rem;
	display: flex;
}
#myself-order ul li{
	flex: 1;
	justify-content: space-between;
	text-align: center;
}
#myself-order ul li p{
  margin-top: 0.333333rem;
  color: #bbbbbb;
}
#myself-order h2{
  float: left;
  margin: 0;
  padding: 0;
  margin-top: 0.666667rem;
  margin-left: 0.333333rem;
  font-size: 0.32rem;
  height: 0.32rem;
  line-height: 0.32rem;
}
#myself-order h2:nth-child(2){
  float: right;
  margin-right: 0.333333rem;
  font-size: 0.293333rem !important;
  height: 0.293333rem;
  line-height: 0.293333rem;
  width: 1.493333rem;
  text-align: start;
  background: url(../../../img/myself/icon.png) no-repeat;
  background-size: 10.0rem 6.133333rem;
  background-position:0.44rem -1.92rem; 
  color: #bbbbbb;
}
#myself-order ul li .one{
  width: 0.613333rem;
  height: 0.533333rem;
  margin: 0 auto;
  margin-top: 0.746667rem;
	background: url(../../../img/myself/icon.png) no-repeat;
	background-size: 10.0rem 6.133333rem;
	background-position: -0.893333rem -2.826667rem;
	
}
#myself-order ul li .two{
  width: 0.666667rem;
  height: 0.533333rem;
  margin: 0 auto;
  background: url(../../../img/myself/icon.png) no-repeat;
  background-size: 10.0rem 6.133333rem;
  background-position: -2.386667rem -2.826667rem;
  
  margin-top: 0.746667rem;
  
}
#myself-order ul li .three{
  width: 0.666667rem;
  height: 0.533333rem;
  margin: 0 auto;
  background: url(../../../img/myself/icon.png) no-repeat;
  background-size: 10.0rem 6.133333rem;
  background-position: -3.96rem -2.826667rem;
  
  margin-top: 0.746667rem;
}
#myself-order ul li .four{
  width: 0.573333rem;
  height: 0.573333rem;
  margin: 0 auto;
  background: url(../../../img/myself/icon.png) no-repeat;
  background-size: 10.0rem 6.133333rem;
  background-position: -5.506667rem -2.826667rem;
  
  margin-top: 0.746667rem;
}
#myself-order ul li .five{
  width: 0.48rem;
  height: 0.533333rem;
  margin: 0 auto;
  background: url(../../../img/myself/icon.png) no-repeat;
  background-size: 10.0rem 6.133333rem;
  background-position: -7.026667rem -2.826667rem;
  
  margin-top: 0.746667rem;
}
</style>
