<template>
  <div id="myself-banner">
  	<div class="banner">
  		<img src="../../../img/myself/banner.jpg">
  	</div>
  </div>
</template>

<script>
export default {
  name: 'myself-banner',
  data () {
    return {

    }
  }
}
</script>

<style scoped="scoped">
	#myself-banner{
		width: 100%;
		height:2.746667rem;
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
</style>
