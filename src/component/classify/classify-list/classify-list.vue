<template>
  <div id="app">
   <div class="header">
   	 <ul>
   	 	<router-link to="/classify" tag="li">
   	 	<li><img src="../../../img/classify/classify_list/classify_back_03.jpg"></li>
   	 	</router-link>
   	 	<li><button><img src="../../../img/classify/classify_list/classify_list__03.jpg"></button><input type="text" placeholder="寻找你喜欢的商品"/></li>
   	 	<li><img src="../../../img/classify/classify_list/classify_list_header_right.jpg"></li>
   	 </ul>
   </div>
   
   <div class="nav">
   	<ul>
   		<li>综合</li>
   		<li>销量</li>
   		<li>价格</li>
   		<li @click="saixuan()">筛选</li>
   	</ul>
   </div>
   
   <div class="main">
   	<router-link to="details" tag="div">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  	<p><button>保税区</button>188人购买</p>
   	  </div>
   	  </router-link>
   </div>
   
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  	<p><button>保税区</button>188人购买</p>
   	  </div>
   </div>
   
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  	<p><button>保税区</button>188人购买</p>
   	  </div>
   </div>
   
   <div class="main">
   	  <div class="main_left">
   	  	<img src="../../../img/classify/classify_list/classify_list_shop_07.jpg">
   	  </div>
   	  <div class="main_right">
   	  	<h2>卡西欧（CASIO）手表ANALOGUE系列男表BEM-501L-7A</h2>
   	  	<span>￥699.00</span>
   	  	<p><button>保税区</button>188人购买</p>
   	  </div>
   </div>
    
    <transition name="slide-fade">
	   <div class="scress" v-if="show">
	   	<div class="left" @click="left()"></div>
	   		<div class="scress_nei">
	   			<div class="scress_nei_tow">
	   				<span>价格区间（元）</span>
	   				<p><input type="text" placeholder="最低价"> — <input type="text" placeholder="最高价"></p>
	   			</div>
	   			
	   			<div class="scress_nei_center">
	   				<span>小善服务</span>
	   				<p><button>新品</button><button>专柜同步</button><button>小善国际</button></p>
	   			</div>
	   			
	   			<div class="scress_nei_main">
	   				<span>品牌</span>
	   				<p>
	   					<button>克莱</button>
	   					<button>劳士顿</button>
	   					<button>飞亚达</button>
	   					<button>浪琴</button>
	   					<button>欧密茄</button>
	   					
	   				</p>
	   			</div>
	   			<div class="scress_footer">
	   				<ul>
	   					<li>品类</li>
	   					<li>更多∨</li>
	   				</ul>
	   				<p>
	   					<button>石英女表</button>
	   					<button>石英男表</button>
	   					<button>天骏</button>
	   					<button>石英女表</button>
	   					<button>石英男表</button>
	   					<button>天骏</button>
	   				</p>
	   			</div>
	   			<div class="scress_footer_bottom">
	   				<span>尺码</span>
	   				<p>
	   					<button>均码</button>
	   					<button>小号</button>
	   					<button>40cm</button>
	   				</p>
	   			</div>
	   			<div class="scress_btn">
	   				<ul>
	   					<li><button>重置</button></li>
	   					<li><button>确定</button></li>
	   				</ul>
	   			</div>
	   		</div>
	   </div>
	 </transition>
  </div>
</template>

<script>	
export default {
  name: 'app',
  data () {
    return {
		show: false	
    }
  },
  methods:{
  	saixuan(){
  		this.show = true;
  	},
  	left(){
  		this.show=false;
  	}
  }
  
}
</script>

<style scoped="scoped">
	
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
		width: 80.4%;
	}
	.header ul li:nth-child(2) button{
		position: absolute;
		width: 1.333333rem;
		height: 0.933333rem;
		border: none;
		border-radius: 0.4rem;
		background: #f2f2f2;
		left: 1.386666rem;
		top: 0.16rem;
	}
	.header ul li:nth-child(2) button img{
		width: 0.333333rem;
		height: 0.333333rem;
		margin-left: -13px;
		margin-top: 0.15rem;
	}
	.header ul li:nth-child(2) input{
		width: 6.52rem;
		height: 0.933333rem;
		background: #f2f2f2;
		border: none;
		border-radius: 0.493333rem;
		margin-left: 1.55rem;
		color: #999999;
		position: absolute;
		top: 0.16rem;
		z-index: 99999;
	}
	.header ul li:nth-child(3) img{
		width: 0.573333rem;
		height: 0.533333rem;
		margin-left: 0.586666rem;
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
		margin-top: 0.36rem;
		display: block;
		font-weight: bold;
	}
	.main_right p{
		margin-top: 0.12rem;
	}
	.main_right p button{
		width: 1.406666rem;
		height: 0.566666rem;
		font-size: 0.133333rem;
		border: none;
		background: white;
		border: 1px solid #f5818e;
		color: #f5818e;
		border-radius: 0.133333rem;
	}
	.main_right h2{
		margin-top: 0.226666rem;
		font-size: 0.346666rem;
	}
	.scress{
		width: 10rem;
		height: 17.906666rem;
		background: rgba(0,0,0,0.4);
		position: absolute;
		top: 0;
		z-index: 99999;
	}
	.left{
		width: 1.444444rem;
		height: 17.906666rem;
		position: absolute;
		left: 0;
		opacity: 0;
	}
	.scress_nei{
		width: 8.666666rem;
		height: 17.906666rem;
		background: white;
		position: absolute;
		right: 0;
	}
	.slide-fade-enter-active{
  transition: all .3s ease;
}
	.slide-fade-leave-active{
	  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to{
	  transform: translateX(10px);
	  opacity: 0;
	}
	.scress_nei_tow{
		width: 8.213333rem;
		height: 2.646666rem;
		margin-top: 0.773333rem;
		margin-left: 0.223333rem;
		border-bottom: 0.026666rem solid #f2f2f2;
	}
	.scress_nei_tow span{
		font-size: 0.4rem;
	}
	.scress_nei_tow p{
		margin-top: 0.653333rem;
	}
	.scress_nei_tow p input{
		width: 2.706666rem;
		height: 0.826666rem;
		text-align: center;
		background: #f2f2f2;
		border: none;
		color: #938e86;
	}
	.scress_nei_center{
		width: 8.213333rem;
		height: 2.54rem;
		margin-left: 0.2rem;
		border-bottom: 0.026666rem solid #f2f2f2;
	}
	.scress_nei_center span{
		font-size: 0.4rem;
		margin-top: 0.22rem;
		display: block;
	}
	.scress_nei_center p{
		margin-top: 0.546666rem;
	}
	.scress_nei_center p button{
		width: 2.546666rem;
		height: 0.813333rem;
		border: none;
		background: white;
		border: 1px solid #f2f2f2;
		color: #666666;
		border-radius: 0.133333rem;
	}
	.scress_nei_center p button:nth-child(2){
		margin-left: 0.266666rem;
	}
	.scress_nei_center p button:nth-child(3){
		margin-left: 0.266666rem;
	}
	.scress_nei_main{
		width: 8.173333rem;
		height: 3.66rem;
		margin-left: 0.2rem;
		border-bottom: 0.026666rem solid #f2f2f2;
	}
	.scress_nei_main span{
		font-size: 0.4rem;
		margin-top: 0.493333rem;
		display: block;
	}
	.scress_nei_main p{
		margin-top: 0.066666rem;
	}
	.scress_nei_main p button{
		width: 2.573333rem;
		height: 0.84rem;
		margin-top: 0.413333rem;
		border: none;
		background: white;
		border: 1px solid #f2f2f2;
		color: #666666;
		border-radius: 0.133333rem;
	}
	.scress_nei_main p button:nth-child(2){
		margin-left: 0.12rem;
	}
	.scress_nei_main p button:nth-child(3){
		margin-left: 0.12rem;
	}
	.scress_nei_main p button:nth-child(5){
		margin-left: 0.12rem;
	}
	.scress_footer{
		width: 8.173333rem;
		height: 3.433333rem;
		border-bottom: 0.026666rem solid #f2f2f2;
		margin-left: 0.2rem;
	}
	.scress_footer ul{
		margin-top: 0.266666rem;
		display: flex;
		justify-content: space-between;
	}
	.scress_footer ul li{
		font-size: 0.4rem;
		
	}
	.scress_footer p button{
		width: 2.546666rem;
		height: 0.773333rem;
		margin-top: 0.266666rem;
		border: none;
		background: white;
		border: 1px solid #f2f2f2;
		color: #666666;
		border-radius: 0.133333rem;
	}
	.scress_footer p button:nth-child(2){
		margin-left: 0.12rem;
	}
	.scress_footer p button:nth-child(3){
		margin-left: 0.12rem;
	}
	.scress_footer p button:nth-child(5){
		margin-left: 0.12rem;
	}
	.scress_footer p button:nth-child(6){
		margin-left: 0.12rem;
	}
	.scress_footer_bottom{
		width: 8.173333rem;
		height: 1.653333rem;
		margin-top: 0.466666rem;
		margin-left: 0.2rem;
	}
	.scress_footer_bottom span{
		font-size: 0.4rem;
		margin-top: 0.493333rem;
		display: block;
	}
	.scress_footer_bottom p button{
		width: 2.546666rem;
		height: 0.773333rem;
		margin-top: 0.266666rem;
		border: none;
		background: white;
		border: 1px solid #f2f2f2;
		color: #666666;
		border-radius: 0.133333rem;
	}
	.scress_footer_bottom p button:nth-child(2){
		margin-left: 0.12rem;
	}
	.scress_footer_bottom p button:nth-child(3){
		margin-left: 0.12rem;
	}
	/*.scress_btn button{
		width: 4.333333rem;
		height: 1.16rem;
		position: absolute;
		bottom: 0;
	}*/
	.scress_btn{
		width: 100%;
		height: 1.133333rem;
		position: fixed;
		bottom: 0;
		z-index: 9999;
		border-top: 0.053333rem solid #f2f2f2;
	}
	.scress_btn ul{
		width: 100%;
		height: 1.133333rem;
		display: flex;
	}
	.scress_btn ul li button{
		width: 4.333333rem;
		height: 1.16rem;
		background: white;
		border: none;
	}
	.scress_btn ul li:nth-child(2) button{
		background: #f55971;
		color: white;
	}
</style>
