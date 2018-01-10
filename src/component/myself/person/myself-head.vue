<template>
  <div id="myself-head">
  	
  	<router-link to="/set">
  		<div class="head">
	   		<p>{{detail.username}}</p>
		</div>
		   <!-- 头像 -->
		<div class="Avatar">
		   	<img :src="detail.img">
		</div>
  	</router-link>	
   
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'myself-head',
  data () {
    return {
    	detail:[]
    }
  },
  created(){
  	this.getlist()
  },
  methods:{
  	getlist(){
  		var url = "./src/api/myself-person.json"
  		axios.get(url).then((res)=>{
  			this.detail = res.data[0]
  			console.log(this.detail)
  		})
  	}
  }
}
</script>

<style scoped="scoped">
	#myself-head{
		width: 100%;
		height:4.866667rem;
		background: url(../../../img/myself/bg.jpg) no-repeat;
		background-size: 100%;
		position: relative;
	}
	.head{
		width: 1.993333rem;
		height: 0.4rem;
		text-align: center;
		position: absolute;
		top: 2.933333rem;
		left: calc(50% - (1.893333rem/2));
	}
	.head p{
		font-size: 0.48rem;
		display: inline-block;
		color: #f00531;
	}
	.Avatar{
		width: 1.893333rem;
		height: 1.893333rem;
		border-radius: 50%;
		position: absolute;
		top: 3.813333rem;
		left:calc(50% - (1.893333rem/2));
	}
	.Avatar img{
		height: 1.893333rem;
		border-radius: 50%;
	}
</style>
