<template>
  <div id="integral">
   	<div class="head">
      <div class="header">
        <div class="img" @click="back()">
        
        </div>
        <span style="color:#ffffff;">我的积分</span>
      </div>
      
      <div class="content">
        <p style="margin-top:0.933333rem; color:#ffffff;">25600.00</p>
        <p style="font-size:0.32rem; margin-top:0.426667rem;">总积分</p>
      </div>
      <div class="ul">
        <ul>
          <li>
            <p style="padding-top:0.133333rem;">1200</p>
            <p>消费积分</p>
          </li>
          <li>
            <p style="padding-top:0.133333rem;">1200</p>
            <p>消费积分</p>
          </li>
        </ul>
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'integral',
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
	#integral{
		width: 100%;
		background: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
	}
  .head{
    width: 100%;
    height: 6.4rem;
    background: #ffffff;
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
  .content p{
    color: grey;
    font-size: 0.56rem;
    text-align: center;
  }
  .ul{
    width: 92%;
    height: 1.6rem;
    background: #ffffff;
    border-radius: 0.2rem;
    margin-left: 4%;
    margin-top: 0.64rem;
  }
  .ul ul{
    width: 100%;
    display: flex;
  }
  .ul ul li{
    flex: 1;
    justify-content: space-between;
    text-align: center;
    color: #000000;
    font-size: 0.426667rem;
  }
</style>
