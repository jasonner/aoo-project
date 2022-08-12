  <template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1 bj1">
          <div v-if="nowpage == 1 ">
            <div class="title-text-box animated dongdata1">
              <img src="@/assets/img/page3/title-text.png" alt="" srcset="">
            </div>
            <div class="guandian animated zoomIn"  style="animation-delay: 1s;" >
              <img src="@/assets/img/page4/title1.png" alt="" srcset="">
            </div>
            <div class="user-list1 animated  fadeInLeft"  style="animation-delay: 1.5s;" >
              <img  src="@/assets/img/page4/user1.png" alt="" srcset="">
            </div>
            <div class="user-list2" >
                <div class="animated  fadeInLeft left" style="animation-delay: 1.5s;">
                  <img  src="@/assets/img/page4/user2.png" alt="" srcset="">
                </div>
                <div class="animated  fadeInRight right" style="animation-delay: 1.5s;">
                  <img  src="@/assets/img/page4/user3.png" alt="" srcset="">
                </div>
            </div>
            <div class="guandian guandian2 animated zoomIn" style="animation-delay:2s;" >
              <img src="@/assets/img/page4/title2.png" alt="" srcset="">
            </div>
            <div class="user-list3 animated  fadeInRight" style="animation-delay:2.5s;" >
              <img style="margin-left:38vw" src="@/assets/img/page4/user4.png" alt="" srcset="">
            </div>
            <div class="user-list4" >
              <div class="animated  fadeInLeft left" style="animation-delay:2.5s;">
                <img  style="margin-left:17vw;margin-top: 6vw;" src="@/assets/img/page4/user5.png" alt="" srcset="">
              </div>
              <div class="animated  fadeInRight right" style="animation-delay:2.5s;">
                <img style="margin-left:7vw;margin-top: 6vw;" src="@/assets/img/page4/user6.png" alt="" srcset="">
              </div>
            </div>   
            <div class="fanhui animated  fadeIn" @click="clickhandle(3)"  style="animation-delay:3s;">
              <img src="../../assets/img/fanhui.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import turn from "../../assets/js/turnjs4/lib/turn";
export default {
  name: "E-book",
  props: ["page"],
  data() {
    return {
      num: 0,
      timer: "",
      isdiyi: false,
      isstart: true,
      nowpage: 1,
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
        duration: 3000,
        acceleration: true,
        disabled: true,
        page: that.page,
      });
      this.start();
      this.turning();
      this.end();
      this.nowpage=this.page
      // this.next();
    });
  },
  methods: {
    clickhandle(num) {
      console.log(num);
      if (num === 3) {
        this.$emit("swipeprev", 4,5);
      } else {
        this.prev();
        this.$emit("changejinzhi");
      }
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
        this.nowpage = $(".flipbook").turn("page");
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
};
</script>

<style scoped lang="stylus">
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.logo-box,.page3 .logo-box{
  width: 84%;
  margin: 0 auto; 
}
.logo-box img{
  margin-top:4.5vw;
}
.page1{
  width:100vw;
  height: 100%;
}
.bj3 {
  background-color: transparent;
  background-size: cover;
}
.page1 .logo-box{
  width: 84%;
  margin: 0 auto; 
}
.page1 .logo-box img{
  margin-top:4.5vw;
}
.page1 .title-box{
  width: 100%;
  margin-top: 1vw;
}
.page1 .title-text-box{
  width: 80%;
  margin: 0 auto;
  margin-top: 33vw;
}
.page1 .guandian{
  width: 80%;
  margin: 0 auto;
  margin-top: 4vw;
}
.page1  .guandian2{
  margin-top:63vw;
}
.page1 .user-list1{
  width:100%;
}
.page1 .user-list1 img{
  width: 65.7vw;
  margin: 0 auto;
  position: absolute;
  top: -26vw;
  left: 28vw;
}
.page1  .user-list2 .left img{
  width: 60vw;
  margin: 0 auto;
  position: absolute;
  top: 2vw;
  left: 9vw;
}
.page1  .user-list2 .right img{
  width: 50vw;
  position: absolute;
  top: 0vw;
  right: -1vw;
}
.page1 .user-list3{
  width: 60vw;
  margin: 0 auto;
  position: absolute;
  bottom: 34vw;
  left: -9vw;
}

.page1 .user-list4 .left img{
  width: 62vw;
  position: absolute;
  top:-4vw;
  left: -12vw;
}
.page1 .user-list4 .right img{
  width: 56vw;
  position: absolute;
  top:-11vw;
  right: -6vw;
}

.bj1 {
  background-color: transparent;
  background-size: cover;
}

.flipbook-viewport {
  position: relative;
  left: -100%;
}
.dongdata1 {
  animation: clip 1s linear 0.5s forwards;
  opacity: 0;
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
  animation: clip 0.5s linear forwards;
  opacity: 0;
}

.yin1 {
  width: 16.8vw;
  left: 0;
}

.yin2 {
  position: absolute;
  width: 18.67vw;
  right: 2.67vw;
  top: 55.67vw;
  z-index: 2;
  animation: yin2 0.5s linear 1.7s forwards;
  animation-play-state: running;
}

@keyframes yin2 {
  0% {
    top: 55.67vw;
  }

  100% {
    top: 49.33vw;
  }
}

.yin4 {
  width: 14.93vw;
}

.pagetitle {
  width: 77.33vw;
}
.page7cont{
  width 100%
  margin 50.4vw auto 0
}
</style>

  
  
