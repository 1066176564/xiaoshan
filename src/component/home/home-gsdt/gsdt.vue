<template>
	<div id="app">
		<div class="gsdt-page">
			
			<div class="title">
				<img src="../../../img/home/h-return_03.jpg" @click="back"/>
				<h2>公司动态</h2>
			</div>
			
			<div class="kinds">
				<ul>
					
					<li v-for="item in arr">
						<router-link :to="'/gsdt_detail/'+item.id">
							<div class="img_left">
								<img :src="item.img"/>
							</div>
							<div class="text_right">
								<p>{{item.text}}</p>
								<span>{{item.time}}</span>
								<p class="main_title">{{item.title}}</p>
							</div>
						</router-link>
					</li>
					
				</ul>
			</div>
		</div>
		

	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
				arr:[]
			}
		},
		created(){
			this.query()
		},
		methods:{
			back(){
				this.$router.back(-1)
			},
			query(){
				var url = "./src/api/gsdt.json";
				axios.get(url).then((res)=>{
					console.log(res.data);
					this.arr = res.data;
				})
			}
		}
	}
</script>

<style scoped>
	img{border: none;}
	.gsdt-page{
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		z-index: 1000;
		background: #f2f2f2;
	}
	/*公司动态标题*/
	.title{
		width: 100%;
		height: 1.253333rem;
		border-bottom: 0.013333rem solid #f2f2f2;
		display: flex;
		align-items: center;
		background: white;
	}
	.title img{
		width: 0.306666rem;
		height: 0.586666rem;
		margin-left: 0.266666rem;
	}
	.title h2{
		margin-left: 3.506666rem;
		font-size: 0.426666rem;
		font-weight: bold;
		letter-spacing: 0.026666rem;
	}
	
	.kinds{
		width: 100%;
		height: 16.35rem;
	}
	.kinds ul{
		width: 100%;
		height: 16.35rem;
	}
	.kinds ul li{
		width: 100%;
		height: 2.44rem;
		background: white;
		display: flex;
		align-items: center;
		margin-bottom: 0.266666rem;
	}
	.img_left{
		width: 2.933333rem;
		height: 1.866666rem;
		float: left;
		margin-left: 0.266666rem;
	}
	.img_left img{
		width: 2.933333rem;
		height: 1.866666rem;
		float: left;
	}
	.text_right{
		width: 6.346666rem;
		height: 1.866666rem;
		margin-left: 0.253333rem;
		float: left;
	}
	.text_right p{
		font-size: 0.373333rem;
		line-height: 0.40rem;
		padding-top: 0.25rem;
		letter-spacing: 0.009955rem;
		color:#333333;
		float: left;
	}
	.text_right span{
		float:right;
		margin-top: 0.5rem;
		color:#b0b0b0;
	}
	.text_right .main_title{
		width: 1.333333rem;
		height: 0.5rem;
		line-height: 0.05rem;
		text-align: center;
		float: left;
		border-radius: 0.133333rem;
		background-color: red;
		color: white;
		margin-top: 0.4rem;
	}
</style>