<template>
  <div id="words">
  	<div style="width:100%;height:1.8rem;">
  		<p style="font-size:0.48rem; margin-left:0.2rem;margin-right:0.2rem;">
  		您的批评和建议能让我们更好的完善产品,请留下您的宝贵的建议和意见
  	</p>
  	</div>
  	
    <textarea rows=8 name=text style="overflow:auto" placeholder="请留下您的宝贵意见" v-model="text">
    	
    </textarea>

    <button @click="emit()">提交</button>
  </div>
</template>

<script>

export default {
  name: 'words',
  data () {
    return {
    	text:""
    }
  },
  methods:{
  	emit(){
  		localStorage.setItem("item",this.text)
  	}
  }
}
</script>

<style scoped="scoped">
	#words{
		width: 100%;
		background: #ffffff;
		margin: 0 auto;
		padding: 0;
	}
	textarea{
		width: 80%;
		margin-left: 0.2rem;
		border-radius: 0.2rem;
		margin: 0 auto;
		display: block;
		resize: none;
	}
	button{
		width: 80%;
		height: 1.066667rem;
		background: #f51e1e;
		color: #ffffff;
		font-size: 0.48rem;
		border-radius: 0.2rem;
		border:none;
		text-align: center;
		margin-top: 0.266667rem;
		margin-left: 10%;
	}
</style>
