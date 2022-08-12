<template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1">
          <img :src="page1" alt="page1" />
        </div>
        <div class="page2"></div>
        <div class="page3">
          <img :src="page2" alt="page1" />
        </div>
        <div class="page4"></div>
        <div class="page5">
          <img :src="page3" alt="page1" />
        </div>
      </div>
    </div>
    <!-- <div class="fanhui" v-show="isdiyi" @click="prev">返回</div> -->
  </div>
</template>
<script>
import $ from "jquery";
import turn from "../assets/js/turnjs4/lib/turn";
export default {
  name: "E-book",
  data() {
    return {
      page1: require("../assets/img/01.jpg"),
      page2: require("../assets/img/02.jpg"),
      page3: require("../assets/img/03.jpg"),
      num: 0,
      timer: "",
      isdiyi: false,
      isstart: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Create the flipbook
      var w = $(window).width() * 0.9;
      var h = w * (1334 / 690);
    
      $(".flipbook").turn({
        width: w * 2,
        height: h,
        elevation: 50,
        gradients: true,
        autoCenter: false,
        duration: 2000,
        pages: 5,
        acceleration: true,
        disabled:true
      });
      this.start();
      this.turning();
      this.end();
      // this.next();
    });
  },
  methods: {
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
      });
    },
    start() {
      var self = this;
      $(".flipbook").bind("start", function (event, pageobject, corner) {
        if (corner == "br" || corner == "tr") {
          console.log(event, pageobject, corner);
          // event.preventDefault();
          // event.preventDefault();
          console.log(self.isstart)
          // if(!self.isstart) return
          // if (self.isstart) {
          //   self.isstart = false;
          //   $(".flipbook").turn("next");
          // }
        }
      });
    },
    getpage() {
      console.log($(".flipbook").turn("page"));

      if ($(".flipbook").turn("page") != 1) {
        this.isdiyi = true;
      } else {
        this.isdiyi = false;
      }
    },
    next() {
      if (this.num == 2) {
        return;
      }
      this.timer = setTimeout(() => {
        this.num++;
        clearTimeout(this.timer);
        $(".flipbook").turn("next");
        this.next();
        console.log(1);
        // this.getpage();
      }, 4000);
    },
    prev() {
      // this.num--;
      console.log(this.num);
      $(".flipbook").turn("previous");
      // this.getpage();
    },
  },
  components: {},
};
</script>

<style scoped lang="stylus">
img {
  width: 90vw;
  height: 100%;
}

.page2, .page4 {
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/bj.png') no-repeat center;
  background-size: 100% 100%;
}

.flipbook-viewport {
  top: 5vh;
  position: relative;
  left: -85%;
}

.fanhui {
  height: 10vw;
  width: 4vw;
  position: absolute;
  left: 90%;
  bottom: 2vh;
  background: #fff;
  text-align: center;
  color: red;
  font-size: 1.4em;
  z-index: 9999;
}
</style>
