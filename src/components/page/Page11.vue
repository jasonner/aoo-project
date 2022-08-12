  <template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1 bj1 box">
          <div class="logo-box" v-if="nowpage == 1">
            <img src="@/assets/img/page2/logo.png" alt="" srcset="">
          </div>
          <div class="title-box" v-if="nowpage == 1">
            <img class="dongdata1" src="@/assets/img/page8/title.png" alt="" srcset="">
          </div>
          <div class="title-text-box" v-if="nowpage == 1">
            <img class="dongdata1" src="@/assets/img/page8/title-text.png" alt="" srcset="">
          </div> 
          <div class="context-img-box" v-if="nowpage == 1">
            <img class="animated  fadeInLeft" src="@/assets/img/page8/context.png" alt="" srcset="">
          </div>
          <div class="user-list1-box animated  bounceInRight" style="animation-delay: 1s;" v-if="nowpage == 1">
            <img style="margin-top:-8vw;margin-left:2vw;"  src="@/assets/img/page8/user1.png" alt="" srcset="">
          </div>
          <div class="user-list2-box" v-if="nowpage == 1">
            <div class="animated bounceInLeft" style="animation-delay: 1.5s;">
              <img src="@/assets/img/page8/user2.png" alt="" srcset="">
            </div>
            <div class="animated bounceInLeft" style="animation-delay: 1.5s;">
              <img src="@/assets/img/page8/user3.png" alt="" srcset="">
            </div>
            <div class="animated  bounceInRight" style="animation-delay: 1.5s;">
              <img src="@/assets/img/page8/user4.png" alt="" srcset="">
            </div>
          </div>
          <div class="fanhui" @click="clickhandle(1)" v-if="nowpage == 1">
            <img src="../../assets/img/fanhui.png" alt="" />
          </div>
        </div>

        <div class="page2"></div>
        <div class="page3 box box1" >
          <div class="cont" ref="cont">
            <div class="logo-box" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <img src="@/assets/img/page2/logo.png" alt="" srcset="">
            </div>
            <div class="title-box dongdata1" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <img src="@/assets/img/page9/title.png" alt="" srcset="">
            </div>
            <div class="title-text-box dongdata1" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <img src="@/assets/img/page9/title-text.png" alt="" srcset="">
            </div> 
            <div class="zhuchi-box animated zoomIn" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <img src="@/assets/img/page6/zhuchi.png" alt="" />
            </div> 
            <div class="user-list1-box" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <div class="left animated  fadeInLeft" style="animation-delay: 1s;">
                <img style="margin-top: -2vw;margin-left: 15vw;" src="@/assets/img/page9/user1.png" alt="" srcset="" />
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1s;">
                <img style="margin-top: -2vw;margin-left: 6vw;" src="@/assets/img/page9/user2.png" alt="" srcset="" />
              </div>
            </div>
            <div class="line-box" ref="box" v-if="nowpage == 2 || nowpage == 3"></div>
            <div class="user-list3-box" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <div class="left animated  fadeInLeft" style="animation-delay: 1.5s;">
                <img style="margin-top: -2vw;margin-left: 5vw;" src="@/assets/img/page9/user3.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1.5s;">
                <img src="@/assets/img/page9/text1.png" alt="" srcset="">
              </div>
            </div>
            <div class="context-box animated zoomIn" style="animation-delay: 2s;" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <img src="@/assets/img/page9/title1.png" alt="" srcset="">
            </div>
            <div class="user-list2-box" ref="box" v-if="nowpage == 2 || nowpage == 3">
              <div class="animated  fadeInLeft" style="animation-delay: 2.5s;">
                <img src="@/assets/img/page9/user4.png" alt="" srcset="">
              </div>
              <div class="animated  fadeInLeft" style="animation-delay: 2.5s;">
                <img src="@/assets/img/page9/user5.png" alt="" srcset="">
              </div>
              <div class="animated  fadeInRight" style="animation-delay: 2.5s;">
                <img src="@/assets/img/page9/user6.png" alt="" srcset="">
              </div>
            </div>
            <div class="fanhui" @click="clickhandle(2)" v-if="nowpage == 2 || nowpage == 3">
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
  props: ["page", "isclick"],
  name: "E-book",
  data() {
    return {
      num: 0,
      timer: "",
      isdiyi: false,
      isstart: true,
      xianpage: "",
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
      this.xianpage = this.page;
      this.nowpage = this.page;
      // this.next();
    });
  },
  methods: {
    clickhandle(num) {
      console.log(num);
      if (num === 1) {
        this.$emit("swipeprev", 3);
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
        // this.changetop();
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
      this.xianpage = $(".flipbook").turn("page");
      return $(".flipbook").turn("page");
    },
    next() {
      if (this.num == 2) {
        return;
      }
      this.num++;
      $(".flipbook").turn("next");
      // this.getpage();
      this.xianpage++;
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
  position: relative;
}
.page1 .logo-box,.page3 .logo-box{
  width: 84%;
  margin: 0 auto; 
}
.page1 .logo-box img,.page3 .logo-box img{
  margin-top:4.5vw;
}
.title-box{
  width: 100%;
  margin-top: 1vw;
}
.title-text-box{
  width: 80%;
  margin: 0 auto;
  margin-top: -6vw;
}
.user-list1-box{
  width: 32%;
  margin: 0 auto;
  margin-top:15vw;
}

.page3 .user-list1-box{
  width 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top:4vw;

}
.page3 .user-list1-box img{
  width:30vw;
}
.page3 .user-list1-box .left img{
  margin-left: 12vw;
}
.page3 .user-list1-box .right img{
  margin-left: 6vw;
}
.context-img-box{
  width: 80%;
  margin: 0 auto;
  margin-top: 1vw;
}

.zhuchi-box {
  width: 60%;
  margin: 0 auto;
  margin-top: 0vw;
}

.user-list2-box{
  width:100%;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  margin-top:15vw;
  padding: 0 1vw;
  box-sizing: border-box;
}
.page3 .user-list2-box{
  margin-top: 8vw;
}
.user-list2-box img{
  width: 30vw;
  margin: 0 auto;
}
.user-list3-box{
  width:100%;
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: center;
  margin-top:8vw;
}
.user-list3-box .left img{
  width:30vw;
  margin-left:2vw
  margin-top: 0vw;
}
.user-list3-box .right img{
  width:54vw;
  margin-top: 4vw
}
.page3 .context-box{
  margin-top: 7vw;
}
.cont {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  // 改回去记得注释
  background: url('../../assets/img/page9/bg.png') no-repeat center;
  background-size: cover;
}

.logo {
  position: relative;
  z-index: 1;
}

.bj1 {
  background: url('../../assets/img/page8/bg.png') no-repeat top;
  background-size: cover;
  z-index: 9999;
  position: relative;
}

.page2, .page4 {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/bj.png') no-repeat center;
  background-size: 100% 100%;
}

.richeng {
  width: 93.33vw;
  height: 68vh;
  margin: 2vw auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
  animation: clip 0.5s linear 0.5s forwards;
  opacity: 0;
}

.page12tit {
  margin-top: 5.5vh;
}

.flipbook-viewport {
  position: relative;
  left: -100%;
}

.bu {
  top: 31.47vw;
}

.pagetitle {
  top: 42.67vw;
  width: 73.87vw;
}

.xin {
  width: 32.27vw;
  top: 3.73vw;
}

.yin4 {
  width: 13.07vw;
}

.page10title {
  width: 65.87vw;
  margin: 47.47vw auto;
}
</style>

  
  
