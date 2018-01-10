<template>
  <div id="words">
    <div class="header">
        <div class="img" @click="back()">
        
        </div>
        <span style="color:#ffffff;">我要留言</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'words',
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped="scoped">
	#words{
		width: 100%;
		background: #f51e1e;
	}
	.head{
    width: 100%;
    height: 6.4rem;
    background: #000000;
    border-bottom: 1px solid #f2f2f2;
    background: url(../../../img/myself/integeral/integeral-1.png);
    background-size: cover; 

  }
  .img{
    background: url(../../../img/myself/set/set.png) no-repeat;
    background-size: 10.0rem 5.333333rem;
    background-position: -1.013333rem -0.48rem;
    width: 0.32rem;
    height: 0.613333rem;
    margin-left: 0.266667rem;
    margin-top: 0.32rem;
    position: fixed;
    left: 0;
  }
  .header span{
    display: block;
    text-align: center;
    font-size: 0.453333rem;
    line-height: 1.173333rem; 
  }
</style>
