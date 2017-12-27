<template>
  <div id="app">
   	<classify></classify>
  </div>
</template>

<script>
import classify from './classify-home/classify-home.vue';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
  	'classify':classify
  }
}
</script>

<style>

</style>
