<template>
  <div id="about">
    <header>
      <div class="back" @click="back()"></div>
      <h1>企业文化</h1>
    </header>
    <div style="width:100%; height: 1.333333rem;"></div>

    <!-- 中间内容 -->
    <main>
      <div class="div_text">
        <p>{{arr[0].ename}}</p>
        <p>{{arr[0].cname}}</p>
        <p>{{arr[0].text}}</p>
      </div>
      <div class="div_img">
        <img v-lazy="arr[4].img">
      </div>

      <div class="div_img">
        <img v-lazy="arr[5].img">
      </div>
      <div class="div_text">
        <p>{{arr[1].ename}}</p>
        <p>{{arr[1].cname}}</p>
        <p>{{arr[1].text}}</p>
      </div>

      <div class="div_text">
        <p>{{arr[2].ename}}</p>
        <p>{{arr[2].cname}}</p>
        <p>{{arr[2].text}}</p>
      </div>
      <div class="div_img">
        <img v-lazy="arr[6].img">
      </div>

      <div class="div_img">
        <img v-lazy="arr[7].img">
      </div>
      <div class="div_text">
        <p></p>
        <p>{{arr[3].cname}}</p>
        <p>{{arr[3].text}}</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'about',
  data () {
    return {
      arr:[]
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    }
  },

  created(){
    var url = "src/api/about_culture.json"
    axios.get(url).then((res)=>{
      console.log(res.data)
      this.arr = res.data
    })
  }
}
</script>

<style scoped="scoped">
  #about{
    width: 100%;
    /*background: #f2f2f2;*/
    height: 100vh;
  }

  header{
    background: #fff;
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 0.013333rem solid #ccc;
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

  /* 中间内容 */
  main{
    padding: 0 0.266667rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  main>div{
    width: 47%;
    height: 4.8rem;
    border:0.013333rem solid #B1191A;
    margin-top: 0.266667rem;
  }

  /* 所有带有文字的div文字水平垂直居中,以及文字的样式 */
  main>div p{
    text-align: center;
    line-height:0.566667rem;
    color: #fff;
    width: 60%;
    margin-left:20%; 
  }

  main>div p:nth-child(1){
    margin-top: 1.266667rem;

  }

  main>div p:nth-child(2){
    margin-top: 0.166667rem;
    font-size: 0.613333rem;
    margin-bottom: 0.266667rem;
  }

  /* 带有文字的div */
  main .div_text{
    background: #B1191A;
  }

  /* 带有图片的div */
  main .div_img img{
    width: 100%;
    height: 100%;
  }

  
</style>
