<template>
  <div id="order3">
  	<div class="div">
      <!-- 店铺 -->
      <div class="information">
        <div class="left">
          <span class="shopping"></span>
          <span class="text">天俊旗舰店</span>
          <span class="to"></span>
        </div>
        <div class="right">等待收货</div>
      </div>

      <div class="shop">
        <dl>
          <dt>
            <img src="../../../../img/myself/address/my_shop.jpg">
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

  </div>
</template>

<script>
export default {
  name: 'order3',
  data () {
    return {

    }
  },

  methods:{

  }
}
</script>

<style scoped="scoped">


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
    background:url(../../../../img/myself/address/order.png);
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
    background:url(../../../../img/myself/address/order.png);
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
