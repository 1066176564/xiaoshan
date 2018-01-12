<template>
  <div id="myself-produce">
   	<ul v-if="result!=null">
      <li>
        <img src="../../../img/myself/5a2fc41cN70b5fb72.jpg">
        <p>消费总额:<br/>{{result.block_count.total_consume}}万元</p>
      </li>
      <li>
        <img src="../../../img/myself/5a2fc41cN70b5fb72.jpg">
        <p>用户人数:<br/>{{result.block_count.user_count}}人</p>
      </li>
      <li>
        <img src="../../../img/myself/5a2fc41cN70b5fb72.jpg">
        <p>店铺数量:<br/>{{result.block_count.business_count}}个</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {BaseUrl,creatParams}from "../../../api/BaseUrl.js"

export default {
  name: 'myself-produce',
  data () {
    return {
      result:null
    }
  },
  created(){
    var data=creatParams('{"act":"stats"}',"");
   this.$http.post(BaseUrl+"plat_stats"+data).then(res=>{
    this.result = JSON.parse(Base64.decode(res.data.data));
    console.log(this.result)
    })
  }
}
</script>

<style scoped="scoped">
	#myself-produce{
    border-top: 1px solid #f2f2f2;
		width: 100%;
    height:4.9rem;
		background: #ffffff;
	}
  ul{
    width: 100%;
    height:4.6rem;
    display: flex;
    text-align: center;
  }
  ul li{
    flex: 1;
    justify-content: space-between;
    border:none;
    font-size: 0.32rem;
    font-weight: bolder;
    color: red;
  }
  ul li img{
    width:3.333333rem;
  }
</style>
