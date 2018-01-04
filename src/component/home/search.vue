<template>
  <div id="app" v-show="hide">
  	<div style="height: 0.466667rem"></div>
  	<div class="search_head" >
  		<!-- <span style="line-height: 1.24rem;" @click="hide = false">返回</span> -->
  		<img v-lazy="back_go" class="back_go" @click="goback">
  		<div class="search_input">
  			<mu-icon value="search"/>
  			<input type="text" placeholder="天骏" v-model="text">
  		</div>
  		<span style="margin-left:0.726rem;color: red;line-height: 1.30rem;">搜索</span>
  	</div>
  	<div class="text_history" v-if="bool">
  		<div class="tishi"><div class="img"></div><span class="tixing">搜索“手表”店铺</span></div>
		<div v-for="item in list" style="display: flex;margin-left:0.266667rem;border-bottom:0.013333rem solid #F1F1F1;">
			<div class="list">{{item.one}}</div>
			<span class="type_1">机械表</span>
			<span class="type_2">瑞表</span>
			<span class="type_3">时尚腕表</span>
		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	bool:false,
    	text:"",
    	hide:true,
    	list:[
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
	    	{"one":"手表"},
    	],
    	back_go:"src/img/home/h-return_03.jpg"
    }
  },
  watch:{
  	text(value){
  		console.log(value)
  		if(value!=""){
  			this.bool=true
  		}else{
  			this.bool = false
  		}
  	}
  },
  methods:{
  		goback(){
  			this.$router.push({path:'/home'})
  		}
  },
}
</script>

<style scoped>
	.img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.back_go{
		margin-top: 0.3rem;
		width: 0.28rem;
		height: 0.6rem;
	}
	#app{
		margin: 0;
		padding: 0;
		background: white;
	}
	.type_1{
		display: inline-block;
		width: 1.2rem;
		height: 0.533333rem;
		background: #F1F1F1;
		text-align: center;
		line-height: 0.533333rem;
		margin-top: 0.333333rem;
		margin-left: 4.6rem;
		border-radius: 0.02rem;
	}
	.type_2{
		display: inline-block;
		width: 0.933333rem;
		height: 0.533333rem;
		background: #F1F1F1;
		text-align: center;
		line-height: 0.533333rem;
		margin-top: 0.333333rem;
		margin-left: 0.266667rem;
		border-radius: 0.02rem;
	}
	.type_3{
		display: inline-block;
		width: 1.6rem;
		height: 0.533333rem;
		background: #F1F1F1;
		text-align: center;
		line-height: 0.533333rem;
		margin-top: 0.333333rem;
		margin-left: 0.266667rem;
		border-radius: 0.02rem;
	}
	.list{
		/*margin: 0 auto;*/
		font-size: 0.3rem;
		height: 1.2rem;
		line-height: 1.2rem; 
	}
/*	#app{
		background: url('../../../src/search.jpg')no-repeat;
		background-size: 100%;
	}*/
	.search_head{
		width: 100%;
		margin-left: 0.266667rem;
		height: 1.24rem;
		font-size: 0.34rem;
		display: flex;
		font-family: "PingFang Regular.ttf";
		border-bottom: 0.013333rem solid #F1F1F1;
	}
	.search_input{
		outline: none;
		border: none;
		width: 6.5rem;
		background: none;
		font-size: 0.306667rem;
		background: #F1F1F1;
		height: 0.893333rem;	
		border-radius: 0.4rem;
		margin-left: 0.853333rem;
		margin-top: 0.2rem;
		margin-bottom: 0.166667rem;
	}
	.search_input input{
		display: inline-block;
		border-radius: 0.4rem;
		width:85%;
		height: 100%;
		background: none;
		position: relative;
		top: -0.21rem;
		border: none;
		margin: 0;
		padding: 0;
	}
	.material-icons{
		margin-top: 0.193333rem;
		margin-left: 0.266667rem;
	}
	.tixing{
		margin-left: 0.29rem;
		font-size: 0.35rem;
		height: 1.226667rem;
		line-height: 1.226667rem;
	}
	.tishi{
		width: calc(100% - 0.533333rem);
		margin: 0 auto;
		display: flex;
	}
</style>
