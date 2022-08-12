<template>
  <div class="content" @touchstart.capture="clickpage">
    <van-swipe
      :stop-propagation="true"
      class="my-swipe"
      ref="swipe"
      :touchable="false"
      :show-indicators="false"
      @change="onChange"
      duration="1000"
      :loop="false"
    >
      <!-- <van-swipe-item>
        <Page1
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page1>
      </van-swipe-item> -->
      <van-swipe-item>
        <Page2
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page2"
          :page="page"
          v-if="index == 0"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page2>
      </van-swipe-item>
      <van-swipe-item>
        <Page4
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page4"
          :page="page"
          v-if="index == 1"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page4>
      </van-swipe-item>
      <van-swipe-item>
        <Page5
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page5"
          :page="page"
          v-if="index == 2"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page5>
      </van-swipe-item>
      <van-swipe-item>
        <Page6
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page6"
          :page="page"
          v-if="index == 3"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page6>
      </van-swipe-item>
      <van-swipe-item>
        <Page8
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page8"
          :page="page"
          v-if="index == 4"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page8>
      </van-swipe-item>
      <!-- <van-swipe-item>
        <Page10
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page10"
          :page="page"
          v-if="index === 4"
          :isclick="isclick"
          @swipeprev="swipeprev"
          @swipenext="swipenext"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page10>
      </van-swipe-item> -->
      <!-- 
      <van-swipe-item>
        <Page11
          @changeisfan="changeisfan"
          @changejinzhi="changejinzhi"
          ref="page11"
          :page="page"
          v-if="index === 3"
          :isclick="isclick"
          @swipeprev="swipeprev"
          @swipenext="swipenext"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page11>
      </van-swipe-item>
      <van-swipe-item>
        <Page13
          v-if="index == 4"
          :isclick="isclick"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page13>
      </van-swipe-item> -->
      
      <!-- <van-swipe-item>
        <Page14
          v-if="index == 5"
          :isclick="isclick"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page14>
      </van-swipe-item>
      <van-swipe-item>
        <Page15
          v-if="index == 6"
          :isclick="isclick"
          @swipeprev="swipeprev"
          @touchstart.native="onTouchStart"
          @touchmove.native="onTouchMove"
        ></Page15>
      </van-swipe-item>
      <van-swipe-item>
        <Page10 @swipeprev="swipeprev"   v-if="index == 7"></Page10>
      </van-swipe-item> -->
    </van-swipe>
    <!-- <div class="fanhui" v-if="index !== 0" @click="clickhandle">
      <img src="../assets/img/fanhui.png" alt="" />
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
// import Page1 from "../components/page/Page1.vue";
import Page2 from "../components/page/Page2.vue";
import Page4 from "../components/page/Page4.vue";
import Page5 from "../components/page/Page5.vue";
import Page6 from "../components/page/Page6.vue";
import Page8 from "../components/page/Page8.vue";
import Page10 from "../components/page/Page10.vue";
import Page11 from "../components/page/Page11.vue";
import Page13 from "../components/page/Page13.vue";
import Page14 from "../components/page/Page14.vue";
import Page15 from "../components/page/Page15.vue";
export default {
  components: {
    // Page1,
    Page2,
    Page4,
    Page5,
    Page6,
    Page8,
    Page10,
    Page11,
    Page13,
    Page14,
    Page15,
  },
  data() {
    return {
      isJinzhi: true, //更改轮播能不能滑动
      index: 0,
      startX: null,
      startY: null,
      isfan: true, //需不需要翻页
      timer: "",
      time:8000,
      page: 1, //书的显示的页数
      prev: 0,
      isclick: false, //是否点击过
      isqihou: "", //向前翻了还向后了
      ishua: false,
      pagenum: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.changepage();
      // 自动翻页
    });
  },
  methods: {
    onChange(index) {
      console.log(index);
      this.index = index;
      // if (!this.isJinzhi) {
      //   this.isJinzhi = true;
      // }
      console.log(this.prev, index);
      if (this.prev <= index) {
        this.page = 1;
      }
      if (index == 0  || index == 3 || index == 4) {
        // 需要翻书的页
        this.isJinzhi = false;
        this.isfan = true;
        console.log(this.prev, index, "prev index关系");
      } else {
        this.isfan = false;

        this.isJinzhi = true;
        if (index == 5) {
          this.isJinzhi = false;
        }
      }
      this.prev = index;
      console.log("是否翻页1222", this.isJinzhi);
    },
    changepage() {
      if (this.pagenum == 0) {
        this.time = 5000;
      };
      this.pagenum++;
      console.log(this.pagenum, "这是第几页");
      this.$emit('update', this.pagenum);
      this.book = '';
      clearTimeout(this.timer);
      if (this.isclick) return;
      console.log(this.time);
      this.timer = setTimeout(() => {
        this.time = 8000;
        this.page = 1;
       
        console.log(this.index);
        console.log('this.index'+this.index);
        console.log('this.isfan'+this.isfan);
        if (this.index == 6) {
          console.log("清除");
          clearTimeout(this.timer);
          return;
        }
        if (this.isfan) {
          if (this.index === 0) {
            this.$refs.page2.next();
          } else if (this.index == 1) {
            this.$refs.page4.next();
          } else if (this.index == 2) {
            this.$refs.page5.next();
          } else if (this.index == 3) {
            this.$refs.page6.next();
          }else if (this.index == 4) {
            this.$refs.page8.next();
          }else if (this.index == 5) {
            this.$refs.page10.next();
            clearTimeout(this.timer);
            return;
          }
        } else {
          this.$refs.swipe.next();
        }
        this.changepage();
      }, this.time);
    },
    swipenext() {
      this.$refs.swipe.next();
    },
    swipeprev(num,index) {
      console.log("上一页"+index);
      if(index === 4){
        this.$emit('update',4);
      }else if(index === 5){
        this.$emit('update',5);
      }else if(index === 6){
        this.$emit('update',7);
      }else{
        this.$emit('update',8);
      }
      this.$refs.swipe.prev();
      if (num) {
        this.page = num;
      }
    },
    changejinzhi() {
      this.isJinzhi = false;
    },
    changeisfan(text) {
      this.isqihou = text;
      this.isJinzhi = false;
      if (text) {
        this.isfan = false;
      }
    },
    // 只能能向后滑动翻页，向前使用返回按钮
    onTouchStart(e) {
      e = e || event;
      // e.preventDefault();
      this.ishua = false;
      if (e.touches.length == 1) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
      }
    },
    // 记录每次滑动位置
    onTouchMove(e) {
      if (this.ishua) return;
      e = e || event;
      // e.preventDefault();
      let surrentStartX;
      let surrentStartY;
      if (e.touches.length == 1) {
        surrentStartX = e.touches[0].clientX;
        surrentStartY = e.touches[0].clientY;
      }
      // console.log(surrentStartX - this.startX);
      console.log(surrentStartY - this.startY);
      if (surrentStartY - this.startY < -50 || surrentStartY - this.startY > 50)
        return;
      if (surrentStartX - this.startX < -40) {
        // 右滑
        console.log("右滑");
        var a;
        if (this.index == 0) {
          a = this.$refs.page2.getpage();
          if (a == 1 || a == 2 || a == 3) {
            this.$refs.page2.next();
          } else {
            this.$emit('update',4);
            this.$refs.swipe.next();
          }
        } else if (this.index == 1) {
          this.$emit('update', 4);
          a = this.$refs.page4.getpage();
          if (a === 2 || a === 3) {
            this.$refs.page4.next();
          } else {
            this.$emit('update', 5);
            this.$refs.swipe.next();
          }
        } else if (this.index == 2) {
          a = this.$refs.page5.getpage();
          if (a === 1) {
            this.$emit('update', 6);
            this.$refs.swipe.next();
          } else {
            this.$refs.page5.next();
          }
        }else if (this.index == 3) {
          this.$emit('update', 7);
          a = this.$refs.page6.getpage();
          if (a === 1) {
            this.$refs.page6.next();
          } else {
            this.$refs.swipe.next();
          }
        }else if (this.index == 4) {
          a = this.$refs.page8.getpage();
          if (a === 1 || a === 2) {
            this.$refs.page8.next();
          } else {
            this.$emit('update', 9);
            this.$refs.swipe.next();
          }
        }else if (this.index == 5) {
          a = this.$refs.page10.getpage();
          if (a === 2 || a === 3) {
            this.$refs.swipe.next();
            console.log("huan");
          }else{
            this.$refs.page10.next();
          }
        } else {
          this.$refs.swipe.next();
        }
        console.log(a);
        console.log(this.index);
        this.ishua = true;
      } else if (surrentStartX - this.startX > 20) {
        // // 左滑
        console.log("左滑");

        // this.ishua = true;
      }
    },
    clickpage() {
      // 停止自动翻页
      if (this.isclick) return;
      this.isclick = true;
      clearTimeout(this.timer);
      console.log("停止");
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.box {
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

.fanhui {
  height: 10vw;
  width: 10vw;
  position: fixed;
  left: 2vw;
  bottom: 5vw;
}
</style>