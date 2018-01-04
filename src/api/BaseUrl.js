 
 import md5 from 'js-md5';
 import {Base64} from 'js-base64';
 //实际服务器
 export const BaseUrl='http://api.bleale.com/api.php/api/v1.';
 //测试服务器
 //export const BaseUrl='http://localhost/xsyg/public/api.php/api/v1.';
//公共参数
 export function creatParams(data,token){
   	let request_time=new Date().getTime();
   	//sign后期修改
   	
   	let sign=md5.hex('request_time='+String(request_time));
  
   	let token1=token==undefined?"":token;
   	let data1=Base64.encode(data);
 	
	return `?data=${data1}=&request_time=${request_time}&sign=${sign}&token=${token1}`
	
}
 //获取版本号
// export function getVersion() {
//const url = 'http://api.bleale.com/api.php/api/v1.plat_version'
//
//
//return axios.get(url, {
//  params: commonParams
//}).then((res) => {
//  return Promise.resolve(res.data)
//})
//}
 
