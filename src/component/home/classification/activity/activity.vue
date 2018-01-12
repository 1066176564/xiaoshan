<template>
  <div id="app">
		<div class="head">
			<router-link to="/home" tag="p">
				<img src="../../../../img/classify/classify_details/classify_details_01.png" />
			</router-link>
			<h2>活动</h2>
		</div>
		<div class="tishi">
			<p>暂无数据</p>
		</div>
  </div>
</template>

<style scoped="scoped">
.head {
		width: 100%;
		height: 1.2rem;
		background: #fff;
		position: fixed;
		z-index: 999;
		display: flex;
		line-height: 1.2rem;
		top: 0;
		border-bottom: 0.013333rem solid #ddd;
	}
	
	.head img {
		height: 0.6rem;
		width: 0.5rem;
		margin-top: 0.3rem;
		margin-left: 0.5rem;
	}
	.head h2 {
		width: 85%;
		text-align: center;
		font-size: 0.533333rem;
		color: #636363;
		font-weight: bold;
	}
	.tishi{
		margin-top: 1.24rem;
		text-align: center;
		font-size: 0.8rem;
		background: #F1F1F1;
		height: 16.48rem;
		color: #CCCCCC;
		line-height: 3rem;
	}
</style>

<script>

</script>