<template>
	<div>
	<div v-if="data2.all!=undefined">
		<div class="check" v-if="c==0" @click="all"><img src="src/img/cart/cart1.png"></div>
		<div class="check" v-if="c==1" @click="all2"><img src="src/img/cart/cart2.png"></div>
	</div>	
	<div v-if="data2.all==undefined">
		<div class="check" v-if="c==0" @click="a"><img src="src/img/cart/cart1.png"></div>
		<div class="check" v-if="c==1" @click="b"><img src="src/img/cart/cart2.png"></div>
	</div>
	</div>

</template>
<script type="text/javascript">
	export default{
		props:["data2"],
		data(){
			return{
				c:0
			}
		},
		created(){

		},
		methods:{
			all(){
				this.data2.all=1
				this.c=this.data2.all
				for(var i in this.data2.data){
					this.data2.data[i].check=1
				}
			},
			all2(){
				this.data2.all=0
				this.c=this.data2.all
				for(var i in this.data2.data){
					this.data2.data[i].check=0
				}
			},
			a(){
				
				this.data2.check=1
				this.c=this.data2.check
			},
			b(){
				
				this.data2.check=0
				this.c=this.data2.check
			}
		},
		watch:{
			data:{ 
				handler:function(val,oldval){
			// this.data.count=this.$refs.type1.value
			if(isNaN(this.data.count)==false){
				this.num2=this.data.count
			}
			if(this.data.count>=200){

				this.data.count=200
				
			}else if(this.data.count<=1){
				this.data.count=1

			}else if(isNaN(this.data.count)==true){
				this.data.count=this.num2
			}
    },
    deep:true
		}
	}

	}
</script>
<style type="text/css" scoped="scoped">
	.check{
		width: 0.426667rem;
		height: 0.426667rem;
	}
	.check img{
		width: 100%;
		height:100%;
	}
</style>