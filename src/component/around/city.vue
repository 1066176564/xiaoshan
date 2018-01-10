<template>
	<div id="app">
		<div class="title">
			<img src="../../img/home/h-return_03.jpg" @click="back"/>
			<h2>{{city}}页面</h2>
		</div>
		<div class="city-content">
			<ul class="city-ul">
				<li v-for="item in cityList">
					{{item.name}}
				</li>
			</ul>
		</div>
	</div>
</template>
	
<script>
	import {creatParams,BaseUrl} from '../../api/BaseUrl.js';
	import axios from 'axios'
	export default {
		data(){
			return {
				city:"",
				cityList:[]
			}
		},
		created(){
			this.city = localStorage.getItem("city");
			this.query();
		},
		methods:{
			back(){
				this.$router.back(-1);
			},
			//查询城市对应的城市
			query(){
				var data = creatParams('{"act":"getlist"}','{"token":"1"}');
				this.$http.post(BaseUrl+"region"+data).then(res=>{
					console.log(res.data);
					var result = res.data.data;
					this.allresult = JSON.parse(Base64.decode(result));
					this.cityList = this.allresult.city_list;
				})
			}
		}
	}
</script>

<style scoped>
	/*公司动态标题*/
	.title{
		width: 100%;
		height: 1.253333rem;
		border-bottom: 0.013333rem solid lightgrey;
		display: flex;
		align-items: center;
	}
	.title img{
		width: 0.306666rem;
		height: 0.586666rem;
		margin-left: 0.266666rem;
	}
	.title h2{
		margin-left: 3.5rem;
		font-size: 0.426666rem;
		font-weight: bold;
		letter-spacing: 0.026666rem;
	}
	
	/*获取到所有的城市列表*/
	.city-content{
		width: 100%;
		height: 100%;
	}
	.city-ul{
		width: 100%;
		height: 100%;
	}
	.city-ul li{
		width: 32%;
		height: 0.8rem;
		border: 0.013333rem solid gainsboro;
		float: left;
		margin-left: 1%;
		margin-top: 1%;
		text-align: center;
		line-height: 0.8rem;
	}
</style>