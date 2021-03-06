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
import searchx from './component/home/search.vue'

//积分专区
import integral_detail from './component/home/integral/detail/integral_detail.vue'
//首页活动
//import activity from './component/home/classification/activity/activity.vue'
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
//我的积分
import integral from './component/myself/Integral/integral.vue';
//我的留言
import words from './component/myself/words/words.vue';
//实名认证
import certification from './component/myself/certification/certification.vue';
import classifyList from './component/classify/classify-list/classify-list.vue';
import classifyDetails from './component/classify/classify_details/classify_details.vue';
import classifyShop from './component/classify/classify_shop/classify_shop.vue';
import classifySerch from './component/classify/classify-home/search.vue';
//登录
import login from './component/login/index.vue';
// 关于我们
import about from './component/myself/set/about.vue';
// 关于我们-企业简介
import about_details from './component/myself/set/about_details.vue';
// 关于我们-企业文化
import about_culture from './component/myself/set/about_culture.vue';
// 关于我们-帮助中心
import about_help from './component/myself/set/about_help.vue';
//周边列表商品详情
import around_dataile from './component/around/around_detailed.vue';
//城市周边
import city from "./component/around/city.vue";
import brand_list from './component/home/brand/brand_list.vue';
import Recommend_list from './component/home/Recommend/Recommend_list.vue';
import activity from './component/home/classification/activity/activity.vue';
//购物车
import shopingCart from './component/shopingCart/index.vue';
var router = new VueRouter({
	mode: 'history',
	routes:[
		{path:"/",redirect:"home",meta:{navShow:true}},
		{path:"/classify",component:classify,meta:{navShow:true}},
		{path:"/message",component:message,meta:{navShow:true}},
		{path:"/home",component:home,meta:{navShow:true}},
		{path:"/gsdt",component:gsdt,},
		{path:"/gsdt_detail/:id",component:gsdt_detail},
		{path:"/myself",component:myself,meta:{navShow:true,requiresAuth:true}},
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
		{path:"/searchx",component:searchx},
		{path:"/search",component:classifySerch},
		{path:"/collection",component:collection},
		{path:"/login",component:login},
		{path:"/integral",component:integral},
		{path:"/words",component:words},
		{path:"/certification",component:certification},
		{path:"/about",component:about},
		{path:"/about_details",component:about_details},
		{path:"/about_culture",component:about_culture},
		{path:"/about_help",component:about_help},
		{path:"/around_dataile",component:around_dataile},
		{path:"/city",component:city},
		{path:"/integral_detail/:id",component:integral_detail},
		{path:"/Recommend_list/:id",component:Recommend_list},
		{path:"/brand_list/:id",component:brand_list},
		{path:"/activity",component:activity},
		{path:"/shopingCart",component:shopingCart}
		
	]
})
//
import axios from "axios";
Vue.prototype.$http=axios;

import md5 from 'js-md5';
import {Base64} from 'js-base64';
 
 Vue.prototype.md5 = md5;
 Vue.prototype.Base64 = Base64;

router.beforeEach((to, from, next) => { 
    //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
    if(to.path === '/login') { next() } // 如果即将进入登录路由，则直接放行
     else {   //进入的不是登录路由
         if(to.meta.requiresAuth && !localStorage.getItem('token')) {next({ path: '/login' })}
       //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
       else { next() }
      }
      //如果不需要登录验证，或者已经登录成功，则直接放行
 })

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
