<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">我的收藏</span>
   	<div class="ss">编辑</div>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <main>
  	<div class="div">
      <div class="shop">
        <dl>
          <dt>
            <img src="../../../img/myself/address/collection.jpg">
          </dt>
          <dd>
            <p>阿莱克手表新品双湿游泳表深度防水设计夜光运动跑步表新款户外运动2017新款2... 
            </p>

            <p>
              <button>找相似</button>
              <button>减低通知</button>
            </p>

            <p>
              <span class="money">￥499.00</span>
              <span class="shopping"></span>
            </p>
          </dd>
        </dl>
      </div>
    </div>

    <div class="div">
      <div class="shop">
        <dl>
          <dt>
            <img src="../../../img/myself/address/collection.jpg">
          </dt>
          <dd>
            <p>阿莱克手表新品双湿游泳表深度防水设计夜光运动跑步表新款户外运动2017新款2... 
            </p>

            <p>
              <button>找相似</button>
              <button>减低通知</button>
            </p>

            <p>
              <span class="money">￥499.00</span>
              <span class="shopping"></span>
            </p>
          </dd>
        </dl>
      </div>

      <!-- 遮盖层 -->
      <div class="cover"></div>
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

    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped="scoped">
	
	#app{
		width: 100%;
    height: 100vh;
    background: #fff;
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
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
    font-size: 0.346667rem;
    margin-right: 0.266667rem;
    color: #999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

  /* 中间样式 */
  main .div{
    width: 9.493333rem;
    height: 2.8rem;
    background: #fff;
    margin-top: 0.266667rem;
    margin-left: 0.266667rem;
    position: relative;
  }

  main .div .cover{
    width: 9.493333rem;
    height: 2.8rem;
    background:rgba(0,0,0,0.1);
    position: absolute;
    top: 0;
    left: 0;
  }

  /*商品样式*/
  main .div .shop{
    width: 100%;
    height: 100%;
    background: #fff;
    /*padding: 0.293333rem 0.266667rem 0.226667rem 0.266667rem;*/
    box-shadow:0px 1px 15px #f1f1f1; 
  }

  main .div .shop dl{
    width: 100%;
    height: 100%;
    padding: 0.293333rem 0.266667rem 0.226667rem 0.266667rem;
  }

  main .div .shop dl dt{
    width: 2.466667rem;
    height: 100%;
    float:left; 
  }

  main .div .shop dl dt img{
    width: 100%;
    height: 100%;
  }

  main .div .shop dl dd{
    width: 6.423333rem;
    height: 2.266667rem;
    float:left;
    margin-left: 0.066667rem;
  }

  main .div .shop dl dd p:nth-child(1){
    font-size: 0.266667rem;
    line-height: 0.38rem;
    letter-spacing: 0.03rem;
  }
  /*按钮*/
  main .div .shop dl dd p:nth-child(2) button{
    padding: 0.053333rem 0.106667rem;
    border:1px solid #f2f2f2;
    color: #999;
    background: none;
    border-radius: 0.053333rem;
    margin-top:0.133333rem; 
    font-size: 0.213333rem;
  }

  main .div .shop dl dd p:nth-child(3){
    margin-top:0.38rem; 
  }

  main .div .shop dl dd p:nth-child(3) span:nth-child(1){
    font-size: 0.253333rem;
    color:#f78395;
  }

  main .div .shop dl dd p:nth-child(3) span:nth-child(2){
    float: right;
    width: 0.346667rem;
    height: 0.333333rem;
    background:url(../../../img/myself/address/collection.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -0.56rem -0.533333rem;
  }
  
</style>
