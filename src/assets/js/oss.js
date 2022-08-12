// 导入ali-oss
import OSS from 'ali-oss';
import $ from 'jquery'
/**
 * 配置信息
 */
// const region = "oss-cn-shanghai";  // 换成自己的region
// const accessKeyId = "xxxxx";  // 换成自己的accessKeyId
// const accessKeySecret = "xxxxx";  // 换成自己的accessKeySecret
// const bucket = "xxxxx";  // 换成自己的bucket
import { Message } from 'element-ui';
let client
// $.get('https://commapi.forhoo.cn/forhoo/GetOSSSTS').then((result) => {
//     console.log(result.data);
//       client =  new OSS({
//       region: result.region,
//       accessKeyId: result.data.accessKeyId,
//       accessKeySecret: result.data.accessKeySecret,
//       stsToken: result.data.securityToken,
//       bucket: result.bucketName
//     });
// })
// let client = new OSS({
//   region : region,
//   accessKeyId : accessKeyId,
//   accessKeySecret : accessKeySecret,
//   bucket : bucket
// });

/**
 *
 * @param {上传是设置文件key , 一般为文件名称} objectKey
 * @param {文件file} file
 */

//  上传
const CooOss = function(file){

  if(this instanceof CooOss){
    let objectKey = file.lastModified+'_'+file.name;
    return new Promise((resolve,reject) => {
      client.multipartUpload(objectKey, file).then(result =>  {
        resolve({
          code : 0,
          objectKey : objectKey,
          url : this.getOssFileUrl(objectKey),
          msg : "ok"
        });
      }).catch(err => {
        console.error('上传出错了');
        Message.error('上传出错了');
        reject({code : -1 , url : "", objectKey : "", msg : "上传出错了"});
      });
    })
  }
  else{
    return new CooOss(file);
  }
};

// 下载
const downloadFile = function (key) {
  console.log(key)
  let url = client.signatureUrl(key);
  let Img = new Image(), dataURL = '';
  let fileName = key.substring(key.indexOf('_')+1);
  Img.src = url;
  Img.setAttribute("crossOrigin", 'Anonymous');
  Img.onload = function () {
    let canvas = document.createElement("canvas"),
    width = Img.width,
    height = Img.height;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(Img, 0, 0, width, height);
    dataURL = canvas.toDataURL('image/png' );
    let eleLink = document.createElement('a');
    eleLink.download = fileName;
    eleLink.style.display = 'none';
    eleLink.href = dataURL;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
  };
}
/**
 *
 * @param {上传是设置文件key 一般是文件名} obecjtKey
 */
CooOss.prototype.getOssFileUrl = obecjtKey => {
  if(!obecjtKey) return  new Error("object key 必须传");
  return "https://" + bucket + "." + region + ".aliyuncs.com/" + obecjtKey;
}

export default {
  install(Vue){
    Vue.prototype.Oss = {
      uploadFile : CooOss,
      downloadFile : downloadFile
    };
  }
};

// 调用上传
// upload(file){      // 这个file是文件对象
//     this.Oss.uploadFile(file).then(res => {
//         console.log(res)
//     })
// },

// // 调用下载
// downloadImg(key){   // 这个key是objectKey
//     this.Oss.downloadFile(key)
// }