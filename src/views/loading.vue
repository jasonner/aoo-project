<template>
  <div id="content1">
    <div class="page-container" style="text-align: center">
      <div id="loading-panel">
        <h1><strong>Loading...</strong></h1>
        <h2 class="h2img">
          <strong>{{ percent }}</strong>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      percent: "0%",
      length: 0,
    };
  },
  mounted: function () {
    this.preload();


  },
  methods: {
    preload() {
      let imgs = [
        require("../assets/img/bj.png"),
        require("../assets/img/bj1.png"),
        require("../assets/img/bj10.jpg"),
        require("../assets/img/bj7.png"),
        require("../assets/img/date.png"),
        require("../assets/img/dibj.png"),
        require("../assets/img/fanhui.png"),
        require("../assets/img/logo.png"),
        require("../assets/img/logo1.png"),
        require("../assets/img/page10-title.png"),
        require("../assets/img/page11-tit.png"),
        require("../assets/img/page11-title.png"),
        require("../assets/img/page11-xin.png"),
        require("../assets/img/page2-tit.png"),
        require("../assets/img/page2-title.png"),
        require("../assets/img/page2-xin.png"),
        require("../assets/img/page3cont.png"),
        require("../assets/img/page3tit.png"),
        require("../assets/img/page3tit2.png"),
        require("../assets/img/page3tit1.png"),
        require("../assets/img/page4cont.png"),
        require("../assets/img/page4tit.png"),
        require("../assets/img/page5cont.png"),
        require("../assets/img/page5tit1.png"),
        require("../assets/img/page5tit2.png"),
        require("../assets/img/page6-tit.png"),
        require("../assets/img/page6-xin.png"),
        require("../assets/img/page7cont.png"),
        require("../assets/img/page8-tit.png"),
        require("../assets/img/page8-title.png"),
        require("../assets/img/page8-xin.png"),
        require("../assets/img/page9cont.png"),
        require("../assets/img/page9cont.png"),
        require("../assets/img/pan-bu.png"),
        require("../assets/img/pan-gun.png"),
        require("../assets/img/pan-yin1.png"),
        require("../assets/img/pan-yin2.png"),
        require("../assets/img/pan-yin3.png"),
        require("../assets/img/pan-yin4.png"),
        require("../assets/img/pan-yin5.png"),
        require("../assets/img/pan.png"),
        require("../assets/img/pan11-bu.png"),
        require("../assets/img/pan11.png"),
        require("../assets/img/pan6-yin1.png"),
        require("../assets/img/pan6-yin2.png"),
        require("../assets/img/pan6-yin4.png"),
        require("../assets/img/pan8-yin1.png"),
        require("../assets/img/pan8-yin2.png"),
        require("../assets/img/rcbj.png"),
        require("../assets/img/rctit1.png"),
        require("../assets/img/rctit2.png"),
        require("../assets/img/rctit3.png"),
        require("../assets/img/rctit4.png"),
        require("../assets/img/richeng1.png"),
        require("../assets/img/richeng2.png"),
        require("../assets/img/richeng3.png"),
        require("../assets/img/richeng4.png"),
        require("../assets/img/tit.png"),
        require("../assets/img/title.png"),
      ];
      this.length = imgs.length;
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor((this.count / imgs.length) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },

  watch: {
    count: function (val) {
      if (val === this.length) {
        // 图片加载完成后跳转页面
        this.$router.replace({ path: "/home" });
      }
    },
  },
};
</script>
<style scoped>
#content1 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: #530612;
  position: relative;
}
.page-container {
  height: 100%;
  font-size: 3em;
  color: #fcb170;
}
#loading-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fcb170;
}
h2 {
  height: 2rem;
  width: 2rem;
  margin: 0 auto;
  color: #fcb170;
  /* background: url(../assets/img/yuan.png) no-repeat center ;
  background-size: 90%; */
  line-height: 2rem;
}
</style>