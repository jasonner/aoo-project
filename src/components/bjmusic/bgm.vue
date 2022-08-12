<template>
  <div class="bjmusic">
    <audio
      preload="auto"
      loop
      id="audio"
      ref="bg"
      :src="MP3"
      autoplay
      v-if="isiphone == true"
    ></audio>
    <div @click="changeOn" :class="isOff ? 'isOff' : 'isOn'">
      <div class="bgmbtn">
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import "@/common/hoeler-min.js";
import "@/assets/css/svgbtn.css";
export default {
  data() {
    return {
      isiphone: true,
      sound: "",
      MP3: 'https://oss.sxyweb.com.cn/ResourcePool/audio/ETRceTS5.mp3?v=20220516',
      isOff: false,
      zongOff: true,
    };
  },
  methods: {
    changeOn() {
      this.isOff = !this.isOff;
      if (this.isOff) {
        if (this.isiphone) {
          this.$refs.bg.pause();
        } else {
          this.sound.pause();
        }
        // this.$refs.bg.muted=true;
        // this.$refs.bg.pause();
        this.zongOff = false;
      } else {
        if (this.isiphone) {
          this.$refs.bg.play();
        } else {
          this.sound.play();
        }
        // this.$refs.bg.muted=false;
        // this.$refs.bg.play();
        this.zongOff = true;
      }
    },
    audioAutoPlay() {
      console.log("播放");
      this.isOff = false;
      //   this.$refs.bg.play();
      if (this.isiphone) {
        this.$refs.bg.play();
      } else {
        this.sound.play();
      }
      //   document.removeEventListener("touchstart", this.audioAutoPlay);
    },
    audioAutoPause() {
      // this.$refs.bg.pause();
      if (this.isiphone) {
        this.$refs.bg.pause();
      } else {
        this.sound.pause();
      }
    },
    audioAnimationF() {
      if (this.zongOff) {
        this.isOff = false;

        // this.$refs.bg.muted = false;
        console.log("audioAutoPlay");
        // this.$refs.bg.play();
        if (this.isiphone) {
          this.$refs.bg.play();
        } else {
          this.sound.play();
        }
      }
    },
    audioAnimationT() {
      // this.$refs.bg.muted=true;
      console.log("audioAutoPause");
      // this.$refs.bg.pause();
      this.isOff = true;
      if (this.isiphone) {
        this.$refs.bg.pause();
      } else {
        this.sound.pause();
      }
    },
  },
  mounted() {
    var u = navigator.userAgent;
    // console.log(u);
    if (u.indexOf("iPhone") > -1) {
      var ahis = this;
      // this.$refs.bg.muted = false;
      // document.addEventListener("touchstart", this.audioAutoPlay, false);
      // document.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false);
      wx.ready(function () {
        ahis.$refs.bg.play();
        //   ahis.sound.play();
      });

      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          ahis.$refs.bg.play();
          // ahis.sound.play();
        },
        false
      );
    } else {
      this.isiphone = false;
      this.isOff = false;
      this.sound = new Howl({
        src: [this.MP3],
        autoplay: true,
        loop: true,
      });
    }
  },
};
</script>

<style lang="stylus" scoped>
.bjmusic {
  position: fixed;
  right: 2vw;
  bottom: 5vw;
  z-index: 199;
}
</style>