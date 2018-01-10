<template>
  <div id="words">
    <wordsheads></wordsheads>
    <wordscontents></wordscontents>
   	<wordsfoots></wordsfoots>
  </div>
</template>

<script>
import wordshead from './wordshead'
import wordscontent from './wordscontent'
import wordsfoot from './wordsfoot'

export default {
  name: 'words',
  data () {
    return {

    }
  },
  components:{
    "wordsheads":wordshead,
    "wordscontents":wordscontent,
    "wordsfoots":wordsfoot
  }
}
</script>

<style scoped="scoped">
	#words{
		width: 100%;
		background: #ffffff;
	}
</style>
