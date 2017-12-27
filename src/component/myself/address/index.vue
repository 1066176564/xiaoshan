<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">地址选择</span>
   	<div class="information"></div>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <main>
  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div> 

  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>

  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>	
  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>

  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>	
  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>

  	<div class="div">
  		<div class="top">
  			<p class="p1">
  				<span class="name">刘德华</span>
  				<span class="phone">159****1809</span>
  				<button class="address">学校</button>
  			</p>

  			<p class="p2">地址：历山大道888号</p>
  		</div>
  		<div class="bottom">
  			<div class="left">
  				<input type="radio" name="" class="radio">
  				<span class="mr_address">默认地址</span>
  			</div>
  			<div class="right">
  				<div class="bj_img"></div>
  				<span class="bj_text">编辑</span>
  				<div class="sc_img"></div>
  				<span class="sc_text">删除</span>
  			</div>
  		</div>
  	</div>	
   </main>

   <footer>
   	<button class="new" @click="news()"><span>+</span>新建地址</button>
   </footer>
  	
  	<div style="width:100%; height:1.44rem; "></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    news(){
    	this.$router.push({path:"/newaddress"})
    }
  }
}
</script>

<style scoped="scoped">
	
	#app{
		width: 100%;
		background: #f2f2f2;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		margin-bottom: 0;
	}

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

	.information{
		width: 0.506667rem;
		height: 0.493333rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -1.133333rem -0.386667rem;
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		/*margin-left: 40%;*/
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

	/*人员选择*/
	main .div{
		width: 100%;
		height: 2.906667rem;
		background: #fff;
		padding-left: 0.266667rem;
		padding-right: 0.266667rem;
		margin-bottom: 0.266667rem;
	}

	main .div>.top{
		width: 100%;
		height: 1.733333rem;
		border-bottom: 1px solid #f2f2f2;
	}

	main .div>.top .p1{
		padding-top: 0.4rem;
	}

	main .div>.top p{
		width: 100%;
		height: 0.4rem;
		clear: both;
	}

	main .div>.top p span{
		margin-left: 0;
	}

	main .div>.top p .name{
		font-size: 0.373333rem;
		float: left;
	}

	main .div>.top p .phone{
		font-size: 0.35rem;
		margin-left: 0.4rem;
		float: left;
	}

	main .div>.top p .address{
		margin:0;
		padding: 0; 
		font-size: 0.24rem;
		margin-left: 0.266667rem;
		width: 0.8rem;
		height: 0.4rem;
		border:1px solid #f45971;
		border-radius: 0.04rem;
		background: none;
		float: left;
		line-height: 0.4rem;
		color: #f45971;
		margin-bottom: 0.266667rem;
	}

	main .div>.top .p2{
		text-align: left;
		font-size: 0.266667rem;
		color: #999;
	}

	/* 下面 */
	main .div>.bottom>.left {
		float: left;
		margin-top: 0.4rem;
	}

	main .div>.bottom>.right {
		float: right;
		margin-top: 0.4rem;
	}

	/*编辑、删除样式*/
	.bj_img{
		width: 0.373333rem;
		height: 0.346667rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -1.946667rem -0.386667rem;
		float: left;
		margin-right: 0.106667rem;
		margin-top: 0.058rem; 
	}

	.bj_text{
		float: left;
		font-size: 0.346667rem;
		margin-right: 0.333333rem; 
	}

	.sc_img{
		width: 0.373333rem;
		height: 0.346667rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -2.613333rem -0.386667rem;
		float: left;
		margin-right: 0.006667rem;
		margin-top: 0.072rem;
	}

	.sc_text{
		float: left;
		font-size: 0.346667rem;
	}

	.mr_address{
		font-size: 0.346667rem;
	}

	/*新建地址*/

	.new{
		width: calc(100% - 0.533333rem);
		height: 1.173333rem;
		background: #f45971;
		color: #fff;
		font-size: 0.4rem;
		border:none;
		border-radius: 0.106667rem;
		position: fixed;
		bottom: 0.266667rem;
		left: 0.266667rem;
	}

	.new span{
		margin-right: 0.32rem; 
		font-size: 0.533333rem;
	}
</style>
