import Vue from 'vue'
import App from './App.vue'
//引用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//引用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引用swiper
require('swiper/dist/css/swiper.css')
var VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.use(VueAwesomeSwiper)
//引用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引用懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'图片未找到',
    loading:'./src/img/loging.gif',
})
//路由组件
import home from './component/home/index.vue';
//公司动态
import gsdt from './component/home/home-gsdt/gsdt.vue';
import gsdt_detail from './component/home/home-gsdt/detail/gsdt_detail';
import search from './component/home/search.vue'


import classify from './component/classify/index.vue';
import message from './component/message/index.vue';
import myself from './component/myself/index.vue';
//周边
import around from './component/around/index.vue';
//地址
import address from './component/myself/address/index.vue';
//新建地址
import newaddress from './component/myself/address/new_address.vue';
//设置
import set from './component/myself/set/set.vue';
//我的订单
import order from './component/myself/address/order.vue';
//修改昵称
import editname from './component/myself/editname/editname.vue'
// 收藏
import collection from './component/myself/address/collection.vue';

import classifyList from './component/classify/classify-list/classify-list.vue';
import classifyDetails from './component/classify/classify_details/classify_details.vue';
import classifyShop from './component/classify/classify_shop/classify_shop.vue';

var router = new VueRouter({
	mode: 'history',
	routes:[
		{path:"/",redirect:"home",meta:{navShow:true}},
		{path:"/classify",component:classify,meta:{navShow:true}},
		{path:"/message",component:message,meta:{navShow:true}},
		{
			path:"/home",
			component:home,
			children:[
				{
					path:"/home/gsdt",
					component:gsdt,
					children:[
						{
							path:"/home/gsdt/gsdt_detail",
							component:gsdt_detail
						}
					]
				}
			]
			,meta:{navShow:true}
		},
		{path:"/myself",component:myself,meta:{navShow:true}},
		{path:"/around",component:around,meta:{navShow:true}},
		{path:"/address",component:address},
		{path:"/newaddress",component:newaddress},
		{path:"/set",component:set},
		{path:"/editname",component:editname},
		{path:"/order",component:order},
		{path:"/list",component:classifyList},
		{path:"/details",component:classifyDetails},
		{path:"/shop",component:classifyShop},
		{path:"/collection",component:collection},
		{path:"/search",component:search}
	]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
