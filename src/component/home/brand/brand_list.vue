<template>
	<div id="app">
		<div class="header">
			<img src="../../../img/home/h-return_03.jpg" @click="back">
		</div>
		<div class="main" v-if="!show">
			
		<router-link :to="'/Recommend_list/'+arr.id">
			<div class="list">
				<img :src="arr.img">
			</div>
			<div class="text">
				<p>{{arr.name}}</p>
				<p>￥{{arr.price}}</p>
			</div>
	</router-link>

		</div>
	
		<div class="main" v-for="data in arr" v-if="show">
		<router-link :to="'/Recommend_list/'+data.id">
			<div class="list">
				<img :src="data.img">
			</div>
			<div class="text">
				<p>{{data.name}}</p>
				<p>￥{{data.price}}</p>
			</div>
		</router-link>
		</div>
	
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'app',
		data() {
			return {
				arr: [],
				show: false
			}
		},
		created() {
			var id = this.$route.params.id
			//			this.list();
			if(id == 0) {
				this.show = true;
				var url = "../.././src/api/brand_list.json";
				axios.get(url).then((res) => {
					this.arr = res.data;
					console.log(res.data)
				})
			} else {
				this.list();
			}
		},
		methods: {
			back() {
				this.$router.back(-1)
			},
			list() {
				var id = this.$route.params.id;
				var url = "../.././src/api/brand_list.json";
				axios.get(url).then((res) => {
					//				this.arr = res.data;
					console.log(res.data)
					this.arr = res.data[id - 1];
				})
			}
		}
	}
</script>
<style scoped="scoped">
	
	.header {
		width: 100%;
		height: 1.133333rem;
		border-bottom: 3px solid #F2F2F2;
	}
	
	.header img {
		margin-top: 0.16rem;
		margin-left: 0.333333rem;
		width: 0.4rem;
		height: 0.666666rem;
	}
	
	.list {
		width: 33%;
		height: 2.6rem;
		float: left;
	}
	
	.list img {
		width: 3.23333rem;
		height: 2.6rem;
	}
	
	.text {
		width: 67%;
		height: 2.6rem;
		float: left;
	}
	
	.text p:nth-child(1) {
		margin-top: 0.133333rem;
		font-size: 0.4rem;
		color: #000;
	}
	
	.text p:nth-child(2) {
		margin-top: 0.566666rem;
		color: red;
		font-size: 0.36rem;
	}
	
	.main {
		width: 100%;
		height: 2.75rem;
		;
		border-bottom: 0.04rem solid #F2F2F2;
	}
</style>