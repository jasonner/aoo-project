

import wx from 'weixin-jsapi'
import $ from 'jquery'


export default {
  data: {
    title: '奏响血液移植 新时代协奏曲',
    desc: '2022年AOO血液移植专场 诚邀您的到来',
    imgUrl: 'https://oss.sxyweb.com.cn/2022/q/sanofi0330/icons.jpg',
    link: "https://h5.lehuitech.com.cn/wj/22/05/aoo0512/#/home"
  },
  init: function (data) {
    var self = this;
    $.getJSON('/WXAuthorization/jsapi', {
      url: location.href.split('#')[0]
    }, function (result) {
      console.log(result)
      if (result) {
        var config = {
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.appId, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.nonceStr, // 必填，生成签名的随机串
          signature: result.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        };
        wx.config(config);
        self.share();
      }
    })
  },
  share: function () {
    var self = this;
    wx.ready(function () {
      var config = {
        link: self.data.link,
        imgUrl: self.data.imgUrl,
        title: self.data.title,
        desc: self.data.desc,
        success: function () { },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      };
      wx.onMenuShareAppMessage(config);
      wx.onMenuShareTimeline(config);
      // wx.updateAppMessageShareData(config);
      // wx.updateTimelineShareData(config);
    })
  },

};