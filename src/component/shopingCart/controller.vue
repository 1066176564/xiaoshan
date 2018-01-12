<template>
	<div class="cartcontrol">
		<div class="cart-decrease" @click="reduce()">-</div>
		<input class="cart-count" v-model="num" ref="type1"/>
		<div class="cart-add" @click="refuel()">+</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:[
				"data2"
			],
		data(){
			
			return {
				num:1
			}
		},
		created(){
			this.num=this.data2.num
		},
		methods:{
		reduce(){
			if(this.num==1){
				 if (confirm("你确定删除吗？")) {  
          
        }  
        else {  
            return;
        }  
				
			}
			this.data2.num--
			this.num=this.data2.num
			
		},
		refuel(){
			this.data2.num++
			this.num=this.data2.num

		}
		}
	}
</script>
<style type="text/css" scoped="scoped">
	.cartcontrol>div {
		line-height: 30px;
	}
	
	.cart-decrease {
		width: 30%;
		height: 30px;
		background-color: none;
		/*border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;*/
		text-align: center;
		border:1px solid #9a9a9a;
	}
	
	.cart-count {
		border:0;
		width: 40%;
		height: 30px;
		
		background-color: none;
		text-align: center;
		border-top:1px solid #9a9a9a;
		border-bottom:1px solid #9a9a9a;
	}
	
	.cart-add {
		width: 30%;
		height: 30px;
		background-color: none;
		/*border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;*/
		text-align: center;
		border:1px solid #9a9a9a;

	}
</style>