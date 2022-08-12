  <template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="page1 bj1 box">
          <div class="logo-right" v-if="nowpage ==1">
            <img src="@/assets/img/index/logo-w.png" alt="" srcset="">
          </div>
          <div class="user-box" v-if="nowpage ==1">
            <img src="@/assets/img/index/user.png" alt="" srcset="">
          </div>
          <div class="slogan-box animated fadeInLeft" v-if="nowpage ==1">
            <img src="@/assets/img/index/slogan.png" alt="" srcset="">
          </div>
          <div class="time-title-box dongdata" v-if="nowpage ==1">
            <img src="@/assets/img/index/time-title.png" alt="" srcset="">
          </div>
        </div>
        <div class="page2"></div>
        <div class="page3 bj2 box">
          <div class="logo-box" v-if="nowpage == 2 || nowpage == 3 ">
            <img src="@/assets/img/page2/logo.png" alt="" srcset="">
          </div>
          <div class="slogan-box dongdata1" v-if="nowpage == 2 || nowpage == 3 ">
            <img src="@/assets/img/page2/slogan.png" alt="" srcset="">
          </div>
          <div class="user-box user-list1" v-if="nowpage == 2 || nowpage == 3 ">
              <div class="user-list1-left animated  fadeInLeft"  style="animation-delay: 1s;">
                <img src="@/assets/img/page2/user1.png" alt="" srcset="">
              </div>
              <div class="user-list1-right animated  fadeInRight"  style="animation-delay: 1s;">
                <img src="@/assets/img/page2/user1-text.png" alt="" srcset="">
              </div>
          </div>
          <div class="user-box user-list2" v-if="nowpage == 2 || nowpage == 3 ">
              <div class="user-list2-left animated  fadeInLeft " style="animation-delay: 1.5s;">
                <img src="@/assets/img/page2/user2-text.png" alt="" srcset="">
              </div>
              <div class="user-list2-right  animated  fadeInRight" style="animation-delay: 1.5s;">
                <img src="@/assets/img/page2/user2.png" alt="" srcset="">
              </div>
          </div>
          <div class="user-box user-list1 user-list3"  v-if="nowpage == 2 || nowpage == 3 ">
              <div class="user-list1-left animated  fadeInLeft" style="animation-delay: 2s;">
                <img src="@/assets/img/page2/user3.png" alt="" srcset="">
              </div>
              <div class="user-list1-right  animated  fadeInRight" style="animation-delay: 2s;">
                <img src="@/assets/img/page2/user3-text.png" alt="" srcset="">
              </div>
          </div>
          <div class="fanhui" @click="clickhandle(1)" v-if="nowpage == 2 || nowpage == 3 ">
            <img src="../../assets/img/fanhui.png" alt="" />
          </div>
        </div>
        <div class="page4"></div>
        <div class="page5">
          <!-- <div class="logo-box" v-if="nowpage == 4 || nowpage == 5">
            <img src="@/assets/img/page2/logo.png" alt="" srcset="">
          </div> -->
          <div class="page3cont" v-if="nowpage == 4 || nowpage == 5">
            <div class="title-box dongdata1">
              <img src="@/assets/img/page3/title.png" alt="" srcset="">
            </div>
            <div class="title-text-box dongdata1" v-if="nowpage == 4 || nowpage == 5">
              <img src="@/assets/img/page3/title-text.png" alt="" srcset="">
            </div>
            <div class="zhangjiechuchi animated zoomIn">
              <img src="@/assets/img/page3/zhuchi.png" alt="" srcset="">
            </div>
            <div class="user-list1-box" v-if="nowpage == 4 || nowpage == 5">
              <div class="animated  fadeInLeft" style="animation-delay: 0.5s;">
                <img style="margin-left:15vw" src="@/assets/img/page3/user1.png" alt="" srcset="">
              </div>
              <div class="animated  fadeInRight" style="animation-delay: 0.5s;">
                <img style="margin-right:12vw" src="@/assets/img/page3/user2.png" alt="" srcset="">
              </div>
            </div> 
            <div class="line-box animated  fadeInLeft" style="animation-delay: 1s;"  v-if="nowpage == 4 || nowpage == 5"></div>
            <div class="user-list2-box" v-if="nowpage == 4 || nowpage == 5">
              <div class="left animated  fadeInLeft" style="animation-delay: 1s;">
                <img  src="@/assets/img/page3/user3.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1s;">
                <img src="@/assets/img/page3/user3-text.png" alt="" srcset="">
              </div>
            </div> 
            <div class="user-list3-box" v-if="nowpage == 4 || nowpage == 5">
              <div class="left animated  fadeInLeft" style="animation-delay: 1.5s;">
                <img  src="@/assets/img/page3/user4-text.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 1.5s;">
                <img src="@/assets/img/page3/user4.png" alt="" srcset="">
              </div>
            </div> 
            <div class="user-list2-box" style="margin-top:1vw" v-if="nowpage == 4 || nowpage == 5">
              <div class="left animated  fadeInLeft" style="animation-delay: 2s;">
                <img style="margin-top:-9vw" src="@/assets/img/page3/user5.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 2s;">
                <img style="margin-top:6vw"  src="@/assets/img/page3/user5-text.png" alt="" srcset="">
              </div>
            </div>
            <div class="user-list3-box" v-if="nowpage == 4 || nowpage == 5">
              <div class="left animated  fadeInLeft" style="animation-delay: 2.5s;">
                <img style="margin-top:3vw;" src="@/assets/img/page3/user6-text.png" alt="" srcset="">
              </div>
              <div class="right animated  fadeInRight" style="animation-delay: 2.5s;">
                <img style="margin-left:6vw;" src="@/assets/img/page3/user6.png" alt="" srcset="">
              </div>
            </div> 
          </div>
          <div class="fanhui" @click="clickhandle(1)" v-if="nowpage == 4 || nowpage == 5">
            <img src="../../assets/img/fanhui.png" alt="" />
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
  props: ["page"],
  data() {
    return {

      num: 0,
      timer: "",
      isdiyi: false,
      isstart: true,
      startX: null,
      fangxiang: "",
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
      console.log(this.nowpage);
      // this.next();
    });
  },
  methods: {
    clickhandle(num) {
      console.log(num+'aaaa');
      if (num === 1) {
        this.prev();
        this.$emit("changejinzhi");
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
          // console.log(event, pageobject, corner);
          event.preventDefault();
          // event.preventDefault();
          // console.log(self.isstart);
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
      $(".flipbook").turn("next");
      // this.getpage();
      var bool = this.getpage() == 5 || this.getpage() == 4 ? true : false;
      this.$emit("changeisfan", bool);
      // this.nowpage=''
    },

    prev() {
      // this.num--;
      console.log(this.num);
      $(".flipbook").turn("previous");
      this.$emit("changeisfan", "prev");
      // this.nowpage=''
      // this.getpage();
    },
  },
  components: {},
};
</script>

<style scoped lang="stylus">
@import '../../assets/css/animate.css';

.page1 .logo-right{
  width: 100%;
  position: absolute;
  left:0;
  top:0;
}
.page1 .logo-right img{
  width: 20.8%;
  float: right 
  margin-right: 8vw;
  margin-top: 4vw;
}
.page1 .slogan-box{
  width: 93.87%;
  margin: 0 auto;
  margin-top:-20vw;
}

.page3 .logo-box ,.page5 .logo-box{
  width: 84%;
  margin: 0 auto;
}
.page3 .logo-box img,.page5 .logo-box img{
  margin-top:4.5vw;
}

.page3 .slogan-box{
  width:100%;
  margin-top:8vw;
}
.page3 .user-box{
  width: 100%;
  margin-top: 0vw;
  display: grid;
  grid-template-columns: 40% 60%;
}
.page3 .user-box .user-list1-left{
  margin-left: 3vw;
}
.page3 .user-box .user-list1-left img{
 width:35vw;
}

.page3 .user-box .user-list1-right img{
  width:56vw;
  margin-top: 7vw;
}
.page3 .user-list2{
  margin-top:4vh;
}
.page3 .user-box .user-list2-left{
  margin-left: 4.8vw;
}
.page3 .user-box .user-list2-left img{
 width:50vw;

}

.page3 .user-box .user-list2-right img{
  width:34vw;
  float: right;
  margin-right: 5.6vw;
  margin-top:-4vw;
}
.page3 .user-list3{
  margin-top: 4vh;
}

.page5 .logo-box{
  width: 85vw;
  margin: 0 auto;
}
.page5 .logo-box img{
  margin-top:4vw;
}
.page5{
  width:100%;
  height: 100%;
  background: url('../../assets/img/page3/bg.png') top no-repeat;
  background-size: 100% 100%;
}
.page5 .title-box{
  width: 100%;
}
.page5 .title-text-box{
  width: 80%;
  margin: 0 auto;
  margin-top: -6vw;
}
.page5 .zhangjiechuchi{
  width: 51%;
  margin: 0 auto;
}

.page5 .user-list1-box{
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top:-5vw;
}
.page5 .user-list1-box img{
  width:31.6vw;
  margin: 0 auto;
}

.page5 .line-box{
  width 80%;
  border: 0.1px  dashed #ddbc77;
  margin: 0 auto;
  margin-top:3vw;
}
.page5 .user-list2-box{
  width:100%;
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: center;
  margin-top:-3vw;
  position relative
}
.page5 .user-list2-box .left img{
  width:31.6vw;
  margin-top:0vw;
  margin-left:2vw;
}
.page5 .user-list2-box .right img{
  width:53vw;
  margin-top:13vw;
}
.page5 .user-list3-box{
  width:100%;
  display: grid;
  grid-template-columns: 60% 40%;
  text-align: center;
  margin-top:2vw;
  position relative;
}
.page5 .user-list3-box .left img{
  width:53vw;
  position: absolute;
  top:2vw;
  left: 6vw;
}
.page5 .user-list3-box .right img{
  width:31.6vw;
  margin-left:6vw
  margin-top:-10vw;
}

.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.bj1 {
  background: url('../../assets/img/index/indexBg.png') no-repeat center;
  background-size: 100% 100%;
}

.tit {
  width: 85.2vw;
  margin: 7.8vh auto 6.62vh;
}

.title {
  width: 91.2vw;
  margin: 0 auto;
}
.xtitle{
  width 69.6vw
  margin 4.9vh auto
  animation-delay:0.5s
}
.date {
  width: 41.33vw;
  position: absolute;
  right: 0;
  bottom: 5vh;
}

.bj2 {
  background: url('../../assets/img/page2/bg.png') no-repeat top;
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

.dongtit {
  position: relative;
  animation: animat2 0.7s linear 1s forwards;
  animation-play-state: running;
  opacity: 0;
}

@keyframes animat2 {
  0% {
    opacity: 0;
    top: -5vh;
  }

  100% {
    opacity: 1;
    top: 0vh;
  }
}

.dongdata {
  animation: clip 2s linear 1s forwards;
  opacity: 0;
}
.dongdata1 {
  animation: clip 1s linear 0s forwards;
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
  animation: clip 0.5s linear  forwards;
  opacity: 0;
}
.page3tit{
  width 64.8vw
  margin 18.13vw auto 0
  .twoimg{
    width 58.13vw
    margin 4vw auto
  }
}
.page3cont{
  margin-top 10.7333vw;
}
.sj{
  margin-top 1.4vh
}

</style>

  
  
