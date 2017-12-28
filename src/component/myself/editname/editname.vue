<template>
  <div id="editname">
      <div class="head">
          <div class="img" @click="back()">
            
          </div>
          <span>修改昵称</span>
          <button>
            确定
          </button>
      </div>
      <input type="text" name="" v-model="detail.name">
  </div>
</template>

<script>
 import axios from 'axios'

export default {
  name: 'editname',
  data () {
    return {
      detail:[]
    }
  },
  created(){
    this.getdata()
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    getdata(){
      var url = "./src/api/myself-person.json"
      axios.get(url).then((res)=>{
        this.detail = res.data[0]
      })
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
    position: fixed;
    left: 0;
  }
  .head span{
    display: block;
    text-align: center;
    font-size: 0.453333rem;
    line-height: 1.173333rem; 
  }
  .head button{
    position: fixed;
    right: 0;
    top: 0;
    margin-right: 0.266667rem;
    margin-top: 0.32rem;
    width: 1.066667rem;
    height: 0.6rem;
    border-radius: 0.2rem;
    background: #ffffff;
    border:none;
    line-height: 0.6rem;
    font-size: 0.32rem;
  }
  input{
    width: 100%;
    height: 1.2rem;
    background: #ffffff;
    border:none;
    text-indent: 2em;
  }
</style>
