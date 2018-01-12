<template>
	<div id="app">

		<div class="headone">
			<router-link to="/searchx">
				<span class="left"></span>
			</router-link>
			<p>小善</p>
			<router-link to='/loading' tag='span'>
				<span class="right"></span>
			</router-link>
		</div>

		<div class="headtwo">
			<banners class="banner" :data="obj">
			</banners>
		</div>

	</div>
</template>
<script>
	import { BaseUrl, creatParams } from "../../../api/BaseUrl.js"
	import banner from '../../../common/swiper/swiper.vue'
	import search from '../search.vue'

	export default {
		name: 'app',
		data() {
			return {
				result: null,
				hide: false,
				obj: {
					img: []
				}
			}
		},
		created() {
			var data = creatParams('{"act":"getlist","position":"1"}', "");
			this.$http.get(BaseUrl + "plat_banner" + data).then(res => {
				var arr = JSON.parse(Base64.decode(res.data.data))
				this.result = arr.list;
				//		console.log(this.result)
				for(var i in this.result) {
					this.obj.img.push(this.result[i].image)
					//		console.log(this.result[i].image)
				}
				//			console.log(this.obj)
				
			})
		},
		components: {
			"banners": banner
		}
	}
</script>
<style scoped="scoped">
	.headone {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		background: url(../../../img/home/h_one.png) no-repeat;
		background-size: 10.373333rem 26.626667rem;
		background-position: 0 -18.373333rem;
	}
	
	.headtwo {
		width: 100%;
		height: 5.573333rem;
		float: left;
		/*background: url(../../../img/home/h_one.png) no-repeat;*/
		background-size: 10.373333rem 26.626667rem;
		background-position: 0 -18.373333rem;
	}
	
	.left {
		display: block;
		width: 5.6%;
		height: 0.56rem;
		background: url(../../../img/home/h_one.png) no-repeat;
		background-size: 10.373333rem 26.626667rem;
		background-position: 0 0;
		margin: 0.266667rem 0 0 0.266667rem;
		float: left;
	}
	
	.right {
		display: block;
		width: 6.4%;
		height: 0.586667rem;
		background: url(../../../img/home/h_one.png) no-repeat;
		background-size: 10.373333rem 26.626667rem;
		background-position: -1.453333rem 0;
		float: right;
		margin: 0.253333rem 0.266667rem 0 0;
	}
	
	.headone p {
		float: left;
		width: 82.6%;
		height: 1.133333rem;
		text-align: center;
		line-height: 1.133333rem;
		font-size: 0.453333rem;
		color: #ffffff;
	}
	
	.banner {
		width: 100%;
		height: 4.5rem;
		margin-top: 1.133333rem;
	}
</style>