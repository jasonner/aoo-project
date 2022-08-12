import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Alert from './components/alert'
require('./components/wxFont.js')
Vue.use(Alert)
// import Oss from './assets/js/oss'
// Vue.use(Oss)
import auth from './components/auth';
import { post, fetch, patch, put, setCookie, getCookie, removeCookie } from './network/http.js'

//定义全局变量

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.prototype.$setCookie = setCookie;
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$removeCookie = removeCookie
Vue.config.productionTip = false;


// if (!auth.isAuthed()) {
//   location.href = 'https://h5.lehuitech.com.cn/qr/qrred?k=7D73Z18V';
// }else{

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
// }




