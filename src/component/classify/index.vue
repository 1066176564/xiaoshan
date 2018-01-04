<template>
  <div id="app">
   <classify></classify>
   
   
  </div>
</template>

<script>
	import {BaseUrl,creatParams}from "../../api/BaseUrl.js"
import classify from './classify-home/classify-home.vue';
export default {
  name: 'app',
  data () {
    return {
			result:null
    }
  },
  created(){
  	var data=creatParams('{"act":"plat_user"}',"");
	this.$http.get(BaseUrl+"plat_user"+data).then(res=>{
		//this.result=JSON.parse(Base64.decode(res.data.data));
		
		console.log(res.data.data)
		
		
	})
	
	
  	
  },
  components:{
  	'classify':classify
  }
}
</script>

<style>

</style>
