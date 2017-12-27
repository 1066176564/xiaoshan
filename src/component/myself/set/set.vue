<template>
  <div id="set">
   	<div class="head">
      <div class="img" @click="back()">
        
      </div>
      <span>设置</span>
    </div>
    <div class="list">
      <mu-list>
        <mu-list-item title="头像" style="padding-top:0.266667rem; padding-bottom:0.266667rem;" @click="user()">
          <mu-avatar :src="detail.img" slot="rightAvatar"/>
          <div slot="right" class="fream"></div>
        </mu-list-item>
         <mu-divider />
         
            <mu-list-item title="用户名">
              <span slot="right">{{detail.username}}</span>
            </mu-list-item>
         
        <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
          <mu-list @itemClick="closeBottomSheet" style="text-align:center;">
            <mu-list-item title="相机"/>
            <mu-list-item title="选择相册"/>
            <mu-list-item title="取消"/>
          </mu-list>
        </mu-bottom-sheet>

         <mu-divider />
        <mu-list-item title="微信账号">
          <span slot="right">-解绑</span>
          <div slot="right" class="fream"></div>
        </mu-list-item>
         <mu-divider />
        <router-link to="/editname">
        <mu-list-item title="昵称">
          <span slot="right">测试</span>
          <div slot="right" class="fream"></div>
        </mu-list-item>
        </router-link>
         <mu-divider />
        <mu-list-item title="性别">
          <span slot="right">男</span>
          <div slot="right" class="fream"></div>
        </mu-list-item>
         <mu-divider />
        <mu-list-item title="账户安全">

        </mu-list-item>
         <mu-divider />
        <mu-list-item title="注册地区">
          <span slot="right">{{detail.address}}</span>
          <div slot="right" class="fream"></div>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'set',
  data () {
    return {
      detail:[],
      bottomSheet: false
    }
  },
  created(){
    this.getlist()
  },
  methods:{
    getlist(){
      var url = "./src/api/myself-person.json"
      axios.get(url).then((res)=>{
        this.detail = res.data[0]
      })
    },
    back(){
      this.$router.go(-1)
    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    user(){
      this.bottomSheet = true
    }
  }
}
</script>

<style scoped="scoped">
	#set{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #f2f2f2;
    z-index: 9999;
  }
  #set .head{
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
  .list{
    width: 100%;
    background: #ffffff;
  }
  .list span{
    font-size: 0.32rem;
  }
  .list mu-list mu-list-item .fream{
    background: url(../../../img/myself/set/set.png) no-repeat;
    background-size: 10.0rem 5.333333rem;
    background-position: -5.28rem -2.453333rem;
    width: 0.213333rem;
    height: 0.426667rem;
    display: block;
    float: right;
  }
</style>
