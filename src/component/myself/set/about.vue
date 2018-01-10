<template>
  <div id="about">
    <header>
      <div class="back" @click="back()"></div>
      <h1>小善易购</h1>
    </header>

    <div class="img">
      
    </div>

    <div class="details" @click="about_details()">企业简介</div>
    <div class="culture" @click="about_culture()">企业文化</div>

    <div class="help" @click="about_help()">帮助中心</div>
    <div class="svn">当前是安卓1.0</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'about',
  data () {
    return {
      
    }
  },

  methods:{
    back(){
      this.$router.push({path:"/myself"})
    },

    about_details(){
      this.$router.push({path:"/about_details"})
    },

    about_culture(){
      this.$router.push({path:"/about_culture"})
    },

    about_help(){
      this.$router.push({path:"/about_help"})
    }
  }
}
</script>

<style scoped="scoped">
  #about{
    width: 100%;
    height: 100vh;
  }

  header{
    background: #fff;
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
  }

  .back{
    width: 0.266667rem;
    height: 0.466667rem;
    background:url(../../../img/myself/address/xb1.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -0.453333rem -0.386667rem;
    position: fixed;
    top: 0.4rem;
    left:0.266667rem;
    z-index: 999;
  }

  h1{
    color: #B1191A;
    text-align: center;
    font-weight: bold;
    margin:0;
  }

  /* 图片 */

	.img{
    width: 100%;
    height: 4.0rem;
    border:0.013333rem solid #000;
  }

  /* 帮助中心 */

  .help{
    text-align: center;
    width: 70%;
    margin-left:15%; 
    height: 1rem;
    line-height: 1rem;
    background: #B1191A;
    border-radius: 0.133333rem;
    color: #fff;
    font-size: 0.426667rem;
    margin-top: 0.333333rem;
  }

  /* 企业简介 */

  .details{
    text-align: center;
    width: 70%;
    margin-left:15%; 
    height: 1rem;
    line-height: 1rem;
    background: #B1191A;
    border-radius: 0.133333rem;
    color: #fff;
    margin-top: 0.333333rem;
    font-size: 0.426667rem;
  }

  /* 企业文化 */
  .culture{
    text-align: center;
    width: 70%;
    margin-left:15%; 
    height: 1rem;
    line-height: 1rem;
    background: #B1191A;
    border-radius: 0.133333rem;
    color: #fff;
    margin-top: 0.333333rem;
    font-size: 0.426667rem;
  }

  /* 版本号 */
  .svn{
    width: 40%;
    height: 0.8rem;
    margin-left:30%;
    background: #fff;
    color: #000;
    text-align: center;
    line-height:0.8rem;  
    margin-top: 0.4rem;
  }
</style>
