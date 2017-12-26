<template>
  <div id="app">
    <heads></heads>
    <classification></classification>
	  <dynamic></dynamic>
	  <Advertisement></Advertisement>
	  <integral></integral>
	  <brand></brand>
	  <Recommend></Recommend>
  </div>
</template>

<script>

import head from './head/head.vue'
import classification from './classification/classification.vue'
import dynamic from './dynamic/dynamic.vue'
import Advertisement from './Advertisement/Advertisement.vue'
import integral from './integral/integral.vue'
import brand from './brand/brand.vue'
import Recommend from './Recommend/Recommend.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
  	"heads":head,//头部
  	// "banner":banner,//轮播
  	"classification":classification,//十个圆（分类）
  	"dynamic":dynamic,//公司动态
  	"Advertisement":Advertisement,//广告
  	"integral":integral,//积分
  	"brand":brand,//品牌
  	"Recommend":Recommend,//推荐
  }
}
</script>

<style>

</style>
