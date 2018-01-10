<template>
  <div id="app">
   <header>
   	<div class="back" @click="back()"></div>
   	<span class="title">新建地址</span>
   </header>

   <div style="width:100%; height:1.253333rem;"></div>

   <main>
  	<div class="personal">
      <div class="top">
        <div class="left">
          <p>收货人：<input type="text" name="" v-model="name"></p>
          <p>手机号：<input type="text" name="" v-model="phone"></p>
        </div>
      </div>

      <div class="demo-picker-container">
        <p @click="bool=!bool">
          您选择的城市是： {{addressProvince}} {{addressCity}}
        </p>
        <mu-picker :slots="addressSlots" :visible-item-count="5" @change="addressChange" :values="address" v-if="bool"/>
      </div>
    </div>

    <div class="xx_address">
      <p>详细地址：<input type="text" name="" placeholder="街道、楼牌号等" v-model="xxaddress">
      </p>

    </div>

    <div class="details">
      <p>备注：<input type="text" name=""></p>
      <textarea class="text_details" placeholder="请填写详情"></textarea>
    </div>
   </main>

   <footer>
   	<button class="yes" @click="oks">确认</button>
   </footer>
  	
  </div>
</template>

<script>

const address = {
  '请选择':['请选择'],
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}

export default {
  name: 'app',
  data () {
    return {
        add:{
          name:"",
          phone:"",
          xxaddress:""
        },
        name:"",
        phone:"",
        xxaddress:"",
        bool:false,
        arrs:{ 
          name:"",
          tel:"",
          address:"",
          lable:"",
        },
         addressSlots: [
        {
          width: '100%',
          textAlign: 'right',
          values: Object.keys(address)
        }, {
          width: '100%',
          textAlign: 'left',
          values: ['北京']
        }
      ],
      address: ['请选择', '请选择'],
      addressProvince: '请选择',
      addressCity: '请选择'
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },
     addressChange (value, index) {
      switch (index) {
        case 0:
          this.addressProvince = value
          const arr = address[value]
          this.addressSlots[1].values = arr
          this.addressCity = arr[0]
          break
        case 1:
          this.addressCity = value
          break
      }
      this.address = [this.addressProvince, this.addressCity]
    },
    oks(){
      this.$router.back(-1)
      this.arrs.name=this.name;
      this.arrs.tel=this.phone;
      this.arrs.address=this.xxaddress;
      this.arrs.lable=this.addressProvince+this.addressCity;
      sessionStorage.setItem("item",JSON.stringify(this.arrs))
    }
  }
  
}
</script>

<style scoped="scoped">

.demo-picker-container{
  width: 100%;
}

.demo-picker-container p{
  height: 1.066667rem;
  line-height: 1.066667rem;
  font-size: 0.48rem;
}

	#app{
		width: 100%;
    height: 100vh;
    background: #f2f2f2;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		margin-bottom: 0;
	}

  /* 头部固定 */
	header{
		width: 100%;
		height: 1.253333rem;
		border-bottom:1px solid #f2f2f2; 
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background:#fff; 
	}

	.back{
		width: 0.266667rem;
		height: 0.466667rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -0.453333rem -0.386667rem;
		position: fixed;
		top: 0.4rem;
		left:0.266667rem;
		z-index: 999;
	}

	.information{
		width: 0.506667rem;
		height: 0.493333rem;
		background:url(../../../img/myself/address/xb1.png);
		background-size: 6.826667rem 6.826667rem; 
		background-position: -1.133333rem -0.386667rem;
		position: fixed;
		top: 0.4rem;
		right:0.266667rem;
		z-index: 999;
	}

	.title{
		width: 100%;
		float: left;
		line-height: 1.253333rem;
		/*margin-left: 40%;*/
		font-size: 0.48rem;
		height: 100%;
		text-align: center;
	}

	/* 中间的部分 */
  /* 用户、密码 */
  .personal{
    width: 100%;
    padding: 0rem 0.266667rem;
    background: #fff;
    margin-bottom: 0.266667rem;
  }

  .personal>.top{
    width: 100%;
    height: 2.373333rem;
    display: flex;
    justify-content: center;
  }

  .personal>.top>.left{
    width: 100%;
    height: 100%;
  }

  .personal>.top>.left p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
  }

  .personal>.top>.left p input{
    width: 5.386667rem;
    height: 100%;
    border:none;
  }

  .personal>.top>.right{
    width: 2.066667rem;
    height: 100%;
    border:1px solid #f2f2f2;
    border-right: none;
    border-top: none;
  }

  .personal>.top>.right dt{
    width: 0.773333rem;
    height: 0.8rem;
    background:url(../../../img/myself/address/address.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -0.293333rem -0.4rem;
    margin-left: 0.65rem;
    margin-top: 0.52rem;
  }

  .personal>.top>.right dd{
    width: 100%;
    text-align: center;
    font-size: 0.266667rem;
  }

  /*详细地址样式*/
  .xx_address{
    width: 100%;
    height: 1.186667rem;
    background: #fff;
    padding: 0 0.266667rem;
    margin-bottom: 0.266667rem;
  }

  .xx_address>p{
    height: 1.186667rem;
    font-size: 0.48rem;
    line-height:1.186667rem;
    position: relative;
  }

  .xx_address>p input{
    width: 7.043367rem;
    height: 84%;
    border:none;
    font-size: 0.266667rem;
    color: #bfbfbf;
  }

  .xx_address>p .mai{
    width: 0.32rem;
    height: 0.453333rem;
    background:url(../../../img/myself/address/address.png);
    background-size: 6.826667rem 6.826667rem; 
    background-position: -1.52rem -0.4rem;
    position: absolute;
    top: 0.4rem;
    left: 9.12rem;
  }
  /*标签*/

  .xx_address>p:nth-child(2){
    border:none;
  }

  /* 详情 */
  .details{
    width: 100%;
    height: 4.1rem;
    padding: 0 0.266667rem;
    background: #fff;
  }

  .details p{
    border-bottom: 1px solid #f2f2f2;
    height: 1.186667rem;
    font-size: 0.48rem;
  }

  .details p input{
    width: 5.386667rem;
    height: 100%;
    border:none;
  }

  .details .text_details{
    width: 100%;
    height: 2.666667rem;
    border:none;
    background: #f2f2f2;
    color: #999;
    font-size: 0.293333rem;
    padding: 0.266667rem;
    resize: none;
    border-radius: 0.093333rem;
  }

	/*新建地址*/

  footer{
    width: 100%;
    height: 1.426667rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }

	.yes{
		width: calc(100% - 0.533333rem);
		height: 1.173333rem;
		background: #f45971;
		color: #fff;
		font-size: 0.4rem;
		border:none;
		border-radius: 0.106667rem;
		position: fixed;
		margin-bottom: 0.266667rem;
		margin-left: 0.266667rem;
	}

  
</style>
