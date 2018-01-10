<template>
  <div id="integral">
    <integralheads></integralheads>
    <integralcontents></integralcontents>
  </div>
</template>

<script>
import integralhead from './integralhead'
import integralcontent from './integralcontent'
export default {
  name: 'integral',
  data () {
    return {

    }
  },
  components:{
    "integralheads":integralhead,
    "integralcontents":integralcontent,
  }
}
</script>

<style scoped="scoped">
	#integral{
		width: 100%;
		background: #f2f2f2;
	}
</style>
