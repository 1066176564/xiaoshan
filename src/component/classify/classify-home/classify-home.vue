<template>
	<div>
		<div class="app">
   			<ul>
   				<li><img src="../../../img/classify/classify_home/code.jpg"></li>
   				<li>
   					<span>
   						<img src="../../../img/classify/classify_home/serch.jpg">
   						<input type="text" name="" placeholder="寻找你喜欢的商品">
   					</span>
   				</li>
   				<li></li>
   			</ul>
  		</div>
  		<div style="height:1.226667rem"></div>
  		<div class="bg">
  			<div class="left-div">
  				<ul>
  					<li v-for="(data,i) in arr" @click="active(i)" :class="{actives:change == i}">
  							{{data}}
  					</li>
  				</ul>
  			</div>
  			<div class="right-div">
  				<div class="right-list">
  					<h2>零食</h2>
  						<ul>
  							<router-link to="/list" tag="li">
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							</router-link>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							
  						</ul>
  				</div>


  				<div class="right-list">
  					<h2>零食</h2>
  						<ul>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  						</ul>
  				</div>
  				<div class="right-list">
  					<h2>零食</h2>
  						<ul>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  						</ul>
  				</div>
  				<div class="right-list">
  					<h2>零食</h2>
  						<ul>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>

  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  						</ul>
  				</div>

  				<div class="right-list">
  					<h2>零食</h2>
  						<ul>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>

  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  							<li>
  								<img src="../../../img/classify/classify_home/tu.jpg">
  								<p>坚果炒货</p>
  							</li>
  						</ul>
  				</div>
  				<div style="height:1.306667rem"></div>
  			</div>	
  		</div>
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
	border-bottom: 0.013333rem solid #f2f2f2;
	position:fixed;
	top:0;
	background: #ffffff;
}
.app ul{
	width:100%;
	height:1.226667rem;
	display: flex;
	justify-content: space-between ;
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
	left:2.3rem;
	z-index: 999;
}
.left-div{
	width:20%;
	height:15.506667rem;
	position: fixed;
	left:0;
}
.left-div ul{
	width:100%;
	height:15.506667rem;
	display: flex;
	flex-direction: column;
	font-size: 0.32rem;
}
.left-div ul li{
	width: 2.093333rem;
	height:1.186667rem;
	border:0.013333rem solid #f2f2f2;
	text-align: center;
	line-height:1.186667rem;
}
.actives{
	color: #f45971;
	background: #f0f0f0;
}
.right-div{
	width: 75%;
	margin-left: 21%;
}
.right-list{
	width:100%;
}
.right-list h2{
	width: 100%;
	height:1.146667rem;
	line-height:1.146667rem;
	font-size: 0.46rem;
}
.right-list ul{
	width:100%;
	display: flex;
	flex-wrap:wrap;
	align-items: center;
}
.right-list ul li p{
	margin:0.333333rem 0.266667rem;
}
.bg{
	width:100%;
	height:15.506667rem;
	display: flex;
	justify-content: center;
}
.bg img{
	width: 1.733333rem;
	height:1.28rem;
}
</style>
