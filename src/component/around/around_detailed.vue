<template>
	<div id="app">
		<div class="head">
			<ul>
				<li @click="back"><img v-lazy="goback"></li>
				<li>商铺详情</li>
				<li></li>
			</ul>
		</div>
		<div class="main">
			<div>
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide"><img :src="json.logo"></div>
				    <div class="swiper-slide"><img :src="json.logo"></div>
				    <div class="swiper-slide"><img :src="json.logo"></div>
				  </div>
				</div>
				<div class="shopName">商店名称：<span>{{json.store_name}}</span></div>
				<div class="shopTime">营业时间：<span>"时间暂无"</span></div>
				<div class="shopType">商家类型：<span>"暂无分类"</span></div>
				<div class="shopPostion">所在位置：<span>{{json.city}}</span></div>
				<div class="shopContent">店铺简介：<span>{{json.slogan}}</span></div>
			</div>
		</div>

		<div class="footer" @click="more" v-if="show">
			<button class="more">展　　开</button>
		</div>
		<div class="footer" @click="more" v-if="!show">
			<button class="more">收　　起</button>
		</div>
	</div>
</template>
<script>
	import {creatParams,BaseUrl} from '../../api/BaseUrl.js';
	import Swiper from 'swiper';
	export default{
		data(){
			return{
				goback:"../src/img/home/h-return_03.jpg",
				id:"",
				arr:[],
				json:[],
				show:true,
			}
		},
		created(){
			this.getJson()
		},
		methods:{
			more(){
				this.show=!this.show;
			},
			back(){
				this.$router.back(-1);
				sessionStorage.removeItem("id")
			},
			getJson(){
				var id = sessionStorage.getItem("id")
				this.$http.get("../src/api/arounddetail.json").then(res=>{
					this.arr = res.data
					for(var i = 0;i<this.arr.length;i++){
						if(this.arr[i].bid==id){
							this.json = this.arr[i]
						}
					}
				})
			}
		},
		mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                speed: 600,
                autoplay: 4000,
				slidesPerView : 1.3,
	            centeredSlides: true,
	            initialSlide:1,
	            watchActiveIndex: true,
                coverflowEffect: {
				  rotate: 30,
				  stretch: 10,
				  depth: 60,
				  modifier: 2,
				  slideShadows : true
				},
				autoplay : {
				   delay:3000
				}
            });
		}
}
</script>
<style type="text/css" scoped="scoped">
	.footer{
		width: 100%;
		text-align: center;
	}
	.more{
		margin-top: 0.666667rem;
		background: none;
		border: none;
	}

	.swiper-container{
		border-top: 0.013333rem solid #F1F1F1;
		border-bottom: 0.013333rem solid #F1F1F1;
	}
	.swiper-slide{
		margin-top: 0.266667rem;
		text-align: center;
		margin-bottom: 0.266667rem;
	}
	.swiper-slide img{
		box-shadow: 0.013333rem 0.013333rem 0.013333rem #CCCCCC;
		width: 7.4rem;
		height: 5rem;
		border-radius: 0.2rem;
	}

	.shopName{
		line-height: 1.333333rem;
		padding-left: 0.266667rem;
		height: 1.333333rem;
		border-bottom: 0.013333rem solid #F1F1F1;
		font-size: 0.5rem;
	}
	.shopName span{
		display: inline-block;
		font-size: 0.4rem;
		color: #cccccc;
	}
	.shopTime{
		height: 1.333333rem;
		padding-left: 0.266667rem;
		line-height: 1.333333rem;
		border-bottom: 0.013333rem solid #F1F1F1;
		font-size: 0.5rem;
	}
	.shopTime span{
		font-size: 0.4rem;
		color: #cccccc;
	}
	.shopType{
		padding-left: 0.266667rem;
		height: 1.333333rem;
		line-height: 1.333333rem;
		border-bottom: 0.013333rem solid #F1F1F1;
		font-size: 0.5rem;
	}
	.shopType span{
		font-size: 0.4rem;
		color: #cccccc;
	}
	.shopPostion{
		padding-left: 0.266667rem;
		height: 1.333333rem;
		line-height: 1.333333rem;
		border-bottom: 0.013333rem solid #F1F1F1;
		font-size: 0.5rem;
	}
	.shopPostion span{
		font-size: 0.4rem;
		color: #cccccc;
	}
	.shopContent{
		padding-left: 0.266667rem;
		height: 1.333333rem;
		line-height: 1.333333rem;
		font-size: 0.5rem;
	}
	.shopContent span{
		font-size: 0.4rem;
		color: #cccccc;
	}
	.head ul{
		display: flex;
		text-align:center;
	}
	.head ul li{
		height:1rem;
		line-height: 1rem;
		font-size: 0.4rem;
		flex: 1;
	}
	.head ul li img{
		float: left;
		margin-top:0.1rem;
		width: 0.6rem;
		height:0.6rem;
	}
</style>