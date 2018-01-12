<template>
	<div id="app">
		<div class="gsdtDetail-page">
			
			<!--公司动态标题-->
			<div class="title">
				<img src="../../../../img/home/h-return_03.jpg" @click="back"/>
				<h2>公司动态</h2>
			</div>
			
			<!--公司动态详情图片-->
			<div class="detail_img">
				<img src="../../../../img/home/h-gsdtDetail_02.jpg" alt="" />
			</div>
			
			
			<!--头像-->
			<div class="touxiang">
				<!--头像里的图片-->
				<div class="tx-img">
					<img src="../../../../img/home/h-tx-img_03.jpg" alt="" />
				</div>
				<!--头像跟前文本-->
				<div class="tx-text">
					<p>编辑:{{json.bj}}</p>
					<p>时间:{{json.time}}</p>
				</div>
			</div>
			
			<!--共建网络--CBK  -->
			<div class="cbk-title">
				{{json.text}}
			</div>
			
			
			<!--第一段文字-->
			<div class="firstP">
				{{json.xq_top}}
			</div>
			
			<!--文字下的图片-->
			<div class="firstTu">
				<img src="../../../../img/home/h-firstP_03.jpg"/>
			</div>
			
			
			<!--第二段文字-->
			<div class="twoP">
				{{json.xq_bottom}}
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		data(){
			return {
				arr:[],
				json:[]
			}
		},
		created(){
			this.xq()
		},
		methods:{
			back(){
				this.$router.back(-1)
			},
			xq(){
				var id = this.$route.params.id;
				axios.get("../../../src/api/gsdt.json").then((res)=>{
					console.log(res.data);
					this.arr = res.data;
					console.log(id);
					for(var i=0;i<this.arr.length;i++){
						console.log(this.arr[i].id)
						if(this.arr[i].id==id){
							this.json = this.arr[i]
							console.log(this.json)
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.gsdtDetail-page{
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		z-index: 1003;
		background: white;
	}
	/*公司动态详情*/
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
	
	/*750  241*/
	/*公司动态详情图片*/
	.detail_img{
		width: 100%;
		height: 3.213333rem;
	}
	.detail_img img{
		width: 100%;
		height: 100%;
	}
	
	/*头像*/
	.touxiang{
		width: 100%;
		height: 2rem;
		/*background: pink;*/
		position: absolute;
		top:3.64rem;
		display: flex;
	}
	.tx-img{
		width: 1.96rem;
		height: 2rem;
		background: white;
		margin-left: 4.013333rem;
		padding: 0.106666rem;
	}
	.tx-img img{
		width: 100%;
		height: 100%;
	}
	.tx-text{
		width: 2.666666rem;
		height: 0.933333rem;
		position: absolute;
		bottom: 0;
		left: 6.32rem;
		color: #b0b0b0;
		line-height: 0.533333rem;
	}
	
	/*cbk-标题*/
	.cbk-title{
		width: 100%;
		height: 2.053333rem;
		margin-top: 1.173333rem;
		/*background: pink;*/
		font-size: 0.426666rem;
		text-align: center;
		line-height: ;
		padding: 0.44rem 2.72rem;
		color: #333333;
	}
	
	/*第一段文字*/
	.firstP{
		width: 10rem;
		height: 1.853333rem;
		/*background: yellow;*/
		padding: 0.32rem  0.266666rem;
		/*0.266666rem*/
		color:#666666;
		text-indent: 1.5em;
		font-size: 0.266666rem;
	}
	
	/*文字下面的图*/
	.firstTu{
		width: 10rem;
		height: 4.586666rem;
		/*background: yellow;*/
		padding: 0.293333rem 0.733333rem;
	}
	.firstTu img{
		width: 100%;
		height: 100%;
	}
	
	.twoP{
		width: 10rem;
		height: 1.853333rem;
		/*background: yellow;*/
		padding: 0.32rem  0.266666rem;
		color:#666666;
		text-indent: 1.5em;
		font-size: 0.266666rem;
	}
</style>