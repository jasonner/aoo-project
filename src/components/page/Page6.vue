  <template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1 bj1 box">
          <!-- <div class="logo" v-if="nowpage == 1">
            <img class="logo1" src="../../assets/img/logo.png" alt="" />
            <img src="../../assets/img/logo1.png" alt="" />
          </div> -->
          <div class="title-text-box" v-if="nowpage == 1" >
            <!-- <img class="dongdata1" src="@/assets/img/page6/title.png" alt="" /> -->
            <img
              style="width: 75%; margin: 0 auto; margin-top: -6vw"
              src="@/assets/img/page6/title-text.png"
              class="dongdata1"
              alt=""
            />
          </div>
          <div v-if="nowpage == 1">
            <div class="zhuchi-box">
              <img src="@/assets/img/page6/zhuchi.png" alt="" />
            </div>
            <div class="user-list1-box">
              <div class="left animated  fadeInLeft" style="animation-delay: 1s;">
                <img style="margin-top:-3vw;margin-left:15vw;" src="@/assets/img/page6/user1.png" alt="" srcset="" />
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1s;">
                <img style="margin-top:-3vw;margin-left:5vw;" src="@/assets/img/page6/user2.png" alt="" srcset="" />
              </div>
            </div>
          </div>
          <!-- <div class="line-box"  v-if="nowpage == 1"></div> -->
          <div class="user-list2-box"  v-if="nowpage == 1">
            <div class="left animated  fadeInLeft" style="animation-delay: 1.5s;">
              <img style="margin-top:8vw;margin-left:3vw;"   src="@/assets/img/page6/user3.png" alt="" srcset="">
            </div>
            <div class="right animated  fadeInRight" style="animation-delay: 1.5s;">
              <img style="margin-top:15vw;margin-left:5vw;" src="@/assets/img/page6/user3-text.png" alt="" srcset="">
            </div>
          </div>
          <div class="user-list3-box"  v-if="nowpage == 1">
            <div class="left animated  fadeInLeft" style="animation-delay: 2s;">
              <img style="margin-top:9vw;margin-left:6vw;"  src="@/assets/img/page6/user4-text.png" alt="" srcset="">
            </div>
            <div class="right animated  fadeInRight" style="animation-delay: 2s;">
              <img style="margin-top:-7vw;margin-left:6vw;"  src="@/assets/img/page6/user4.png" alt="" srcset="">
            </div>
          </div>  
          <div class="fanhui animated  fadeIn" @click="clickhandle(1)" style="animation-delay:3s;">
            <img src="../../assets/img/fanhui.png" alt="" />
          </div>
        </div>

        <div class="page2"></div>
        <div class="page3 bj3 box" >
          <div v-if="nowpage == 2 || nowpage == 3">
            <div class="logo-box">
              <img src="@/assets/img/page2/logo.png" alt="" srcset="">
            </div>
            <div class="page2tit ">
              <img class="dongdata1" src="@/assets/img/page7/title.png" alt="" />
              <img class="dongdata1"
                style="width: 75%; margin: 0 auto; margin-top: -8vw"
                src="@/assets/img/page7/title-text.png"
                alt=""
              />
            </div>
            <div class="zhuchi-box animated zoomIn">
              <img src="@/assets/img/page6/zhuchi.png" alt="" />
            </div>
            <div class="user-list1-box">
              <div class="left animated  fadeInLeft" style="animation-delay: 1s;">
                <img style="margin-top:0vw;margin-left:13vw;"  src="@/assets/img/page7/user1.png" alt="" srcset="" />
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1s;">
                <img style="margin-top:0vw;margin-left:5vw;"  src="@/assets/img/page7/user2.png" alt="" srcset="" />
              </div>
            </div>
            <div class="user-list2-box">
              <div class="left animated  fadeInLeft" style="animation-delay: 1.5s;">
                <img style="margin-top:0vw;margin-left:3vw;"  src="@/assets/img/page7/user3.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1.5s;">
                <img src="@/assets/img/page7/user3-text.png" alt="" srcset="">
              </div>
            </div>
            <div class="user-list3-box">
              <div class="left animated  fadeInLeft" style="animation-delay: 2s;">
                <img style="margin-top:2vw;margin-left:6vw;"  src="@/assets/img/page7/user4-text.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 2s;">
                <img style="margin-top:-5vw;margin-left:6vw;"  src="@/assets/img/page7/user4.png" alt="" srcset="">
              </div>
            </div>  
          </div>
          <div class="fanhui" @click="clickhandle(2)"  v-if="nowpage == 2 || nowpage == 3">
            <img src="../../assets/img/fanhui.png" alt="" />
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
      if (num === 1) {
        this.$emit("swipeprev", 1,5);
      } else if (num === 2) {
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

.bj1 {
  width: 100%;
  height 100%;
  background: url('../../assets/img/page6/bg.png') no-repeat center;
  background-size: 100% 100%;
}

.bj3 {
  width: 100%;
  height 100%;
  background: url('../../assets/img/page7/bg.png') no-repeat center;
  background-size: 100% 100%;
}
.page1 .title-text-box{
  width: 80%;
  margin: 0 auto;
  margin-top: 40vw;
}
.page1 .zhuchi-box {
  width: 60%;
  margin: 0 auto;
}

.page1 .user-list1-box {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 4vw;
}

.page1 .user-list1-box .left img {
  width: 32vw;
  margin-left: 11vw;
}
.page1 .user-list1-box .right img {
  width: 32.4vw;
  margin-left: 6vw;
}
.page1 .line-box {
  width: 80%;
  border: 0.1px dashed #dbb771;
  opacity 0.5;
  margin: 0 auto;
  margin-top: 4vw;
}
.page1 .user-list2-box{
  width:100%;
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: center;
  margin-top:8vw;
}
.page1 .user-list2-box .left img{
  width:32vw;
  margin-left:1vw
}
.page1 .user-list2-box .right img{
  width:54vw;
  margin-top: 5vw;
}

.page1 .user-list3-box{
  width:100%;
  display: grid;
  grid-template-columns: 60% 40%;
  text-align: center;
  margin-top:8vw;
}
.page1 .user-list3-box .left img{
  width:54vw;
  margin-left:12vw
  margin-top: 12vw;
}
.page1 .user-list3-box .right img{
  width:32vw;
  margin-left:6vw
  margin-top: 4vw
}
.page1.logo-box{
  width: 84%;
  margin: 0 auto; 
}
.page1 .logo-box img{
  margin-top:4.5vw;
}
.page2, .page4 {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/bj.png') no-repeat center;
  background-size: 100% 100%;
}

.page3 .zhuchi-box {
  width: 60%;
  margin: 0 auto;
  margin-top: 0vw;
}

.page3 .user-list1-box {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 4vw;
}

.page3 .user-list1-box .left img {
  width: 32vw;
  margin-left: 11vw;
}
.page3 .user-list1-box .right img {
  width: 32.4vw;
  margin-left: 6vw;
}
.page3 .line-box {
  width: 80%;
  border: 0.1px dashed #dbb771;
  opacity 0.5;
  margin: 0 auto;
  margin-top: 4vw;
}
.page3 .user-list2-box{
  width:100%;
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: center;
  margin-top:4vw;
}
.page3 .user-list2-box .left img{
  width:32vw;
  margin-left:1vw
}
.page3 .user-list2-box .right img{
  width:54vw;
  margin-top: 5vw;
}

.page3 .user-list3-box{
  width:100%;
  display: grid;
  grid-template-columns: 60% 40%;
  text-align: center;
  margin-top:8vw;
}
.page3 .user-list3-box .left img{
  width:54vw;
  margin-left:12vw
  margin-top: 12vw;
}
.page3 .user-list3-box .right img{
  width:32vw;
  margin-left:6vw
  margin-top: 4vw
}
.page3 .logo-box,.page3 .logo-box{
  width: 84%;
  margin: 0 auto; 
}
.logo-box img{
  margin-top:4.5vw;
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
  margin-top: 1vh;
  animation: clip 0.5s linear forwards;
  opacity: 0;
}

.yin1 {
  position: absolute;
  width: 16.27vw;
  left: 2.4vw;
  top: 18.67vw;
  z-index: 2;
  animation: yin1 0.5s linear 1.7s forwards;
  animation-play-state: running;
}

@keyframes yin1 {
  0% {
    top: 18.67vw;
  }

  100% {
    top: 29.33vw;
  }
}

.yin2 {
  position: absolute;
  width: 18.67vw;
  right: 9.87vw;
  top: 80.67vw;
  z-index: 2;
  animation: yin2 0.5s linear 1.7s forwards;
  animation-play-state: running;
}

@keyframes yin2 {
  0% {
    top: 80.67vw;
  }

  100% {
    top: 70.67vw;
  }
}

.yin5 {
  position: absolute;
  width: 15.47vw;
  right: 6.93vw;
  top: 0;
  z-index: 2;
  animation: yin5 1s linear infinite forwards;
  animation-play-state: running;
}

@keyframes yin5 {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.page9cont {
  width: 100%;
  margin: 50.4vw auto 0;
}
</style>

  
  
