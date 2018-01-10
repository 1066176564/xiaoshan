<template>
  <div id="certification">
   	<certificationheads></certificationheads>
    <certificationcontents></certificationcontents>
  </div>
</template>

<script>
import certificationhead from './certificationhead.vue'
import certificationcontent from './certificationcontent.vue'

export default {
  name: 'certification',
  data () {
    return {

    }
  },
  components:{
  	"certificationheads":certificationhead,
    "certificationcontents":certificationcontent
  }
}
</script>

<style scoped="scoped">
	#certification{
		width: 100%;
		background: #f2f2f2;
	}
</style>
