<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">我的订单</span>
   	<div class="ss"></div>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <nav>
     <ul>
       <li v-for="(data,i) in arr" @click="dj(i)" :class="{active:change == i}">{{data}}</li>
     </ul>
   </nav>

   <main>
  	<div class="div">
      <!-- 店铺 -->
      <div class="information">
        <div class="left">
          <span class="shopping"></span>
          <span class="text">天俊旗舰店</span>
          <span class="to"></span>
        </div>
        <div class="right">等待付款</div>
      </div>

      <div class="shop">
        <dl>
          <dt>
            <img src="../../../img/myself/address/my_shop.jpg">
          </dt>
          <dd>
            <p>【双旦礼遇价】天王表正品男表防水自动机械表、钢带男士手表...
             <span class="number">x1</span> 
            </p>
            <p class="type">
              颜色:<span>黑色</span>
              尺码:<span>男士</span>
            </p>
          </dd>
        </dl>
      </div>

      <div class="money">
        <p>共<span>1</span>件商品&nbsp&nbsp需支付:<span class="price">￥1099.00</span>(含运费:<span>0.00</span>)</p>
      </div>

      <div class="operation">
        <button>去支付</button>
        <button>取消订单</button>
        <button>联系卖家</button>
      </div>

    </div>
   </main>

   <footer>
   	
   </footer>
  	
  	<!-- <div style="width:100%; height:1.44rem;"></div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      arr:["全部","待付款","待发货","待收货","待评价"],
      change:0
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    dj(i){
      this.change=i;
    }
  }
}
</script>

<style scoped="scoped">
	
	#app{
		width: 100%;
    height: 100vh;
    background: #f2f2f2;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		margin-bottom: 0;
	}

  /* 头部固定 */
	header{
		width: 100%;
		height: 1.253333rem;
		border-bottom:1px solid #f2f2f2; 
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background:#fff; 
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

	.ss{
		width: 0.48rem;
		height: 0.453333rem;
		background:url(../../../img/myself/address/order.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -0.44rem -0.533333rem;
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

  /* 选项卡 */
  nav{
    width: 100%;
    height: 1.2rem;
    background: #fff;
    margin-bottom: 0.266667rem;
  }

  nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  nav ul li{
    line-height: 1.2rem;
    font-size: 0.426667rem;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .active{
    color: #f45971;
    background: url(../../../img/myself/address/underline.png) no-repeat bottom center;
    background-size: 0.8rem 0.04rem;
  }

	/* 中间的部分 */
  main .div{
    width: 100%;
    /*height: 5.653333rem;*/
    background: #fff;
  }

  main .div .information{
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #f2f2f2;
    line-height: 1.2rem;
    padding:0 0.266667rem;
  }

  main .div .information>.left{
    float: left;
  }

  main .div .information>.left .shopping{
    width: 0.453333rem;
    height: 0.426667rem;
    background:url(../../../img/myself/address/order.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -1.106667rem -0.533333rem;
    display: block;
    float: left;
    margin-top:0.4rem; 
  }

  main .div .information>.left .text{
    font-size: 0.373333rem;
    float: left;
    margin-left: 0.106667rem;
  }

  main .div .information>.left .to{
     width: 0.16rem;
    height: 0.293333rem;
    background:url(../../../img/myself/address/order.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -1.786667rem -0.533333rem;
    display: block;
    float: left;
    margin-top:0.453333rem;
    margin-left: 0.106667rem;
  }

  main .div .information>.right{
    float: right;
    color: #f56e83;
    font-size: 0.346667rem;
  }

  /*商品样式*/
  main .div .shop{
    width: 100%;
    height: 2.666667rem;
    background: #f8f8f8;
    padding: 0.293333rem 0.266667rem;
  }

  main .div .shop dl{
    width: 100%;
    height: 100%;
  }

  main .div .shop dl dt{
    width: 2.093333rem;
    height: 100%;
    float:left; 
  }

  main .div .shop dl dt img{
    width: 100%;
    height: 100%;
  }

  main .div .shop dl dd{
    width: 7.373333rem;
    height: 100%;
    float:left;
  }

  main .div .shop dl dd p{
    font-size: 0.32rem;
    line-height: 0.453333rem;
  }

  main .div .shop dl dd p .number{
    float: right;
    color: #b1b1b1;
  }

  main .div .shop dl dd .type{
    margin-top:0.066667rem;
    color:#b1b1b1; 
    font-size: 0.293333rem;
  }

  main .div .shop dl dd .type span{
    margin-left: 0.186667rem;
  }

  main .div .shop dl dd .type span:nth-child(1){
    margin-right: 0.4rem;
  }

  /* 价格 */
  main .div .money{
    width: 100%;
    height: 0.8rem;
    border-bottom:1px solid #f2f2f2; 
    padding: 0 0.266667rem;
  }

  main .div .money p{
    float: right;
    line-height: 0.8rem;
    color: #797979;
    letter-spacing:0.015rem;
    font-size: 0.266667rem;
  }

  main .div .money p .price{
    color: #333;
  }

  /* 操作 */
  main .div .operation{
    width: 100%;
    height: 1.2rem;
    padding: 0 0.266667rem;
  }

  main .div .operation button{
    padding: 0.08rem 0.146667rem;
    background: none;
    border:1px solid #dedede;
    margin-top:0.266667rem;
    float: right;
    margin-right: 0.266667rem; 
    border-radius: 0.053333rem;
  }

  main .div .operation button:nth-child(1){
    border:1px solid #f45971;
    color: #f45971;
  }

  
</style>
