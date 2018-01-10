<template>
	<div>
		<div class="app">
   			<ul>
          <router-link to="/classify" tag="li">
   				<li><img src="../../../img/classify/classify_list/classify_back_03.jpg"></li>
          </router-link>
   				<li>
   					<span>
   						<img src="../../../img/classify/classify_home/serch.jpg">
   						<input type="text" name="" placeholder="寻找你喜欢的商品" v-model="values">
   					</span>
   				</li>
   				<li @click="serch()">搜索</li>
   			</ul>
  	</div>
    <div style="height:1.306667rem"></div>
      <div class="mian">
          <div class="top1">
              <p>热门搜索</p>
          </div>
          <div class="top2">
              <ul>
                  <li v-for="item in newarr">{{item.search_terms}}</li>
              </ul>
          </div>
      </div>
      <div class="mian2">
          <ul>
            <li>历史搜索</li>
            <li @click="clear()"><img src="../../../img/classify/classify_home/laji.png"></li>
          </ul>
      </div>
      <div class="mian2List" v-for="(item,index) in queryHistoryList">
          <ul>
              <li>{{item}}</li>
              <li @click="delects(index)">删除</li>
          </ul>
      </div>
      <div class="down"></div>
  		<div style="height:1.306667rem"></div>	
  </div>
</template>

<script>
import {creatParams,BaseUrl} from '../../../api/BaseUrl.js';
export default {
  name: 'app',
  data () {
    return {
      newarr:"",
      values:"",
      str: '',
      queryHistoryList: []
    }
  },
  created(){
    //第二个参数是token  
      var data=creatParams('{"act":"hotlist"}',"");
    //请求数据
        this.$http.get(BaseUrl+"plat_search"+data).then(res=>{
        let arr=JSON.parse(Base64.decode(res.data.data));
        this.newarr=arr.list;
      })
      if (localStorage.getItem("key")){
        this.str = localStorage.getItem("key");
      }
  },
  methods:{
    //搜索
      serch(){
        //判断为空不做任何操作
        if(this.values==''){
          return;
        }else{
            if (!localStorage.getItem("key")) {// 本地无key字段
            let arr = [this.values];
            localStorage.setItem("key",JSON.stringify(arr));
          } else {
            let str = localStorage.getItem("key");
            let arr1 = JSON.parse(str);
            //历史记录去重
            if(arr1.indexOf(this.values)==-1){
              arr1.unshift(this.values);
            }
            localStorage.setItem("key",JSON.stringify(arr1))
          }
          this.values = '';
          this.str = localStorage.getItem("key");
        }
      },
      //全部删除
      clear(){
        localStorage.clear("key");
        if(localStorage.getItem("key")==null){
          this.str = localStorage.getItem("key");
        }
      },
      //单个删除
      delects(index){
        let data=localStorage.getItem("key");
        let res=JSON.parse(data);
        res.splice(index,1);
        localStorage.setItem("key",JSON.stringify(res));
        this.str = localStorage.getItem("key");
      }
  },
  //实时更新
  watch: {
    str(value) {
      this.queryHistoryList = JSON.parse(value);
    }
  }
}
</script>

<style scoped="scoped">
.app{
	width:100%;
	height:1.226667rem;
	border-bottom: 0.013333rem solid #cccccc;
	position:fixed;
	top:0;
	background: #ffffff;
}
.app ul{
	width:100%;
	height:1.226667rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.app ul li input{
	width:7.253333rem;
	height:0.72rem;
	border:0.013333rem solid #f2f2f2;
	position: relative;
	border-radius:0.666667rem;
	background: #f2f2f2;
	padding-left:0.866667rem;
	color:#9f9f9f;
}
.app ul li span img{
	width: 0.333333rem;
	height:0.333333rem;
	margin-top:0.18rem;
	position:absolute;
	left:1.5rem;
	z-index: 999;
}
.app ul li:nth-child(1) img{
  width: 0.346666rem;
  height: 0.586666rem;
  margin-top:0.16rem;
}
.app ul li:nth-child(3){
  font-size:0.373333rem;
  font-family: 微软雅黑;
  margin-top:0.066667rem;
}
.down{
  width:100%;
  height:1.366667rem;
  background:#ffffff;
  position:fixed;
  bottom:0;
  z-index: 9999;
}
.mian{
  width:100%;
  height:3.0rem;
  /*background: red;*/
}
.top1{
  width:100%;
  height:1.066667rem;
  /*background: blue;*/
  line-height:1.066667rem;
  padding-left:0.366667rem;
  font-size:0.373333rem;
}
.top2{
  width:98%;
  height:3.0rem;
  margin:0.0rem 0.133333rem;
}
.top2 ul{
  width:100%;
  height:2.0rem;
  display:flex;
  flex-wrap:wrap;
  justify-content:left;
}
.top2 ul li{
  height: 1.066667rem;
  border:0.013333rem solid #cccccc;
  padding:0.24rem;
  margin:0.133333rem;
}
.mian2{
  width:100%;
  height:1.0rem;
  margin-top:0.9rem;
  font-size: 0.373333rem;
  border-bottom: 0.013333rem solid #cccccc;
  border-top: 0.013333rem solid #cccccc;
}
.mian2 ul{
  width:100%;
  height:1.0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mian2 ul li:nth-child(1){
  margin-left:0.366667rem;
}
.mian2 ul li:nth-child(2){
  margin-right:0.266667rem;
}
.mian2List{
  width:100%;
  border-bottom: 0.013333rem solid #cccccc;
  line-height:0.933333rem;
  padding-left:0.4rem; 
}
.mian2List ul{
  width:100%;
  display: flex;
  justify-content: space-between;
}
.mian2List ul li:nth-child(2){
  margin-right: 0.266667rem;
}
</style>
