<template>
  <div id="app">
   	<heads></heads>
   	<orders></orders>
    <produces></produces>
   	<sets></sets>
   	<banners></banners>
  </div>
</template>

<script>
import head from './myself-head.vue'
import order from './myself-order.vue'
import set from './myself-set.vue'
import banner from './myself-banner.vue'
import produce from './myself-produce.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
  	"heads":head,
  	"orders":order,
    "produces":produce,
  	"sets":set,
  	"banners":banner
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		background: #f2f2f2;
	}
</style>
