<template>
  <div id="app">
   <div class="header">
   	 <ul>
   	 	<router-link to="details" tag="li">
   	 	<li><img src="../../../img/classify/classify_list/classify_back_03.jpg">
   	 	</li>
   	 	</router-link>
   	 	<li>商品展示</li>
   	 </ul>
   </div>
   
   <div class="two">
   		<img src="../../../img/classify/classify_list/class_tow.jpg"/>
   </div>
   
   <div class="nav">
   	<ul>
   		<li>新品</li>
   		<li>销量</li>
   		<li>价格</li>
   	</ul>
   </div>
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  </div>
   </div>
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  </div>
   </div>
   
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  </div>
   </div>
   
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  </div>
   </div>
    
  </div>
</template>

<script>	
export default {
  name: 'app',
  data (){
    return {
		show: false	
    }
  }
}
</script>

<style scoped="scoped">
	.two{
		width: 100%;
		height: 4rem;
	}
	.two img{
		width: 100%;
		height: 5.333333rem;
	}
	.header{
		width: 100%;
		height: 1.28rem;
		background: white;
		border-bottom: 0.053333rem solid #f2f2f2;
		position: fixed;
		top: 0;
		z-index: 1000;
	}
	.header ul{
		width: 100%;
		height: 1.28rem;
		display: flex;
		align-items: center;
	}
	.header ul li:nth-child(1) img{
		width: 0.346666rem;
		height: 0.586666rem;
		margin-left: 0.213333rem;
		margin-top: 0.106666rem;
	}
	.header ul li:nth-child(2){
		width: 90%;
		font-size: 0.4rem;
		text-align: center;
	}
	.nav{
		margin-top: 1.333333rem;
		width: 100%;
		height: 1.15rem;
		border-bottom: 0.04rem solid #f2f2f2;
	}
	.nav ul{
		width: 100%;
		height: 1.15rem;
		display: flex;
		justify-content: space-around;
		font-size: 0.386666rem;
		line-height: 1.15rem;
	}
	.main{
		width: 100%;
		height: 3.146666rem;
		border-bottom: 0.013333rem solid #f2f2f2;
	}
	.main_left{
		width: 2.32rem;
		height: 3.146666rem;
		float: left;
	}
	.main_left img{
		width: 1.48rem;
		height: 2.466666rem;
		margin-left: 0.626666rem;
		margin-top: 0.32rem;
	}
	.main_right{
		width: 6.64rem;
		height: 3.146666rem;
		float: right;
	}
	.main_right span{
		color: #f65974;
		font-size: 0.226666rem;
		margin-top: 0.86rem;
		display: block;
		font-weight: bold;
	}
	.main_right h2{
		margin-top: 0.226666rem;
		font-size: 0.346666rem;
	}
	
</style>
