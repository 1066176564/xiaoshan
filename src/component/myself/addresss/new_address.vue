<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">新建地址</span>
   	<div class="information"></div>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <main>
  	<div class="personal">
      <div class="top">
        <div class="left">
          <p>收货人：<input type="text" name=""></p>
          <p>手机号：<input type="text" name=""></p>
        </div>
        <dl class="right">
          <dt></dt>
          <dd>选联系人</dd>
        </dl>
      </div>
      <div class="bottom">
        <p>
          所在地址：<!-- <input type="text" name=""> --> 
          <span class="szdz"></span>
        </p>
      </div>
    </div>

    <div class="xx_address">
      <p>详细地址：<input type="text" name="" placeholder="街道、楼牌号等">
        <span class="mai"></span>
      </p>
      <p>标签：
        <button class="btn1">家</button>
        <button class="btn2">公司</button>
        <button class="btn3">学校</button>
        <button class="btn4">+</button>
      </p>
    </div>

    <div class="details">
      <p>邮箱：<input type="text" name=""></p>
      <p>备注：<input type="text" name=""></p>
      <textarea class="text_details" placeholder="请填写详情"></textarea>
    </div>
   </main>

   <footer>
   	<button class="yes" @click="yes()">确认</button>
   </footer>
  	
  	<!-- <div style="width:100%; height:1.44rem;"></div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    yes(){
      this.$router.push({path:"/address"})
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

	.information{
		width: 0.506667rem;
		height: 0.493333rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -1.133333rem -0.386667rem;
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		/*margin-left: 40%;*/
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

	/* 中间的部分 */
  /* 用户、密码 */
  .personal{
    width: 100%;
    padding: 0rem 0.266667rem;
    height: 3.533333rem;
    background: #fff;
    margin-bottom: 0.266667rem;
  }

  .personal>.top{
    width: 100%;
    height: 2.373333rem;
    display: flex;
    justify-content: center;
  }

  .personal>.top>.left{
    width: 7.4rem;
    height: 100%;
  }

  .personal>.top>.left p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
  }

  .personal>.top>.left p input{
    width: 5.386667rem;
    height: 100%;
    border:none;
  }

  .personal>.top>.right{
    width: 2.066667rem;
    height: 100%;
    border:1px solid #f2f2f2;
    border-right: none;
    border-top: none;
  }

  .personal>.top>.right dt{
    width: 0.773333rem;
    height: 0.8rem;
    background:url(../../../img/myself/address/address.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -0.293333rem -0.4rem;
    margin-left: 0.65rem;
    margin-top: 0.52rem;
  }

  .personal>.top>.right dd{
    width: 100%;
    text-align: center;
    font-size: 0.266667rem;
  }

  .personal>.bottom p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
    line-height:1.186667rem;
    position: relative; 
  }

  /*.personal>.bottom>p input{
    width: 7.043367rem;
    height: 100%;
    border:none;
  }*/

  .personal>.bottom>p .szdz{
    width: 0.173333rem;
    height: 0.32rem;
    background:url(../../../img/myself/address/address.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -2.293333rem -0.4rem;
    position: absolute;
    top: 0.44rem;
    left: 9.333333rem;
    z-index: 99999999999999999;
  }

  /*详细地址样式*/
  .xx_address{
    width: 100%;
    height: 3.133333rem;
    background: #fff;
    padding: 0 0.266667rem;
    margin-bottom: 0.266667rem;
  }

  .xx_address>p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
    line-height:1.186667rem;
    position: relative;
  }

  .xx_address>p input{
    width: 7.043367rem;
    height: 84%;
    border:none;
    font-size: 0.266667rem;
    color: #bfbfbf;
  }

  .xx_address>p .mai{
    width: 0.32rem;
    height: 0.453333rem;
    background:url(../../../img/myself/address/address.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -1.52rem -0.4rem;
    position: absolute;
    top: 0.4rem;
    left: 9.12rem;
  }
  /*标签*/

  .xx_address>p:nth-child(2){
    border:none;
  }

  .xx_address button{
    width: 0.853333rem;
    height: 0.426667rem;
    border:1px solid #dedede;
    background: none;
    border-radius: 0.053333rem;
    line-height: 0.426667rem;
    font-size: 0.266667rem;
    color: #999;
  }

  .xx_address .btn4{
    display: block;
    margin-left: 1.563367rem;
  }

  /* 详情 */
  .details{
    width: 100%;
    height: 9.066667rem;
    padding: 0 0.266667rem;
    background: #fff;
  }

  .details p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
  }

  .details p input{
    width: 5.386667rem;
    height: 100%;
    border:none;
  }

  .details .text_details{
    width: 100%;
    height: 2.666667rem;
    border:none;
    background: #f2f2f2;
    color: #999;
    font-size: 0.293333rem;
    padding: 0.266667rem;
    resize: none;
    border-radius: 0.093333rem;
  }

	/*新建地址*/

  footer{
    width: 100%;
    height: 1.426667rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }

	.yes{
		width: calc(100% - 0.533333rem);
		height: 1.173333rem;
		background: #f45971;
		color: #fff;
		font-size: 0.4rem;
		border:none;
		border-radius: 0.106667rem;
		position: fixed;
		margin-bottom: 0.266667rem;
		margin-left: 0.266667rem;
	}

  
</style>
