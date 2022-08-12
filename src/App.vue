<template>
  <div id="app">
    <div :class="{page6:page6Show}">
      <div :class="{page5:page5Show}">
        <div :class="{page4:page4Show}">
          <router-view :books="books" @update="addBook"/>
          <p class="shenpi">MAT-CN-2204806-1.0-03/2022</p>
          <Bjmusic  ref="bgm"></Bjmusic>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import "./assets/css/main.css";
import Bjmusic from "./components/bjmusic/bgm.vue";
import wxconfig from "./components/wxconfig";
export default {
  components: {
    Bjmusic,
  },
  data() {
    return {
      books:'',
      coverImgUrl:require('@/assets/img/index/app-index-bg.png'),
      coverImgUrl4:require('@/assets/img/page4/bg.png'),
      coverImgUrl5:require('@/assets/img/page5/bg.png'),
      coverImgUrl6:require('@/assets/img/page6/bg.png'),
      index:0,
      appMoveShow:false,
      page6Show:true,
      page5Show:true,
      page4Show:true,
    };
  },
  methods: {
    addBook(val) {
      console.log(val+'测试第几页');
      console.log(typeof val)
      switch (val) {
        case 4:
          this.page4Show = true;
          break;
        case 5:
          this.page4Show = false;
          this.page5Show = true;
          break;
        case 6:
          this.page4Show = false;
          this.page5Show = false;
          break;
        default:
          break;
      }
    },
  },
  computed:{
    bgStyle(){
      return {
        backgroundImage:'url('+this.coverImgUrl+')'
      }
    }
  },
  created() {
    wxconfig.init();
  },
};
</script>

<style lang="stylus">
#app {
  width:100%;
  height: 100%;
  background: url('./assets/img/index/app-index-bg.png') no-repeat center;
  background-size: 100% 100%;
}
.page4{
  width: 100%;
  height 100%;
  background: url('./assets/img/page4/bg.png') no-repeat center;
  background-size: 100% 100%;
  z-index 99;
}
.page5{
  width: 100%;
  height 100%;
  background: url('./assets/img/page5/bg-new.png') no-repeat center;
  background-size: 100% 100%;
  z-index 98;
}
.page6{
  width: 100%;
  height 100%;
  background: url('./assets/img/page6/bg.png') no-repeat center;
  background-size: 100% 100%;
  z-index 97;
}
.appMove{
  -webkit-animation: fadeinout 5s linear forwards;
  animation: fadeinout 5s linear 1s forwards;
}
@keyframes fadeinout {
    0%{
        transform: scale(1);
        opacity: 0.5;  
    }
    50%{
        transform: scale(1.5);  
        opacity: 0;   /*圆形放大的同时，透明度逐渐减小为0*/
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
body {
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}
.pagepan {
  width: 100%;
  height: 86.93vw;
  position: relative;
  animation: pagepan 0.7s linear  forwards;
  animation-play-state: running;
  z-index: 2;
  opacity: 0;

  @keyframes pagepan {
    0% {
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }

    100% {
      -ms-transform: scale(1);
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  .gun {
    position: absolute;
    left: 6.13vw;
    top: 0;
    width: 20.8vw;
    z-index: 2;
  }

  .yin1 {
    position: absolute;
    width: 11.73vw;
    left: 6.93vw;
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
      top: 26.67vw;
    }
  }

  .yin2 {
    position: absolute;
    width: 18.67vw;
    right: 2.67vw;
    top: 50.67vw;
    z-index: 2;
    animation: yin2 0.5s linear 1.7s forwards;
    animation-play-state: running;
  }

  @keyframes yin2 {
    0% {
      top: 50.67vw;
    }

    100% {
      top: 42.93vw;
    }
  }

  .yin3 {
    position: absolute;
    width: 7.47vw;
    left: 22.67vw;
    top: 1.33vw;
    animation: yin3 1s linear infinite forwards;
    animation-play-state: running;
  }

  @keyframes yin3 {
    0% {
      top: 1.33vw;
      left: 22.67vw;
    }

    50% {
      top: 4.33vw;
      left: 26.67vw;
    }

    100% {
      top: 1.33vw;
      left: 22.67vw;
    }
  }

  .yin4 {
    position: absolute;
    width: 9.33vw;
    right: 8.27vw;
    top: 10.67vw;
    animation: yin4 1s linear infinite forwards;
    animation-play-state: running;
  }

  @keyframes yin4 {
    0% {
      right: 8.27vw;
      top: 10.67vw;
    }

    50% {
      right: 11.27vw;
      top: 14.67vw;
    }

    100% {
      right: 8.27vw;
      top: 10.67vw;
    }
  }

  .bu {
    width: 100%;
    position: absolute;
    top: 40vw;
    z-index: 3;
    opacity 0
    animation: bu 0.5s linear 1s forwards;
    animation-play-state: running;
  }
   @keyframes bu {
    0% {
      opacity 1
      clip-path: polygon(38% 0, 68% 0, 68% 100%, 38% 100%)
    }
    100% {
      opacity 1
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }


  .xin {
    position: absolute;
    width: 49.07vw;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 19.67vw;
    z-index: 2;
  }

  .pan {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -6.5vw;
    width: 100;
    z-index: 1;
    animation: pan 4s linear infinite forwards;
    animation-play-state: running;
  }

  @keyframes pan {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .pagetitle {
    position: absolute;
    width: 83.73vw;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 48vw;
    z-index: 4;
    opacity 0
    animation: pagepan 0.7s linear 2s forwards;
    animation-play-state: running;
  }
}

.pagedi {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0vw;
  height: 0vw;
  background: url('./assets/img/dibj.png') no-repeat left bottom;
  background-size: 100vw auto;
  transition: width height 1.5s linear;
  animation: pagedi 0.7s linear 0.5s forwards;
  animation-play-state: running;
}

@keyframes pagedi {
  0% {
    width: 0vw;
    height: 0vw;
  }

  100% {
    width: 100vw;
    height: 80vw;
  }
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

.shijian {
  width: 51.2vw;
  margin: 0 auto;
  position: relative;
  z-index: 99;
  animation: shijian 2s linear 2s forwards;
  animation-play-state: running;
  opacity: 0;
}

@keyframes shijian {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.shenpi{
  position absolute
  bottom 1vh
  right 3vw
  color #fff
  text-align: right 
  font-size: 1.1em
}
.dongdata {
  animation: clip 2s linear 1s forwards;
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

</style>

