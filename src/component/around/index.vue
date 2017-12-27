<template>

   <!-- <swiper1 id="swiper1" :data="obj"></swiper1> -->
  

	<div id="app">
	<div class="header" id="header">
			  	<div id="cityBox">
			  	 <select id="city">
			  		<option>北京</option>
			  		<option>上海</option>
			  		<option>河北</option>
			  		<option>天津</option>
			  		<option>魔都</option>
			  		<option>帝都</option>
			  	 </select>
			  </div>
      <span>搜索</span>
      <div id="serach">
      <input type="text" placeholder="搜索关键字、商品、商家"/>
      </div>
		</div>
		<div id="box"></div>
		
		<div class="banner">
     <swiper1 :data="obj" class="swiper1"></swiper1>
		</div>
		<div class="main">
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="tab1" title="推荐" />
				<mu-tab value="tab2" title="餐饮" />
				<mu-tab value="tab3" title="酒店" />
				<mu-tab value="tab4" title="娱乐" />
				<mu-tab value="tab5" title="更多" />
			</mu-tabs>
			<div v-if="activeTab === 'tab1'">
				<div class="tuijian">
						
         <div class="tuijian_ol">
					<ol>
						<li ><button id="one">热门</button></li>
						<li><button>小吃快餐</button></li>
						<li><button>面包甜点</button></li>
						<li><button>川菜</button></li>
						<li><button>湘菜</button></li>
						<li><button>北京菜</button></li>
						<li><button>浙江菜</button></li>
						<li><button>西餐</button></li>
					</ol>
				 </div>
				 <div class="tuijian_ul">
				 	<ul>
				 		<li v-for="data in arr">
				 				<img :src="data.img" />
				 				<p class="p4">{{data.title}}</p>
				 				<p class="p1">{{data.p}}</p>
				 				<p class="p2">{{data.p1}}</p>
				 				<p class="p3">{{data.p2}}</p>
				 				<p class="p5">{{data.p3}}</p>
				 		</li>
				 	</ul>
				 </div>
				</div>
			</div>
			<div v-if="activeTab === 'tab2'">
				<div class="tuijian_ul">
				 	<ul>
				 		<li v-for="data in arr">
				 				<img :src="data.img" />
				 				<p class="p4">{{data.title}}</p>
				 				<p class="p1">{{data.p}}</p>
				 				<p class="p2">{{data.p1}}</p>
				 				<p class="p3">{{data.p2}}</p>
				 				<p class="p5">{{data.p3}}</p>
				 		</li>
				 	</ul>
				 </div>
			</div>
			<div v-if="activeTab === 'tab3'">
				<h2>Tab Three</h2>
				<p>
					这是第三个 tab
				</p>
			</div>
			<div v-if="activeTab === 'tab4'">
				<h2>Tab Three</h2>
				<p>
					这是第4个 tab
				</p>
			</div>
			<div v-if="activeTab === 'tab5'">
				<h2>Tab Three</h2>
				<p>
					这是第5个 tab
				</p>
			</div>
		</div>
	</div>

</template>
<script>
	import swiper from '../../common/swiper/swiper.vue'
	import axios from 'axios'
	export default {
		data() {
			return {
				 value: '1',

				activeTab: 'tab1',
				arr:[],
				obj:{
				   img:[
				   	"./src/img/around/banner_02.png",
				"./src/img/around/banner_02.png",
				"./src/img/around/banner_02.png"
				   ]
				}
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},

		    handleChange (value) {
		      this.value = value
		    }
  
		},
		created(){
			var url = "./src/api/around.json"
			axios.get(url).then((res)=>{
				console.log(res.data);
				this.arr = res.data
				for(var i in this.arr){
					this.obj.img.push(this.arr[i].img)
				}
				
			})
		},
		components:{
			"swiper1":swiper
		}
	}
</script>

<style scoped="scoped">

	.swiper1{
		height:2.84rem;
		width:100%;
	}
	#header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	#box{
		 height: 1.24rem;
	}
	.header {
		width: 100%;
		height: 1.24rem;
		background: white;
		padding-top:0.4rem;
	}	


	#city{
		border:0;
		font-size: 0.4rem;

	}
	#cityBox{
		float: left;
		width: 15%;
		padding-left: 0.066667rem;
	}
	.header span{
		display: block;
		width: 15%;
		font-size: 0.38rem;
		float:right;
		
		text-align: center;

	}


	#serach{
		width: 70%;
		float: left;
	}
	.header input{
		float: right;
		/*margin: 0 8%;*/
		width:100%;
		height:0.6rem;
		border-radius: 0.266667rem;
		background: #f2f2f2;
		border:none;
		padding-left: 1.5rem;
	}
	.banner {
		width: 100%;
		height: 2.813333rem;
		background: #f1f1f1;
	}
	/*tab选型卡样式*/
	.mu-tabs{
		background: white;
		color: black;
		height:1.08rem;
	}
  .mu-tab-link{
  	color: #999999;
  }
  .mu-tab-active{
		color: #f45971;
	}
	/*=====*/
	
	/*推荐*/
	.tuijian{
		width:100%;
		height:11.88rem;
		background: #f2f2f2;
	}
	.tuijian_ol{
		width:100%;
		/*height:1.813333rem;*/
	}
	.tuijian ol{
		width:100%;
		height:1.813333rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.tuijian ol li{
		box-sizing: content-box;
		float: left;
		width: 21%;
		padding-top: 0.333333rem;
	}
	.tuijian ol li button:hover,#one{
		background: #f45971;
		color: white;
		border:0;
	}
	.tuijian ol li button{
		width:100%;
		height:0.506666rem;
		background: #ffffff;
		border: 0.013333rem solid #c7c6c6;
		border-radius: 0.333333rem;
		color: #c7c6c6;
	}
	.tuijian_ul{
		width:94%;
		height:8.4rem;
		margin: 0 auto;
	}
	 .tuijian_ul ul li{
		width:100%;
		height:2.506666rem;
		background: white;
		border-radius: 0.13333rem;
		margin-top: 0.466666rem;
		box-shadow: 0 0 0.206667rem #9a9a9a;

	}
	 .tuijian_ul ul li img{
		width:1.973333rem;
		height:1.973333rem;
		margin-top: 0.266666rem;
		margin-left: 0.266666rem;
		float: left;
	}
	 .tuijian_ul ul li{
		position: relative;
	}
	  .p4{
		font-size: 0.213333rem;
		position: absolute;
		left:2.52rem;
		font-size: 0.333333rem;

		top:0.38rem;
	}
	 .p1{
		position: absolute;
		left:2.52rem;
		top:1.026666rem;
		color: #8f8f8f;
		font-size: 0.3rem;
	}
	 .p2{
		position: absolute;
		left:2.52rem;

		top:1.78rem;
		color: #f56f84;
	}
	 .p3{
		position: absolute;
		left:5rem;
		top:1.78rem;
		color: #8f8f8f;
	}
	 .p5{
		position: absolute;
		right:0.5rem;
		top:0.466666rem;
		color: #8f8f8f;
	}
</style>
