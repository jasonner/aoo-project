  <template>
  <div class="box bj1" ref="box">
    <div class="cont" ref="cont">
      <div class="logo">
        
      </div>
      <div class="page2tit">
        <img src="../../assets/img/rctit4.png" alt="" />
      </div>
      <div class="richeng animated zoomIn">
        <img src="../../assets/img/richeng4.png" alt="" />
      </div>
      <div class="fanhui" @click="clickhandle">
        <img src="../../assets/img/fanhui.png" alt="" />
      </div>
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
      this.$emit("swipeprev");
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
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>
  
  <style lang="stylus" scoped>
  .logo {
    position: relative;
    z-index: 1;
  }

  .box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .cont {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
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
    width: 93.33vw;
    margin: 2vw auto;
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
    margin-top: 5.5vh;
    
  }
</style>