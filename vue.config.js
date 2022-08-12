const path = require('path')
const webpack = require("webpack");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://forhoo.oss-cn-beijing.aliyuncs.com/2022/wj/aooProject0512/' : './',
  // publicPath:'./',
  // //输出文件目录
  outputDir: 'dist',
  // //是否在保存的时候检查
  lintOnSave: true,
  // //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "windows.jQuery":"jquery"
      })
  ]

  },
  devServer: {
    proxy: {
    // 文斌哥
    // '/api': {     //这里最好有一个 /
    //   target: 'https://h5.lehuitech.com/',  // 后台接口域名
    //   secure: true,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true,  //是否跨域
    //   pathRewrite: {
    //     '^/api': ''
    //   }
    // },
    // '/huayi': {     //这里最好有一个 /
    //   target: 'http://api.lehuitech.com/',  // 后台接口域名
    //   secure: true,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true,  //是否跨域
    //   pathRewrite: {
    //     '^/huayi': '/huayi'
    //   }
    // },
    // 禹哥
    '/WXAuthorization': {     //这里最好有一个 /
      target: 'https://api.lehuitech.com.cn/',  // 后台接口域名
      secure: true,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/WXAuthorization': '/WXAuthorization'
      }
    },
    '/lehuitech': {     //这里最好有一个 /
      target: 'https://api.lehuitech.com.cn/',  // 后台接口域名
      secure: true,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/lehuitech': '/lehuitech'
      }
    },

    // '/22api/q': {     //这里最好有一个 /
    //   target: 'https://api.lehuitech.com.cn/',  // 后台接口域名
    //   secure: true,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true,  //是否跨域
    //   pathRewrite: {
    //     '^/22api/q': '/22api/q'
    //   }
    // },
    // 北京斌哥
    // '/forhoo': {     //这里最好有一个 /
    //   target: 'https://apicore.forhoo.cn/',  // 后台接口域名
    //   secure: true,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true,  //是否跨域
    //   pathRewrite: {
    //     '^/forhoo': '/forhoo'
    //   }
    // },
    // '/home': {     //这里最好有一个 /
    //   target: 'https://apicore.forhoo.cn/',  // 后台接口域名
    //   secure: true,  // 如果是https接口，需要配置这个参数
    //   changeOrigin: true,  //是否跨域
    //   pathRewrite: {
    //     '^/home': '/home'
    //   }
    // },
    // "/api": {
    //   target: "https://commapi.forhoo.cn/forhoo/", //目标地址
    //   ws: true,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     "^/api": ''
    //   }
    // },
    }
  }
}
/*
  router 和 store 很少用到，所以不设置别名
  在vue里面 this.$router/this.$store 就可以获取到他们
*/
