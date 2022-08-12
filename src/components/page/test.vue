  <template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1 bj1 box">
          <div class="logo">
            <img class="logo1" src="../../assets/img/logo.png" alt="" />
            <img src="../../assets/img/logo1.png" alt="" />
          </div>
          <div class="fanhui" @click="clickhandle(1)">
            <img src="../../assets/img/fanhui.png" alt="" />
          </div>
        </div>
        <div class="page2"></div>
        <div class="page3 box1 box" ref="box">
          <div class="cont" ref="cont">
            <div class="logo">
              <img class="logo1" src="../../assets/img/logo.png" alt="" />
              <img src="../../assets/img/logo1.png" alt="" />
            </div>
            <img class="richeng" src="../../assets/img/bj13.png" alt="" />
            <div class="fanhui" @click="clickhandle(2)">
              <img src="../../assets/img/fanhui.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="fanhui" v-show="isdiyi" @click="prev">返回</div> -->
  </div>
</template>
<script>
import $ from "jquery";
import turn from "../../assets/js/turnjs4/lib/turn";
export default {
  name: "E-book",
  props: ["isclick", "page"],
  data() {
    return {
      page1: require("../../assets/img/01.jpg"),
      page2: require("../../assets/img/02.jpg"),
      page3: require("../../assets/img/03.jpg"),
      num: 0,
      timer: "",
      isdiyi: false,
      isstart: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Create the flipbook
      var w = $(window).width();
      var h = $(window).height();
      var that = this;
      $(".flipbook").turn({
        width: w * 2,
        height: h,
        elevation: 50,
        gradients: true,
        autoCenter: false,
        duration: 1000,
        acceleration: true,
        disabled: true,
        page: that.page,
      });
      this.start();
      this.turning();
      this.end();
      // this.next();
    });
  },
  methods: {
    clickhandle(num) {
      console.log(num);
      if (num === 1) {
        this.$emit("swipeprev");
      } else if (num === 2) {
        this.prev();
        this.$emit("changejinzhi");
      }
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
        ) {
          this.$emit("swipenext");
          return;
        }
        this.changetop();
      }, 20);
    },
    turning() {
      var self = this;
      // $(".flipbook").bind("turned", (event, page, view) => {
      $(".flipbook").bind("turning", function (event, page, view) {
        // alert("page"+page)
        console.log(page, "page");
        if (page != 1) {
          self.isdiyi = true;
        } else {
          self.isdiyi = false;
        }
      });
    },
    end() {
      var self = this;
      $(".flipbook").bind("turned", (event, page, view) => {
        // alert("page"+page)
        self.isstart = true;
        console.log("完成了");

        this.changetop();
      });
    },
    start() {
      var self = this;
      $(".flipbook").bind("start", function (event, pageobject, corner) {
        if (corner == "br" || corner == "tr") {
          console.log(event, pageobject, corner);
          // event.preventDefault();
          event.preventDefault();
          console.log(self.isstart);
          // if(!self.isstart) return
          // if (self.isstart) {
          //   self.isstart = false;
          //   $(".flipbook").turn("next");
          // }
          // self.next();
        }
      });
    },
    getpage() {
      return $(".flipbook").turn("page");
    },
    next() {
      if (this.num == 2) {
        return;
      }
      this.num++;
      $(".flipbook").turn("next");
      // this.getpage();
      this.$emit("changeisfan", "next");
    },
    prev() {
      // this.num--;
      console.log(this.num);
      $(".flipbook").turn("previous");
      this.$emit("changeisfan", "prev");
      // this.getpage();
    },
  },
  components: {},
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped lang="stylus">
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.cont {
  position: relative;
}

.box1 {
  overflow: auto;
}

.logo {
  position: relative;
  z-index: 1;
}

.richeng {
  margin-top: -7.8vh;
}

.bj1 {
  background: url('../../assets/img/bj11.png') no-repeat top;
  background-size: cover;
}

.bj3 {
  background: url('../../assets/img/bj12.png') no-repeat top;
  background-size: cover;
}

.page2, .page4 {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/bj.png') no-repeat center;
  background-size: 100% 100%;
}

.flipbook-viewport {
  position: relative;
  left: -100%;
}
</style>

  
  
