<template>
  <div id="app">
  	<!-- 显示组件视图 -->
   <swiper1 id="swiper1" :data="obj"></swiper1>
  </div>
</template>
<script>
//引入
import swiper from '../swiper/swiper.vue'

export default {
  name: 'app',
  data () {
    return {
    	//要传送的数据
    	obj:{
    		//图片为一个数组格式
    	img:[
    	"http://img.redocn.com/sheji/20160504/wusiqingnianjiewomenzhengnianqinghengbanxiaoyuanhaibao_6264121.jpg",
    	"http://img5.imgtn.bdimg.com/it/u=1627046991,2527793126&fm=27&gp=0.jpg",
    	"http://img.redocn.com/sheji/20160504/wusiqingnianjiewomenzhengnianqinghengbanxiaoyuanhaibao_6264121.jpg",
    	"http://img2.imgtn.bdimg.com/it/u=1102630298,4097046580&fm=27&gp=0.jpg"
    	],
    	//以下分别是分页器、上下页按钮、滑动条、不写默认false
    	pagination:true,
    	button:true,
    	scrollbar:true,
    }
    }
  },
  //定义下组件名
  components:{
  	"swiper1":swiper
  }
}
</script>

<style>
/*轮播样式*/
#swiper1{
	height: 3.666667rem;
	width: 100%;
}
</style>
