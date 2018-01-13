<template>

	<!-- <swiper1 id="swiper1" :data="obj"></swiper1> -->

	<div id="app">
		<div class="header" id="header">
			<keep-alive>
				<slot>
					<select id="city" v-model="selected" @change="doAjax(selected)">
						<!--渲染城市列表-->
						<option v-for="item in citys">
							{{item.name}}
						</option>
					</select>
				</slot>
			</keep-alive>
			<span>搜索</span>
			<div id="serach">
				<input type="text" placeholder="搜索关键字、商品、商家" />
			</div>
		</div>
		<div id="box"></div>

		<!--轮播-->
		<div class="banner">
			<swiper1 :data="obj" class="swiper1"></swiper1>
		</div>

		<!--主体-->
		<div class="main">

			<div class="main-navs">
				<!--获取商品分类数据-->
						<swiper :options="swiperOption">
				        	<swiper-slide v-for="(item,index) in shopList" class="nav-slider" :class="{'active':ind == index?'active':''}">
				        		<span @click="choose(index)">{{item.name}}</span>
				        	</swiper-slide>
				      	</swiper>

				<!--商品分类  本地数据-->
<!-- 				<swiper :options="swiperOption">
					<swiper-slide v-for="(item,index) in shopNav" class="nav-slider" :class="{'active':ind == index?'active':''}">
						<span @click="choose(index)">{{item}}</span>
					</swiper-slide>
				</swiper> -->

			</div>

			<!--商品分类->更多分类  本地数据-->
			<div class="moreShopnav">
				<div class="nav-shop">
					<ul>
						<li v-for="(item,index) in moreNav" :class="{'bgcolor':ind2 == index? 'bgcolor':''}">
							<span @click="choose2(index)">{{item}}</span>
						</li>
					</ul>
				</div>

				<!--还有点需要-->
				<div class="tuijian_ul">
					<ul class="detail-ul">
						<li v-for="data in arr" @click="getshopId(data.bid)">
							<img :src="data.logo"/>
							<p class="p1">{{data.store_name}}</p>
							<p class="p4">{{data.branch_name}}</p>
						</li>
					</ul>
				</div>

			</div>

		</div>

	</div>

</template>
<script>
	import { creatParams, BaseUrl } from '../../api/BaseUrl.js';
	import swiper from '../../common/swiper/swiper.vue'
	export default {
		data() {
			return {
				value: '1',
				activeTab: 'tab1',
				arr: [],
				citys: [],
				shopList: [],
				ind: 0,
				ind2: 0,
				obj: {
					img: [
						"./src/img/around/banner_02.png",
						"./src/img/around/banner_02.png",
						"./src/img/around/banner_02.png"
					]
				},
				selected: "",
				swiperOption: {
					slidesPerView: 5,
					spaceBetween: 5,
					freeMode: true,
				},
				//对应的菜单详情
				allMenu: [],
				//本地数据 shopNav
				shopNav: ["推荐", "餐饮", "酒店", "娱乐", "KTV", "酒店", "火锅"],
				//更多shopNav
				moreNav: ["热门", "小吃快餐", "面包甜点", "川菜", "湘菜", "北京菜", "浙江菜", "西餐"]
			}
		},
		components: {
			"swiper1": swiper
		},
		created() {
			//获取当前城市
						this.getCurrentCity();

			//获取商品分类
			this.getShopList();

			//推荐商家
			this.produce_shopHome();
		},

		methods: {
			//获取当前城市
			getCurrentCity() {
				var data = creatParams('{"act":"getlist"}', '{"token":"1"}');
				this.$http.post(BaseUrl + "region" + data).then(res => {
					var result = res.data.data;
					this.allresult = JSON.parse(Base64.decode(result));
					this.citys = this.allresult.hot_list;
				})
			},
			//获取商品分类
			getShopList() {
				var data = creatParams('{"act":"getlist"}', '{"token":"1"}');
				this.$http.post(BaseUrl + "plat_category" + data).then(res => {
					var result = res.data.data;
					this.allShoplist = JSON.parse(Base64.decode(result));
					this.shopList = this.allShoplist.category_list;
				})
			},
			//下拉选中城市
			doAjax(a) {
				localStorage.setItem("city", a);
				this.selected = a;
				var that = this;
				setTimeout(function() {
					that.$router.push("city");
				}, 500)
			},
			//选择选中的菜单
			choose(i) {
				this.ind = i;
				//选中哪个获取对应的内容
				var data = creatParams('{"act":"getlist","cid":i}', '{"token":"1"}');
				this.$http.post(BaseUrl + "plat_merchant" + data).then(res => {
					console.log(res.data);
				})
			},
			//更多选项选中
			choose2(i) {
				this.ind2 = i;
				var data = creatParams('{"act":"getlist","cid":i}', '{"token":"1"}');
				this.$http.post(BaseUrl + "plat_merchant" + data).then(res => {
					console.log(res.data);
				})
			},

			//推荐商家
			produce_shopHome() {
				var data = creatParams('{"act":"recommend","limit":"10"}', '{"token":"1"}');
				this.$http.post(BaseUrl + "plat_merchant" + data).then(res => {
					//		    		console.log(JSON.parse(Base64.decode(res.data.data)));
					this.arr = JSON.parse(Base64.decode(res.data.data));
					this.arr = this.arr.list;
				})
			},
			getshopId(bid){
				sessionStorage.setItem("id",bid)
				this.$router.push("/around_dataile")
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper1 {
		height: 2.84rem;
		width: 100%;
	}
	
	#header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	
	#box {
		height: 1.24rem;
	}
	
	.header {
		width: 100%;
		height: 1.24rem;
		line-height: 1.24rem;
		background: white;
	}
	
	#city {
		border: none;
		width: 1.8rem;
		font-size: 0.4rem;
		position: absolute;
		left: 0;
		top: 0.3rem;
	}
	
	.header span {
		display: block;
		width: 15%;
		font-size: 0.38rem;
		float: right;
		text-align: center;
	}
	
	#serach {
		width: 70%;
		float: left;
	}
	
	.header input {
		margin-left: 2rem;
		width: 80%;
		height: 0.6rem;
		border-radius: 0.266667rem;
		background: #f2f2f2;
		border: none;
		text-indent: 4em;
	}
	
	.banner {
		width: 100%;
		height: 2.813333rem;
		background: #f1f1f1;
	}
	/*主体*/
	
	.main {
		width: 100%;
		height: 100%;
		/*border: 0.013333rem solid black;*/
	}
	/*推荐nav*/
	
	.main-navs {
		/*clear: both;*/
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.266666rem;
		margin-top: 2%;
		/*background: red;*/
		text-align: center;
	}
	
	.nav-slider {
		/*border:0.013333rem solid black;*/
		background: lightpink;
	}
	/*默认被选中*/
	
	.active {
		border-bottom: 0.05rem solid red;
	}
	
	.bgcolor {
		background: #f45971;
		color: white;
	}
	/*商品分类下的更多分类*/
	
	.moreShopnav {
		width: 100%;
		height: 100%;
		background: #F2F2F2;
		/*border: 1px solid black;*/
	}
	
	.nav-shop {
		width: 100%;
		height: 2.45rem;
		/*background: red;*/
	}
	
	.nav-shop ul {
		width: 100%;
		height: 100%;
	}
	
	.nav-shop ul li {
		float: left;
		width: 20%;
		height: 0.8rem;
		margin-top: 0.266666rem;
		margin-left: 4%;
		border-radius: 0.266666rem;
		border: 0.013333rem solid #dedede;
		text-align: center;
		line-height: 0.8rem;
	}
	/*nav-css*/
	
	.tuijian_ul {
		width: 100%;
		height: 100%;
	}
	
	.detail-ul {
		width: 94%;
		height: 100%;
		/*border: 1px solid black;*/
		margin: 0 auto;
	}
	
	.detail-ul li {
		position: relative;
		width: 100%;
		height: 2.506666rem;
		background: white;
		margin-bottom: 0.266666rem;
		border-radius: 0.13333rem;
		box-shadow: 0 0 0.206667rem #9a9a9a;
	}
	
	.detail-ul li img {
		width: 1.973333rem;
		height: 1.973333rem;
		margin-top: 0.266666rem;
		margin-left: 0.266666rem;
		float: left;
	}
	
	.p4 {
		font-size: 0.213333rem;
		position: absolute;
		left: 2.52rem;
		font-size: 0.333333rem;
		top: 0.38rem;
	}
	
	.p1 {
		position: absolute;
		left: 2.52rem;
		top: 1.026666rem;
		color: #8f8f8f;
		font-size: 0.3rem;
	}
</style>