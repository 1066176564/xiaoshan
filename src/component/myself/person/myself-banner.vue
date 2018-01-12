<template>
  <div id="myself-banner">
  	<div class="banner">
  		<router-link to="/about">
  		<img src="../../../img/myself/banner.jpg">
  			
  		</router-link>

  	</div>
  	<button @click="tcdl()">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'myself-banner',
  data () {
    return {

    }
  },methods:{
  	tcdl(){
  		localStorage.removeItem('token');
  		this.$router.push("/home")
  	}
  }
}
</script>

<style scoped="scoped">
	#myself-banner{
		width: 100%;
/*		height:2.746667rem;*/
		margin: 0 auto;
		background: #ffffff;
		padding-top: 0.453333rem;
	}
	.banner{
		width: 80%;
		height:1.826667rem;
		border-radius: 0.2rem; 
		margin: 0 auto;
		overflow: hidden;
	}
	.banner img{
		width: 100%;
		height:4.293333rem;
		border-radius: 0.2rem;
	}
	button{
		width: 80%;
		height:1.066666rem;
		background: red;
		border-radius: 0.2rem;
	  margin-left: 10%;
	  margin-top: 0.533333rem;
	  color: #ffffff;
	  font-size: 0.373333rem;
	  border:none;
	}
</style>
