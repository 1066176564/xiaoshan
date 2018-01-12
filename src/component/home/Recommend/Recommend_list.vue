<template>
	<div id="app">
		<div class="head" v-if='showw'>
			<router-link to="/home" tag="p">
				<img src="../../../img/classify/classify_details/classify_details_01.png" />
			</router-link>
			<h2>商品详情</h2>
			<p><img src="../../../img/classify/classify_details/classify_details_02.png" /></p>
			<p class="top_share" @click='kuans()'>
				<img src="../../../img/classify/classify_details/classify_details_03.png" style="margin-top: 0rem;" />
			</p>
		</div>

		<div id='swiper1'>
			<swiper1 :data='obj'></swiper1>
		</div>
		<div class="particulars">
			<div class="particulars_01">
				<p>{{arr2.name}}</p>
				<p>￥{{arr2.price}}</p>
			</div>
			<div class="particulars_02">
				<p>最多可用0购物卡，抵扣￥0.0</p>
			</div>
		</div>
		<div v-if='hid'>
			<div class="particulars_03">
				<p>三星家电</p>
			</div>
			<div class="particulars_04">
				<p>请选择型号</p>
				<p>65英寸 1个 <span>></span> </p>
			</div>
			<div style="height: 0.226666rem"></div>

			<mu-tabs :value="activeTab" @change="handleTabChange" v-if='showa'>
				<mu-tab value="tab1" title="商品详情" />
				<mu-tab value="tab2" title="商品评价" />
			</mu-tabs>
			<mu-tabs :value="activeTab" @change="handleTabChange" v-if='showb' id='showb'>
				<mu-tab value="tab1" title="商品详情" />
				<mu-tab value="tab2" title="商品评价" />
			</mu-tabs>
			<div v-if="activeTab === 'tab1'" class="tab">
				<p>
					<img src="../../../img/classify/classify_details/classify_details_04.png" />
				</p>
			</div>
			<div v-if="activeTab === 'tab2'" class="tab">
				<mu-list>
					<img src="../../../img/classify/classify_details/pingjia_03.png" class="tab_img_01" />
					<mu-list-item title="Myron Liu">
						<img src="../../../img/classify/classify_details/pingjia_06.png" class="tab_img_02" />
						<p slot="describe"> 实在编不下去，这就是个demo</p>
					</mu-list-item>
					<img src="../../../img/classify/classify_details/pingjia_03.png" class="tab_img_01" />
					<mu-divider inset/>
					<mu-list-item title="Myron Liu">
						<img src="../../../img/classify/classify_details/pingjia_06.png" class="tab_img_02" />
						<p slot="describe"> 实在编不下去，这就是个demo</p>
					</mu-list-item>
					<mu-divider inset/>
				</mu-list>
			</div>

		</div>
		<div class="bottoms">
			<ul style="width: 50%;" class="bottom_01">
				<li @click='fn()'>
					<img src="../../../img/classify/classify_details/classify_details_05_01.png" />
					<p>客服</p>
				</li>
				<li>
					<router-link to="/shop" tag="li">
						<img src="../../../img/classify/classify_details/classify_details_05_02.png" />
						<p>店铺</p>
					</router-link>
				</li>
				<li>
					<img src="../../../img/classify/classify_details/classify_details_05_03.png" />
					<p>收藏</p>
				</li>
			</ul>
			<div class="Shopping_Cart" @click='gouwu()'>
				加入购物车
			</div>
			<div class="purchase" @click='purchase()'>
				立即购买
			</div>
		</div>
		<div class="background" v-if='shows'>
			<div class="box">
				<div class="box_s">
					<img src="../../../img/classify/classify_details/classify_details_09.png" class="left">
					<div class="right">
						<p class="text">6999.00</p>
						<p class="xqin">商品编号:23345</p>
						<p class="xqin">商品库存:50</p>
					</div>
					<div class="close" @click='close()'>x</div>
				</div>
				<div class="type_selection">
					<p class="graphics">显卡类型</p>
					<p class="type" style="background: #fe1250;">GTX类型</p>
				</div>
				<div class="type_selection">
					<p class="graphics">板式</p>
					<p class="type" style="float: left;">15X8G+128G</p>
					<p class="type" style="float: left;">17+8G+256G</p>
				</div>
				<div class="alert">
					<p class="number">购买数量</p>
					<p class="buttons">
						<button @click='jian()'>-</button>
						<input type="text" value="1" id="inp">
						<button @click='jia()'>+</button>
					</p>
				</div>
				<div class="ok" @click='urteilen1'>
					确定
				</div>
			</div>
		</div>
		<div class="background" v-if='show'>
			<div class="box">
				<div class="box_s">
					<img src="../../../img/classify/classify_details/classify_details_09.png" class="left">
					<div class="right">
						<p class="text">6999.00</p>
						<p class="xqin">商品编号:23345</p>
						<p class="xqin">商品库存:50</p>
					</div>
					<div class="close" @click='close()'>x</div>
				</div>
				<div class="type_selection">
					<p class="graphics">显卡类型</p>
					<p class="type" style="background: #fe1250;">GTX类型</p>
				</div>
				<div class="type_selection">
					<p class="graphics">板式</p>
					<p class="type" style="float: left;">15X8G+128G</p>
					<p class="type" style="float: left;">17+8G+256G</p>
				</div>
				<div class="alert">
					<p class="number">购买数量</p>
					<p class="buttons">
						<button @click='jian()'>-</button>
						<input type="text" value="1" id="inp">
						<button @click='jia()'>+</button>
					</p>
				</div>
				<div class="ok" @click='urteilen'>
					确定
				</div>
			</div>
		</div>
		<div class="custom_service" v-show='showx'>
			<div class="div">
				<p style="font-size:0.7rem;color:#000;">18351097732</p>

				<div style="margin-top:0.666667rem;">
					<button style="margin-right:0.7rem;" class="push_button" @click='confirm()'>确定</button>
					<button @click='close()' class="push_button">取消</button>
				</div>
			</div>
		</div>
		<div class="alertKuan" v-if='kuan'>
			<div @click='close()'>
				<router-link to='/message' tag='div'>
					<mu-icon value="chat_bubble" />
					<p>消息</p>
				</router-link>
			</div>
			<div @click='close()'>
				<router-link to='/home' tag='div'>
					<mu-icon value="home" />
					<p>首页</p>
				</router-link>
			</div>
			<div @click='share()'>
				<mu-icon value="screen_share" />
				<p>分享</p>
			</div>
		</div>
		<div class="background" v-if='showc'>
			<div class="background_div">
				<div class="background_li">
					<h1>分享到</h1>
					<ul>
						<li @click='urteilen1()'><img src="../../../img/classify/classify_details/fenXiang_03.png" />
							<p>微信好友</p>
						</li>
						<li @click='urteilen1()'><img src="../../../img/classify/classify_details/fenXiang_05.png" />
							<p>微信朋友圈</p>
						</li>
						<li @click='urteilen1()'><img src="../../../img/classify/classify_details/fenXiang_07.png" />
							<p>QQ好友</p>
						</li>
						<li @click='urteilen1()'><img src="../../../img/classify/classify_details/fenXiang_09.png" />
							<p>QQ空间</p>
						</li>
					</ul>
				</div>
				<div class="background_quxiao" @click='close()'>
					取消分享
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import swiper from '../../../common/swiper/swiper.vue';
	export default {
		name: 'app',
		data() {
			return {
				activeTab: 'tab1',
				arr2:[],
				showa: true,
				showb: false,
				show: false,
				showc: false,
				showx: false,
				shows: false,
				showw: true,
				hid: true,
				kuan: false,
				id:"",
				obj: {
					img: [],
					pagination: true,
					loop: 2000
				},

			}
		},
		components: {
			'swiper1': swiper
		},
		created() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
			var id = this.$route.params.id;
			var url = "../.././src/api/Recommend_List.json"
			axios.get(url).then((res) => {
				this.arr2=res.data[id-1];
				this.str=JSON.stringify(this.arr2)
				console.log(this.arr2)
				this.obj.img.push(this.arr2.img)
			})
		},
		mounted() {
			// 监听滚轮事件
			window.addEventListener('scroll', this.fnn);
		},
		methods: {
			share() {
				this.kuan = false;
				this.showc = true;
			},
			kuans() {
				this.kuan = true;
			},
			handleTabChange(val) {
				this.activeTab = val
			},
			// 点击打开/显示
			purchase() {
				this.show = true;
			},
			gouwu() {
				this.shows = true;
			},
			// 点击关闭
			close() {
				this.show = false;
				this.showc = false;
				this.shows = false;
				this.showx = false;
				this.hid = true;
				this.kuan = false;
			},
			urteilen1() {
				
				if(localStorage.getItem("token") == null) {
					alert("没有登录")
					//      this.$router.push('/Ready');
				} else if(localStorage.getItem("token") != null) {

					//      this.$router.push('/tab2');
					if(localStorage.getItem("arr")==undefined){
						localStorage.setItem("arr",JSON.stringify(this.arr2))
						
					}else{
						var arrs=[]
						var a=localStorage.getItem("arr")
						a=JSON.parse(a)
						for(var i=0;i<a.length;i++){
							arrs.push(a[i])
						}
						arrs.push(this.arr2)
						console.log(arrs)
						localStorage.setItem("arr",JSON.stringify(arrs))
					}
					
				}
			},
			urteilen() {
				if(localStorage.getItem("token") == null) {
					alert("没有登录")
					//      this.$router.push('/Ready');
				} else if(localStorage.getItem("token") != null) {

					//      this.$router.push('/order_form');
					localStorage.setItem("arr",this.str)
				}
			},
			// 减--
			jian() {
				if(inp.value <= 0) {
					inp.value = 0;
				} else {
					inp.value = parseInt(inp.value) - 1;
				}
			},
			// 加++
			jia() {
				inp.value = parseInt(inp.value) + 1;
			},
			fn() {
				this.showx = true;
				this.hid = false;
			},
			fnn() {
				var t = document.documentElement.scrollTop || document.body.scrollTop
				if(t >= 658) {
					this.showa = false;
					this.showb = true;
					this.showw = false;
				} else {
					this.showa = true;
					this.showb = false;
					this.showw = true;
				}
			},
			confirm() {
				alert("正在拨打中...")
				this.showx = false;
				this.hid = true;
			}
		}

	}
</script>

<style scoped="scoped">
	.tab_img_02 {
		width: 30%;
		float: right;
		margin-top: -30px;
	}
	
	.tab_img_01 {
		width: 15%;
		float: left;
		padding: 0.3rem 0 0 0.3rem;
	}
	
	.top_share {
		margin-right: 0.7rem;
		margin-left: 0.7rem;
	}
	
	.background_li h1 {
		text-align: center;
		color: #656a6e;
	}
	
	.background_li ul {
		width: 100%;
		display: flex;
		padding: 0 0.5rem;
		text-align: center;
	}
	
	.background_li li {
		flex: 1;
	}
	
	.background_li img {
		width: 1.733333rem;
		height: 1.733333rem;
	}
	
	.background_div {
		width: 100%;
		height: 7rem;
		background: #eaeff3;
		bottom: 0;
		position: fixed;
	}
	
	.background_quxiao {
		width: 100%;
		height: 1.866666rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		text-align: center;
		line-height: 1.866666rem;
		font-size: 0.4rem;
		color: #585a59;
	}
	
	.alertKuan {
		border: 0.026666rem solid #ddd;
		width: 2.9rem;
		height: 3.3rem;
		background: #fff;
		border: 0.026666rem solid #ddd;
		position: fixed;
		z-index: 9999;
		top: 0;
		margin-left: 7.12rem;
		font-size: 0.4rem;
	}
	
	a {
		color: #3A3A3A;
	}
	
	.alertKuan div {
		display: flex;
	}
	
	.alertKuan div p {
		margin-top: 0.4rem;
		margin-left: 0.4rem;
	}
	
	.tab {
		background: #fff;
		min-height: 16.3rem;
	}
	
	#showb {
		position: fixed;
		z-index: 9999;
		top: 0;
		height: 1.186667rem;
	}
	
	#app {
		background: #f6f6f6;
	}
	
	.head {
		width: 100%;
		height: 1.8rem;
		background: #fff;
		position: fixed;
		z-index: 999;
		display: flex;
		line-height: 1.8rem;
		top: 0;
	}
	
	.head p img {
		height: 0.693333rem;
		margin-top: 0.6rem;
	}
	
	.head p:nth-of-type(1) {
		padding: 0 0.8rem;
	}
	
	.head p:nth-of-type(3) {
		padding: 0 0.2rem;
		margin-top: 0.3rem;
	}
	
	.head h2 {
		width: 85%;
		text-align: center;
		font-size: 0.533333rem;
		color: #636363;
		font-weight: bold;
	}
	
	#swiper1 {
		margin-top: 1.8rem;
		border-top: 0.026666rem solid #ddd;
	}
	
	.mu-icon {
		margin-top: 0.3rem;
		color: #000;
		margin-left: 0.5rem;
	}
	
	.router {
		display: flex;
	}
	
	a {
		text-decoration: none;
	}
	
	.particulars {
		width: 100%;
		background: #fff;
	}
	
	.particulars_01 {
		width: 100%;
		padding: 0.85rem 0.6rem 0.253333rem 0.226666rem;
		font-weight: bold;
		color: #343434;
		font-size: 0.4rem;
	}
	
	.particulars_01 p:nth-of-type(2) {
		margin-top: 0.3rem;
		color: #ff094e;
		font-weight: bold;
	}
	
	.particulars_02 {
		color: #ff094e;
		font-weight: bold;
		padding: 0.4rem 0 0.4rem 0.36rem;
		width: 100%;
		font-size: 0.4rem;
		border-top: 0.013333rem solid #ddd;
		border-bottom: 0.013333rem solid #ddd;
	}
	
	.particulars_03 {
		width: 100%;
		border-bottom: 0.013333rem solid #ddd;
		padding: 0.4rem 0 0.4rem 0.36rem;
		font-size: 0.4rem;
		font-weight: bold;
		background: #fff;
	}
	
	.particulars_04 {
		background: #fff;
		width: 100%;
		padding: 0.4rem 0 0.4rem 0.36rem;
		font-size: 0.4rem;
		font-weight: bold;
		display: flex;
	}
	
	.mu-tab-link {
		min-height: 1.466666rem;
		font-size: 0.4rem;
		background: #fff;
		color: #3a3a3a;
		font-weight: bold;
		border-top: 0.013333rem solid #ddd;
	}
	
	.mu-tab-active {
		color: #ff094e;
	}
	
	.bottoms {
		width: 100%;
		bottom: 0;
		position: fixed;
		z-index: 9999;
		display: flex;
		align-items: center;
	}
	
	.purchase {
		width: 25%;
		background: #fe1250;
		color: #fff;
		text-align: center;
		font-size: 0.4rem;
		font-weight: bold;
		padding: 0.4rem 0;
	}
	
	.Shopping_Cart {
		width: 25%;
		background: #fff;
		color: #999999;
		text-align: center;
		font-size: 0.4rem;
		font-weight: bold;
		padding: 0.4rem 0;
	}
	
	.bottom_01 {
		display: flex;
		background: #fff;
		padding: 0.1rem 0;
	}
	
	.bottom_01 img {
		height: 0.6rem;
	}
	
	.bottom_01 p:nth-of-type(1) {
		margin-left: 0.533333rem;
	}
	
	.background {
		width: 100%;
		height: 100vh;
		background: rgba(33, 33, 33, 0.5);
		z-index: 99999999;
		position: fixed;
		bottom: 0;
		/*font-weight: bold;*/
		color: #565656;
	}
	
	.ok a {
		color: #fff;
	}
	
	.buttons {
		float: right;
		margin-top: 0.6rem;
		font-weight: bold;
	}
	
	.text {
		color: #ca3232;
	}
	
	.box_s {
		width: 100%;
		height: 3.5rem;
		background: #fff;
		border-bottom: 0.013333rem solid #ddd;
	}
	
	.box {
		position: fixed;
		width: 100%;
		z-index: 9999999999999;
		bottom: 0;
	}
	
	.xqin {
		font-size: 0.4rem;
		color: #828282;
		/*float:left;*/
		margin-top: 0.15rem;
	}
	
	.number {
		font-size: 0.4rem;
		color: #828282;
		float: left;
		margin-top: 0.666667rem;
	}
	
	#inp {
		width: 1.333333rem;
		height: 0.8rem;
		border: 0;
		background: #e6e6e6;
		text-align: center;
	}
	
	.bottom {
		width: 100%;
		height: 1.466667rem;
		border-top: 0.026667rem solid #ddd;
		position: fixed;
		bottom: 0;
		z-index: 999999;
		color: #cccccc;
	}
	
	.bottom div:nth-of-type(1) {
		width: 1.733333rem;
		border-right: 1px solid #ddd;
		text-align: center;
		float: left;
		height: 100%;
		background: #fff;
		padding: 0.08rem 0;
	}
	
	.bottom div:nth-of-type(2) {
		width: 1.733333rem;
		text-align: center;
		float: left;
		height: 100%;
		background: #fff;
		padding: 0.08rem 0;
	}
	
	.bottom div:nth-of-type(3) {
		width: 3.466667rem;
		text-align: center;
		float: left;
		background: #ff6060;
		height: 100%;
		color: #fff;
		font-size: 0.48rem;
		font-family: '微软雅黑';
		line-height: 1.466667rem;
	}
	
	.bottom div:nth-of-type(4) {
		width: 3.066667rem;
		text-align: center;
		float: right;
		background: #ca3232;
		height: 100%;
		color: #fff;
		font-size: 0.48rem;
		line-height: 1.466667rem;
		font-family: '微软雅黑';
	}
	
	.bottom img:nth-of-type(1) {
		width: 1.12rem;
	}
	
	.bottom #img {
		width: 0.693333rem;
	}
	
	.ok {
		width: 100%;
		height: 1.266667rem;
		background: #ca3232;
		text-align: center;
		line-height: 1.266667rem;
		color: #fff;
		font-size: 0.48rem;
	}
	
	.buttons button {
		background: #e6e6e6;
		width: 0.8rem;
		height: 0.8rem;
		border: 0;
	}
	
	.buttons button:nth-of-type(1) {
		border-bottom-left-radius: 0.133333rem;
		border-top-left-radius: 0.133333rem;
	}
	
	.buttons button:nth-of-type(2) {
		border-bottom-right-radius: 0.133333rem;
		border-top-right-radius: 0.133333rem;
	}
	
	.buttons button:hover {
		background: #f7f7f7;
	}
	
	.close {
		position: absolute;
		width: 0.666667rem;
		height: 0.666667rem;
		border-radius: 0.666667rem;
		border: 0.013333rem solid #000;
		text-align: center;
		line-height: 0.6rem;
		margin-left: 9rem;
		margin-top: 0.3rem;
	}
	
	.alert {
		width: 100%;
		height: 1.866667rem;
		background: #fff;
		padding: 0 0.266667rem 0 0.533333rem;
		font-family: '微软雅黑';
	}
	
	.right {
		float: right;
		font-size: 0.4rem;
		width: 5rem;
		margin-top: 0.733333rem;
		margin-right: 1.333333rem;
	}
	
	.left {
		float: left;
		position: absolute;
		margin-top: 0.6rem;
		width: 2.5rem;
		height: 2.5rem;
		margin-left: 0.533333rem;
		border: 0.013333rem solid #ddd;
	}
	
	.type {
		padding: 0.2rem 0;
		background: #bbbbbb;
		margin-left: 0.533333rem;
		color: #fff;
		border-radius: 0.5rem;
		width: 30%;
		text-align: center;
		margin-top: 0.2rem;
	}
	
	.type:hover {
		background: #fe1250;
	}
	
	.graphics {
		margin-top: 0.266666rem;
		margin-left: 0.266666rem;
	}
	
	.type_selection {
		width: 100%;
		height: 2.5rem;
		border-top: 0.013333rem solid #ddd;
		border-bottom: 0.013333rem solid #ddd;
		background: #fff;
		font-size: 0.4rem;
	}
	
	.div {
		width: 6.666667rem;
		height: 4.0rem;
		background: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		text-align: center;
		padding-top: 0.666667rem;
		border: 0.026667rem solid #ddd;
		border-radius: 0.266667rem;
		margin-left: -3.333333rem;
		margin-top: -2.0rem;
	}
	
	.push_button {
		padding: 0.133333rem 0.7rem;
		color: blue;
		background: #fff;
		border: 0.026666rem solid #ddd;
		font-size: 0.4rem;
		border-radius: 0.266666rem;
	}
	
	.custom_service {
		width: 100%;
		height: 102vh;
		background: rgba(33, 33, 33, 0.5);
		z-index: 999999999999999;
		position: absolute;
		top: 0;
	}
</style>