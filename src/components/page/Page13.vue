  <template>
  <div class="box bj1" ref="box">
      <div class="logo-box">
        <img src="@/assets/img/page2/logo.png" alt="" srcset="">
      </div>
      <div class="slogan-box animated zoomIn">
        <img src="@/assets/img/page10/slogan.png" alt="" srcset="">
      </div>
      <div class="time-box animated zoomIn">
        <img src="@/assets/img/page10/time.png" alt="" srcset="">
      </div>
      <div class="bottom-box">
        <img src="@/assets/img/page10/logo-bottom.png" alt="" srcset="">
      </div>
      <div class="fanhui" @click="clickhandle">
        <img src="../../assets/img/fanhui.png" alt="" />
      </div>
  </div>
</template>
  
  <script>
export default {
  props: ["isclick"],
  data() {
    return {
      tableData: [],
      timer: "",
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   var jishi=setTimeout(()=>{
    //     clearTimeout(jishi)
    //     this.changetop();
    //   },1200)
    // });
  },

  methods: {
    clickhandle() {
      this.$emit("swipeprev", 3);
    },
    changetop() {
      if (this.isclick) return;

      var parent = this.$refs.box;
      var child1 = this.$refs.cont;
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        if (this.$refs.box.clientHeight >= this.$refs.cont.scrollHeight) {
          this.$refs.box.scrollTop = 0;
          return;
        } else {
          this.$refs.box.scrollTop++;
        }
        if (
          this.$refs.box.scrollTop >=
          this.$refs.cont.scrollHeight - this.$refs.box.clientHeight
        )
          return;
        // console.log(parent.scrollTop , child1.scrollHeight-parent.clientHeight)
        this.changetop();
      }, 20);
    },
  },
};
</script>
  
  <style lang="stylus" scoped>
  .logo {
    position: relative;
    z-index: 1;
  }
  .logo-box,.page3 .logo-box{
    width: 84%;
    margin: 0 auto; 
  }
  .logo-box img,.page3 .logo-box img{
    margin-top:4.5vw;
  }
  .slogan-box{
    width: 66%;
    margin: 0 auto;
    margin-top: 49.5vw;
  }
  .time-box{
    width: 64%;
    margin: 0 auto;
    margin-top: 8vw;
  }
  .bottom-box{
    width: 27%;
    position: absolute;
    left: 7vw;
    bottom:16vw;
  }
  .box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .cont {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .richeng {
    margin-top: -7.8vh;
  }

  .tit {
    width: 85.2vw;
    margin: 7.8vh auto 6.62vh;
  }

  .title {
    width: 91.2vw;
    margin: 0 auto;
  }
  .richeng {
    width 93.33vw
    margin 2vw auto
}

@keyframes clip {
  0% {
    opacity: 0;
    clip-path: polygon(0 0, 35% 0, 0 68%, 0 67%);
  }

  10% {
    opacity: 1;
    clip-path: polygon(0 0, 35% 0, 0 99%, 0% 100%);
  }

  30% {
    opacity: 1;
    clip-path: polygon(0 0, 75% 0, 34% 100%, 0 100%);
  }

  50% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 51% 100%, 0 100%);
  }

  70% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 74% 100%, 0 100%);
  }

  100% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.page2tit {
  width 100%
  margin-top: 5.5vh;
}

.bj1{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    // 改回去记得注释
    background: url('../../assets/img/page10/bg.png') no-repeat center;
    background-size: cover;
}
</style>