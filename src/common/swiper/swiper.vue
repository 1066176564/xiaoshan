<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="img in imgs" v-if="text==false">
      <img :src="img"  >
    </swiper-slide>
     <swiper-slide v-for="te in texts" v-if="text">
      <div style="width:100%;height:100%;">{{te}}</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination" v-if="pagination2"></div>
    <div class="swiper-button-prev" slot="button-prev" v-if="button"></div>
    <div class="swiper-button-next" slot="button-next" v-if="button"></div>
    <div class="swiper-scrollbar"   slot="scrollbar" v-if="scrollbar"></div>
  </swiper>
</template>
 <style type="text/css">
 	img{
 		width: 100%;
 		height: 100%;
 	}
 </style>
<script>
  export default {
  	props:[
  		'data'
  	],
    name: 'carrousel',
    data() {
      return {
      	pagination2:false,
      	button:false,
      	scrollbar:false,
      	imgs:"",
      	text:false,
        texts:[],
        swiperOption: {
          loop: true,
        	spaceBetween: 30,
          centeredSlides: true,
          direction: 'horizontal',
        	autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    },
    created(){
      if(!this.data.img){

      }else{

      this.imgs=this.data.img

      }
      if(!this.data.font){

      }else{
      this.texts=this.data.font
        
      }
      if(!this.data.text){

      }else{
      this.text=this.data.text
        
      }
    	// console.log(this.data)

    	if(!this.data.pagination){

    	}else{
    		this.pagination2=this.data.pagination
    	}


    	if(!this.data.button){

    	}else{
    		this.button=this.data.button
    	}


    	if(!this.data.scrollbar){

    	}else{
    		this.scrollbar=this.data.scrollbar
    	}

      if(!this.data.direction){

      }else{
        this.swiperOption.direction=this.data.direction
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>