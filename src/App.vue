<template>
	<div id="app">
		<!--<keep-alive>-->
		<router-view></router-view>
		<!--</keep-alive>-->
		<!--rem设置75px-->
		<div class="footer" v-show="$route.meta.navShow">
			<ul class="footernav">
				<li v-for="(data,i) in arr" @click="atv(i)">
					<router-link :to="router[i]" :class="{active:change == i}" >
					<dl>
						<dt>
							<mu-icon :value="icon[i]" :size="26"/>
						</dt>
						<dd>
							{{data}}
						</dd>	
					</dl>
					</router-link>
				</li>
			</ul>
		</div>

		<div class="back_top" v-on:click="gotop" v-if="show"><img src="src/img/home/back_top.png"></div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				arr:["首页","分类","消息","周边","我的"],
				router:["/home","/classify","/message","/around","/myself"],
				icon:["home","list","mail_outline","satellite","account_box"],
				change:0,
				show: false,
				scroll: ""
			}
		},
		methods: {
			atv(i) {
				this.change = i;
			},
			gotop(){
				var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(currentScroll > 0) {
					window.requestAnimationFrame(this.gotop);
					window.scrollTo(0, currentScroll - (currentScroll / 5));
				}
				this.menu();
			},
			menu() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(this.scroll <= 300) {
					this.show = true;
					this.show = false;
				} else {
					this.show = true;
				}
			}
			
		},
		mounted() {
			window.addEventListener('scroll', this.menu);
		}
	}
</script>

<style scoped="scoped">
	.footer{
		height: 1.306666rem;
		width: 100%;
	}
	.footernav {
		height: 1.306666rem;
		border-top: 1px #dedede solid;
		background: #fff;
		width: 100%;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
	}
	.footernav li{
		width: 20%;
		text-align: center;
		justify-content: space-around;
	}
	dl dt{
		width: 0.746666rem;
		height: 0.586666rem;
		margin:0 auto;
		margin-top: 0.173333rem;
	}
	li a{
		color: #666666;
		text-decoration: none;
	}
	.active{
		color:#f4647a;
	}
	.back_top img {
		position: fixed;
		z-index: 1000;
		bottom: 1.6rem;
		right: 0.666666rem;
		width: 0.633333rem;
		height: 1.333333rem;
	}
</style>
