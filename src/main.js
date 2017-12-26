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
import classify from './component/classify/index.vue';
import message from './component/message/index.vue';
import myself from './component/myself/index.vue';
import around from './component/around/index.vue';
import address from './component/myself/address/index.vue';

var router = new VueRouter({
	mode: 'history',
	routes:[
		{path:"/",redirect:"home"},
		{path:"/classify",component:classify},
		{path:"/message",component:message},
		{path:"/home",component:home},
		{path:"/myself",component:myself},
		{path:"/around",component:around},
		{path:"/address",component:address}
	]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
