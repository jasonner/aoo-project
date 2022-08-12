import MyAlert from './Alert.vue'
// 这里是重点
const Alert = {
  install: function (Vue) {
    Vue.component('Alert', MyAlert)
  }
}

// 导出组件
export default Alert
