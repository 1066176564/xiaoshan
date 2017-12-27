<template>
  <div id="editname">
      <div class="head">
          <div class="img" @click="back()">
            
          </div>
          <span>修改昵称</span>
      </div>
  </div>
</template>

<script>
 
export default {
  name: 'editname',
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
	#editname{
		width: 100%;
    position: absolute;
    height: 100%;
    z-index: 9999;
		background: #f2f2f2;
	}
  #editname .head{
    width: 100%;
    height: 1.173333rem;
    background: #ffffff;
    border-bottom: 1px solid #f2f2f2;
  }
  .img{
    background: url(../../../img/myself/set/set.png) no-repeat;
    background-size: 10.0rem 5.333333rem;
    background-position: -1.013333rem -0.48rem;
    width: 0.32rem;
    height: 0.613333rem;
    margin-left: 0.266667rem;
    margin-top: 0.32rem;
    float: left;
  }
  .head span{
    display: block;
    text-align: center;
    font-size: 0.453333rem;
    line-height: 1.173333rem; 
  }
</style>
