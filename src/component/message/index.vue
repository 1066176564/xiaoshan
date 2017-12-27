<template>
  <div id="app">
	<div id="msg_header">
	   <span>消息中心</span>
	</div>


  <mu-tabs :value="activeTab" @change="handleTabChange" id="tabs">
    <mu-tab value="tab1" title="订单消息"/>
    <mu-tab value="tab2" title="系统消息"/>
    <mu-tab value="tab3" @active="handleActive" title="互动消息"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'" class="tab1">

    <ul>
    	<li>
    		<h3><span>订单已签收</span><span>17/12/26</span></h3>
    		<div id="content">
    			<div id="content_img">
    				<img src="../../img/message/dingdan/消息中心---订单消息_03.jpg"/>
    			</div>
    			
    			<div id="content_text">
    				<p id="neirong">初冬物语高领长袖慵懒宽松ulzzang短款套头打底高领长袖慵懒ulzzang短款套头打底...</p>
    				<p id="bianhao">运单编号：<span>341234124123</span></p>
    			</div>
    		</div>
    	</li>



    	<li>
    		<h3><span>订单已签收</span><span>17/12/26</span></h3>
    		<div id="content">
    			<div id="content_img">
    				<img src="../../img/message/dingdan/消息中心---订单消息_06.jpg"/>
    			</div>
    			
    			<div id="content_text">
    				<p id="neirong">初冬物语高领长袖慵懒宽松ulzzang短款套头打底高领长袖慵懒ulzzang短款套头打底...</p>
    				<p id="bianhao">运单编号：<span>341234124123</span></p>
    			</div>
    		</div>
    	</li>
    	<div id="nomore">没有更多了</div>
    </ul> 
  </div>


  <div v-if="activeTab === 'tab2'" class="tab2">
    <img src="../../img/message/xitong/消息中心_bg_02.jpg" class="tab2_bg_img" />


    
  </div>


  <div v-if="activeTab === 'tab3'" class="tab3">
    
  </div>





<!--   <div id="success_msg">
  	<div id="success_img">
  		<img src="../../img/message/images/消息中心---成功_bg_02.jpg" />
  	</div>


  	<div id="success_content">
  		<ul>
  			<li><span>订单号</span><span>534222234</span></li>
  			<li><span>支付方式</span><span>实到付款</span></li>
  			<li><span>收件人</span><span>赵小胖</span></li>
  			<li><span>联系电话</span><span>13212234122</span></li>
  			<li><span>收货地址</span><span>平顶山</span></li>
  			<li><span>订单金额</span><span>￥3245.00</span></li>
  		</ul>
  	</div>

  	<p id="bottom_button">
  		<input type="button" value="继续购物" id="continue_shopping" />
  		<input type="button" value="订单详情" id="order_detail" v-on:click="local = !local"/>
  	</p>
  </div> -->





  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	activeTab: 'tab1',
    	local:false
    }
  },
  methods:{
  	handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      console.log("点击事件")
    },
    back(){
    	window.history.back()
    }
  },
  created(){

  }
}
</script>

<style scoped="scoped">
	#app{
		height: 14rem;
		background-color: #f2f2f2;
	}
    .mu-tabs{
    	background-color: white;
    }
    .mu-tab-link{
    	color: black;
    }
    .mu-tab-active{
    	color: #f45971;
    }
	#msg_header{
		width: 100%;
		height: 1.2rem;
		background-color: white;
		border-bottom: 0.013333rem solid #f2f2f2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.533333rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	#tabs{
		margin-top: 1.2rem;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
	}
	.tab1,.tab2,.tab3{
		margin-top: 2.5rem;
	}

	
	.tab1 ul li{
		width: 94%;
		height: 2.866667rem;
		margin-left: 3%;
		margin-top: 0.373333rem;
		background-color: white;
		border-radius: 0.333333rem;
		box-shadow: 0 0 0.133333rem #9a9a9a;
	}
	.tab1 ul li:nth-child(1){
		margin-top: 0.266667rem;
	}
	.tab1 ul li h3{
		width: 90%;
		height: 0.8rem;
		float: left;
		margin-left: 5%;
		line-height: 0.8rem;
		margin-bottom: 0.2rem;
	}
	.tab1 ul li h3 span:nth-child(1){
		font-size: 0.4rem;
	}
	.tab1 ul li h3 span:nth-child(2){
		color: #b0b0b0;
		float: right;
	}
	.tab1 ul li #content{
		height: 1.6rem;
		width: 90%;
		margin-left: 5%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tab1 ul li #content_img{
		width: 1.6rem;
		height: 1.6rem;
	}
	.tab1 ul li #content_img img{
		width: 100%;
		height: 100%;
	}
	.tab1 ul li #content_text{
		width: 6.6rem;
		height: 1.6rem;
		word-wrap:break-word;
	}
	.tab1 ul li #content_text #bianhao{
		margin-top: 0.26rem;
	}

	#nomore{
		width: 100%;
		height: 0.333333rem;
		line-height: 0.133333rem;
		margin-top: 0.933333rem;
		text-align: center;
		margin-bottom: 0.5rem;
	}




	.tab2_bg_img{
		width: 100%;
		height: 5.306667rem;
		position: fixed;
		top: 40%;
	}




	#success_msg{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		float: left;
	}

	#success_img{
		width: 100%;
		height: 5.333333rem;
		margin-top: 1.2rem;
		margin-bottom: 0.746667rem;
		float: left;
	}

	.success_img img{
		width: 100%;
		height: 100%;
	}
	#success_content{
		width: 94%;
		height: 6.666667rem;
		margin-left: 3%;
		border-radius: 0.4rem;
		background-color: white;
		float: left;
	}
	#success_content ul{
		width: 7.466667rem;
		height: 5.333333rem;
		margin-top: 0.666667rem;
		margin-left: 12%;
	}
	#success_content ul li{
		line-height: 0.9rem;
		font-size: 0.4rem;
		color: #999999;
		display: flex;
		justify-content: space-between;
	}

	#bottom_button input{
		width: 2.866667rem;
		height: 0.933333rem;
		float: left;
		margin-top: 0.533333rem;
		border-radius: 0.4rem;
		border: none;
	}
	#bottom_button input:nth-child(1){
		margin-left: 10%;
	}
	#bottom_button input:nth-child(2){
		margin-left: 22%;
	}
</style>
