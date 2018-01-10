<template>
  <div id="about">
    <header>
      <div class="back" @click="back()"></div>
      <h1>帮助中心</h1>
    </header>
    <div style="width:100%; height: 1.333333rem;"></div>

    <!-- 中间部分 -->
    <main>
      <!-- 第一个模块 -->
      <div class="top">
        <h3>常用自助服务</h3>
        <div class="dl">
          <dl v-for="data in help1">
            <dt>
              <img v-lazy="data.img">
            </dt>
            <dd>
              <p>{{data.title}}</p>
              <p>{{data.text}}</p>
            </dd>
          </dl>
        </div>
      </div>

      <!-- 第二个模块 -->
      <div class="center">
        <h3>类目列表</h3>
        <div class="box" v-for="data in help2">
          <p>{{data.title}}</p>
          <div class="list">
            <span>{{data.bt1}}</span>
            <span>{{data.bt2}}</span>
            <span>{{data.bt3}}</span>
            <span>{{data.bt4}}</span>
            <span>{{data.bt5}}</span>
            <span>{{data.bt6}}</span>
          </div>
        </div>
      </div>

      <!-- 第三个模块 -->
      <div class="bottom">
        <h3>联系我们</h3>
        <div class="box">
          <div class="div" v-for="data in help3">
            <h2>{{data.title}}</h2>
            <p>{{data.text}}</p>
            <button>{{data.btn}}</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios"
import {creatParams,BaseUrl} from '../../../api/BaseUrl.js'

export default {
  name: 'about',
  data () {
    return {
      // 为第一个模块设置一个空数组
      help1:[],
      // 为第二个模块设置一个空数组
      help2:[],
      // 为第三个模块设置一个空数组
      help3:[]
    }
  },

  // 点击返回上一页
  methods:{
    back(){
      this.$router.go(-1)
    }
  },

  created(){
    // 第一个模块的json数据
    var url1 = "src/api/about_help1.json"
    axios.get(url1).then((res)=>{
      console.log(res.data)
      this.help1 = res.data
    })

    // 第二个模块的json数据
    var url2 = "src/api/about_help2.json"
    axios.get(url2).then((res)=>{
      console.log(res.data)
      this.help2 = res.data
    })

    // 第三个模块的json数据
    var url3 = "src/api/about_help3.json"
    axios.get(url3).then((res)=>{
      console.log(res.data)
      this.help3 = res.data
    })
  }

  // created(){
  //   var data=creatParams('{"act":"getlist"}',"");
  //   this.$http.get(BaseUrl+"plat_help"+data).then(res=>{
  //   //this.result=JSON.parse(Base64.decode(res.data.data));
  //   // console.log(res)
  //   let arr=JSON.parse(Base64.decode(res.data.data))
  //   this.newarr=arr.list

  //   console.log(res)
  //   })
  //   // if(localStorage.getItem("key"))
  // }


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
    padding:0 0.266667rem;
  }

  /*第一块内容*/
  main>.top{
    border-bottom:0.013333rem #ccc dashed; 
    padding-bottom: 0.233333rem;
  }

  main>.top h3{
    font-size: 0.426667rem;
    font-weight: bold;
    margin-top: 0.133333rem;
  }

  main>.top .dl{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  main>.top .dl dl{
    width: 48%;
    height: 1.666667rem;
    /*border:1px solid #f2f2f2;*/
    display: flex;
    justify-content: space-around;
    margin-top: 0.266667rem;
  }

  main>.top .dl dl dt{
    width: 35%;
    height: 100%;
    border-radius: 50%;
  } 

  main>.top .dl dl dt img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  main>.top .dl dl dd{
    width: 60%;
    height: 100%;
  }

  main>.top .dl dl dd p:nth-child(1){
    font-size: 0.373333rem;
    color: #7A667A;
  }

  main>.top .dl dl dd p:nth-child(2){
    width: 100%;
    font-size: 0.213333rem;
    color: #B4B7AE;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }

  /* 第二个模块 */
  main>.center{
    border-bottom:0.013333rem #ccc dashed; 
    padding-bottom: 0.233333rem;
  }

  main>.center h3{
    font-size: 0.426667rem;
    font-weight: bold;
    margin-top:0.133333rem;
  }

  main>.center .box{
    width: 100%;
    height: 5.0rem;
    border:0.013333rem #EAEAEA solid;
    background: #f1f1f1;
    padding:0.6rem; 
    margin-top: 0.266667rem;
  }

  main>.center .box p{
    font-size: 0.373333rem;
  }

  main>.center .box .list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  main>.center .box .list span{
    width: 50%;
    font-size: 0.273333rem;
    color: #4DB7EB;
    margin-top: 0.266667rem;
  }

  /* 第三个模块 */
  main>.bottom{
    border-bottom:0.013333rem #ccc dashed; 
    padding-bottom: 0.233333rem;
  }

  main>.bottom h3{
    font-size: 0.426667rem;
    font-weight: bold;
    margin-top:0.133333rem;
  }

  main>.bottom .box{
    width: 100%;
    height: 2.666667rem;
    border:0.013333rem solid #EAEAEA;
    background: #f1f1f1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:0 0.266667rem; 
  }  

  main>.bottom .box .div{
    width: 33%;
    height: 100%;
  }

  main>.bottom .box .div h2{
    font-size: 0.373333rem;
    font-weight: bold;
    margin-top: 0.466667rem;
  }

  main>.bottom .box .div p{
    color: #999;
    margin-bottom: 0.133333rem;
  }

  main>.bottom .box .div button{
    width: 70%;
    height: 0.8rem;
    background:#6ABB77;
    color: #fff;
    border:none; 
  }
</style>
