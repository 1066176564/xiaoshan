<template>
	<div>
		<div class="app">
   			<ul>
          <router-link to="/classify" tag="li">
   				<li><img src="../../../img/classify/classify_list/classify_back_03.jpg"></li>
          </router-link>
   				<li>
   					<span>
   						<img src="../../../img/classify/classify_home/serch.jpg">
   						<input type="text" name="" placeholder="寻找你喜欢的商品">
   					</span>
   				</li>
   				<li>搜索</li>
   			</ul>
  	</div>
    <div style="height:1.306667rem"></div>
      <div class="mian">
          <div class="top1">
              <p>热门搜索</p>
          </div>
          <div class="top2">
              <ul>
                  <li>平生充电宝</li>
                  <li>跑步耳机</li>
                  <li>魅族</li>
                  <li>么么哒项链</li>
                  <li>华为荣耀8</li>
                  <li>海洋之心</li>
                  <li>海鸥</li>
                  <li>瓜子</li>
                  <li>茶</li>
                  <li>安踏</li>
              </ul>
          </div>
      </div>
      <div class="mian2">
          <ul>
            <li>历史搜索</li>
            <li><img src="../../../img/classify/classify_home/laji.png"></li>
          </ul>
      </div>
      <div class="mian2List">
          <p>电脑</p>
      </div>
      <div class="down"></div>
  		<div style="height:1.306667rem"></div>	
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	arr:["推荐分类","家电厨具","手机数码","美妆个护","食品饮料","房车家装","服装鞋盒","生活服务","电脑办公","珠宝箱包","母婴玩具","礼品珍藏","国际品牌"],
    	change:0
    }
  },
  methods:{
  	active(id){
  		this.change=id
  	}
  }
}
</script>

<style scoped="scoped">
.app{
	width:100%;
	height:1.226667rem;
	border-bottom: 0.013333rem solid #ccccccq;
	position:fixed;
	top:0;
	background: #ffffff;
}
.app ul{
	width:100%;
	height:1.226667rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.app ul li input{
	width:7.253333rem;
	height:0.72rem;
	border:0.013333rem solid #f2f2f2;
	position: relative;
	border-radius:0.666667rem;
	background: #f2f2f2;
	padding-left:0.866667rem;
	color:#9f9f9f;
}
.app ul li span img{
	width: 0.333333rem;
	height:0.333333rem;
	margin-top:0.18rem;
	position:absolute;
	left:1.5rem;
	z-index: 999;
}
.app ul li:nth-child(1) img{
  width: 0.346666rem;
  height: 0.586666rem;
  margin-top:0.16rem;
}
.app ul li:nth-child(3){
  font-size:0.373333rem;
  font-family: 微软雅黑;
  margin-top:0.066667rem;
}
.down{
  width:100%;
  height:1.366667rem;
  background:#ffffff;
  position:fixed;
  bottom:0;
  z-index: 9999;
}
.mian{
  width:100%;
  height:3.0rem;
  /*background: red;*/
}
.top1{
  width:100%;
  height:1.066667rem;
  /*background: blue;*/
  line-height:1.066667rem;
  padding-left:0.366667rem;
  font-size:0.373333rem;
}
.top2{
  width:98%;
  height:3.0rem;
  /*background: blue;*/
  margin:0.0rem 0.133333rem;
}
.top2 ul{
  width:100%;
  height:2.0rem;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
.top2 ul li{
  border:0.013333rem solid #cccccc;
  padding:0.24rem;
  margin-top: 0.3rem;
}
.mian2{
  width:100%;
  height:1.0rem;
  margin-top:0.9rem;
  font-size: 0.373333rem;
  border-bottom: 0.013333rem solid #cccccc;
  border-top: 0.013333rem solid #cccccc;
}
.mian2 ul{
  width:100%;
  height:1.0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mian2 ul li:nth-child(1){
  margin-left:0.366667rem;
}
.mian2 ul li:nth-child(2){
  margin-right:0.266667rem;
}
.mian2List{
  width:100%;
  height:0.933333rem;
  border-bottom: 0.013333rem solid #cccccc;
  line-height:0.933333rem;
  padding-left:0.4rem; 
}
</style>
