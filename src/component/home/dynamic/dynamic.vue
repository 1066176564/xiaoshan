<template>
  <div id="app">
    	<span class="left"></span>
    	<div class="center">
    		<span></span>
    		<span></span>
    		<p>商城联盟商家结款周期变更通知</p>
    		<p>商铺线下交易订单结算打款方式变更通知</p>
    	</div>
    	<span class="right"></span>
    	<div class="strip"></div>
  </div>
</template>

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