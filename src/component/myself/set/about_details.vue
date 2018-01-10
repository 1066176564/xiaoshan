<template>
  <div id="about">
    <header>
      <div class="back" @click="back()"></div>
      <h1>企业简介</h1>
    </header>
    <div style="width:100%; height: 1.333333rem;"></div>

    <div class="text">
      <h2><span style="color:red; margin-right:0.133333rem;">/</span>{{arr[0].title}}</h2>
      <p>
          {{arr[0].text}}
      </p>
    </div>

    <div class="text1">
      <h2><span style="color:red; margin-right:0.133333rem;">/</span>{{arr[1].title}}</h2>
      <p>
          {{arr[1].text}}
      </p>

      <p>
          {{arr[1].text}}
      </p>

      <p>
          {{arr[1].text}}
      </p>
    </div>

    <div class="text2">
      <h2><span style="color:red; margin-right:0.133333rem;">/</span>{{arr[2].title}}</h2>
      <p>
          {{arr[2].text}}
      </p>

      <p>
          {{arr[2].text}}
      </p>

      <p>
          {{arr[2].text}}
      </p>
    </div>

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
    var url = "src/api/about_details.json"
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

  /* 文字介绍-1 */

	.text{
    width: 100%;
    border:0.013333rem solid #CCC;
    padding: 0.266667rem;
    color: #666;
    border-left: none;
    border-right: none;
  }

  .text h2{
    font-size: 0.426667rem;
    font-weight: bold;
    color: #000;
    /*margin-bottom: 0.2rem;*/
  }

  .text p{
    text-indent: 2em;
    font-size: 0.32rem;
    margin-top:0.466667rem; 
  }

  /* 文字介绍-2 */

  .text1{
    width: 100%;
    padding: 0.266667rem;
    color: #666;
    border-bottom:0.013333rem solid #CCC;
  }

  .text1 h2{
    font-size: 0.426667rem;
    font-weight: bold;
    color: #000;
    /*margin-bottom: 0.2rem;*/
  }

  .text1 p{
    text-indent: 2em;
    font-size: 0.32rem;
    margin-top:0.466667rem; 
  }

  /* 文字介绍-3 */

  .text2{
    width: 100%;
    padding: 0.266667rem;
    color: #666;
    border-bottom:0.013333rem solid #CCC;
  }

  .text2 h2{
    font-size: 0.426667rem;
    font-weight: bold;
    color: #000;
    /*margin-bottom: 0.2rem;*/
  }

  .text2 p{
    text-indent: 2em;
    font-size: 0.32rem;
    margin-top:0.466667rem; 
  }



  
</style>
