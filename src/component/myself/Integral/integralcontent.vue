<template>
  <div id="integral">
    <div class="divs">
      
    </div>
   	<div class="content">
      <p style="padding-top:0.266667rem; font-size:0.48rem;">
      积分记录
    </p>
      <div class="mess">
        <p style="font-size:0.4rem; margin-top:0.2rem;">今天</p>
        <div v-for="arr in item[0].today">
          <p>{{arr.detail}}</p>
          <p style="text-align:right; width:30%;float:right;color:#f45971; padding-right:0.2rem;">{{arr.integral}}</p>
          <p style="color:grey;">{{arr.price}}</p>
        </div>

        <p style="font-size:0.4rem; margin-top:0.2rem;">昨天</p>
        <div v-for="arr in item[1].yesterday">
          <p>{{arr.detail}}</p>
          <p style="text-align:right; width:30%;float:right;color:#f45971; padding-right:0.2rem;">{{arr.integral}}</p>
          <p style="color:grey;">{{arr.price}}</p>
        </div>

        <p style="font-size:0.4rem; margin-top:0.2rem;">2017-11-11</p>
        <div v-for="arr in item[2].out">
          <p>{{arr.detail}}</p>
          <p style="text-align:right; width:30%;float:right; color:#f45971; padding-right:0.2rem;">{{arr.integral}}</p>
          <p style="color:grey;">{{arr.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'integral',
  data () {
    return {
      item:[]
    }
  },
  created(){
    this.getlist()
  },
  methods:{
    getlist(){
      var url = "./src/api/integral.json"
      axios.get(url).then((res)=>{
        this.item = res.data
        console.log(this.item)
      })
    }
  }
}
</script>

<style scoped="scoped">
	#integral{
		width: 100%;
		background: #f2f2f2;
	}
  .divs{
    width: 100%;
    height: 6.4rem;
  }
  .content{
    width: 100%;
    background: #ffffff;
    border-radius: 0.266667rem;
    padding-left: 0.266667rem;
  }
  .mess p{
    width: 60%;
    height: 0.8rem;
  }
</style>
