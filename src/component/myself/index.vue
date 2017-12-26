<template>
  <div id="app">
   	<firsts></firsts>
  </div>
</template>

<script>
import first from './person/person.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
  	"firsts":first,
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		background: #f2f2f2;
	}
</style>
