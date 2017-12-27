<template>
  <div id="set">
   	<div class="head">
      <h2>设置</h2>
    </div>
    <div>
      <mu-list>
        <mu-list-item :title="detail.username">
          <mu-avatar :src="detail.img" slot="rightAvatar"/>
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
      detail:[]
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
    }
  }
}
</script>

<style scoped="scoped">
	#set{
    width: 100%;
    background: #f2f2f2;
  }
  #set .head{
    width: 100%;
    height: 1.173333rem;
    background: #ffffff;
    border-bottom: 1px solid #f2f2f2;
  }
  .head h2{
    text-align: center;
    font-size: 0.453333rem;
    line-height: 1.173333rem; 
  }
</style>
