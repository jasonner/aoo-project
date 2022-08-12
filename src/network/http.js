import axios from 'axios';
import qs from 'qs';

// axios.defaults.timeout = 5000;
axios.default.baseUrl ='https://wxcore.forhoo.com.cn'

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    if(config.url.indexOf('?')>-1){
      config.url=config.url+`&n=${encodeURIComponent(Math.random())}`
    }
    else{
      config.url=config.url+`?n=${encodeURIComponent(Math.random())}`
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      // Toast('服务器出了点小差')
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}





export function setCookie(name,value,a){
	let date = new Date() //获取时间
    date.setTime(date.getTime() + (10*60000));
    let expires = "expires="+date.toUTCString();
	if(a){
		document.cookie = `${name} = ${value};expires=${expires}`
	}else{
		document.cookie = `${name} = ${value}`
	}
}

export function getCookie(name){
    //获取到所有的cookie,会以字符串形式展现出来
    let cookies = document.cookie
    //把cookie用split把字符串拆分为数组
    let cookieArr = cookies.split(";")
    //遍历数组，通过判断属性名是否与传入的属性名一致，要是一致就把属性值return出来.这时cookie数组里面为["age=18","sex=nan"]的形式
    for(let i=0;i<cookieArr.length;i++){
        //把数组属性名和属性值通过split拆分成["age","18"]的形式
        let cookie = cookieArr[i].split("=")
        if(name === cookie[0].trim()){
            return cookie[1]
        }
    }
}

export function removeCookie(name){
    var d = new Date();
    d.setTime(d.getTime() + (-1*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "= ''"+ "; " + expires;
}
