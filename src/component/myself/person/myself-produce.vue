<template>
  <div id="myself-produce">
   	<ul v-if="result!=null">
      <li>
        <div class="img1">
          
        </div>
        <p>消费总额:<br/>{{result.block_count.total_consume}}万元</p>
      </li>
      <li>
        <div class="img2">
          
        </div>
        <p>用户人数:<br/>{{result.block_count.user_count}}人</p>
      </li>
      <li>
        <div class="img3">
          
        </div>
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
    height:4rem;
		background: #ffffff;
	}
  ul{
    width: 100%;
    height:4rem;
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
  ul li .img1{
    width: 1.466666rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 0.746667rem;
    background: url(../../../img/myself/content.png) no-repeat;
    background-size: 14.4rem 1.626667rem;
    background-position: -1.666667rem -0.08rem;
  }

  ul li .img2{
    width:  1.466666rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 0.746667rem;
    background: url(../../../img/myself/content.png) no-repeat;
    background-size: 14.4rem 1.626667rem;
    background-position: -6.453333rem -0.08rem;
  }

  ul li .img3{
    width:  1.466666rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 0.746667rem;
    background: url(../../../img/myself/content.png) no-repeat;
    background-size: 14.4rem 1.626667rem;
    background-position: -11.28rem -0.08rem;
  }
</style>