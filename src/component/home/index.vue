<template>
  <div id="app">
    		<heads></heads>
		    <classification></classification>
		    
		    <router-link to="/gsdt">
			  <dynamic></dynamic>
			  </router-link>
			  
			  <Advertisement></Advertisement>
			  <integral></integral>
			  <brand></brand>
			  <Recommend></Recommend>
			  
			  

   
  </div>
</template>

<script>
import {creatParams,BaseUrl} from '../../api/BaseUrl.js';

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
  created(){
  	//base64的使用方式 
  	//this.Base64.encode('要加密的字符、参数');
//this.Base64.encodeURI(要加密的字符、参数'');
// 
//this.Base64.decode('要解密的字符参数'); 
//this.Base64.decodeURI('要解密的字符参数'); 
//this.md5.hex('');
		//第二个参数是token  
		var data=creatParams('{"act":"getlist"}',"")
//var data='?data=eyJhY3QiOiJnZXRsaXN0In0=&request_time=1514441216905&sign=79a4978ff73ff24b266da8574e3426ff&token=""'
//
			this.$http.get(BaseUrl+"plat_category"+data).then(res=>{
				console.log(res.data)
				
			})
  	
  },
  methods:{
  	
  	
  },
  components:{
  	"heads":head,//头部
  	"classification":classification,//十个圆（分类）
  	"dynamic":dynamic,//公司动态
  	"Advertisement":Advertisement,//广告
  	"integral":integral,//积分
  	"brand":brand,//品牌
  	"Recommend":Recommend//推荐
  }
}
</script>

<style scoped>

</style>
