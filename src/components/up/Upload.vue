<template>
  <div class="upbox">
    <p class="tit">上传视频/照片</p>
    <div class="upfile" id="headshotUpdate" v-show="!src">
      <div id="selectfiles" class="upbj">
        <img src="./upbj.png" alt="" />
      </div>
      <!-- <div class="videobox" v-show="isvadio">
        <video
          :src="src"
          ref="video"
          webkit-playsinline
          playsinline
          x-webkit-airplay="true"
          x5-video-player-type="h5"
          x5-video-orientation="h5"
          x5-video-player-fullscreen="true"
          preload="auto"
          controls
        />
      </div> -->
    </div>
    <div>
      <div class="previewbox" v-show="src">
        <div class="preview" id="preview"></div>
        <div class="del" @click="delet">X</div>
      </div>
      <p class="biaoti" id="ossfile" ref="ossfile" v-show="!src"></p>
      <div class="console" id="console"></div>
    </div>
    <a href="javascript:;" class="but color" v-if="src" @click="save">提交</a>
    <a href="javascript:;" class="but color" id="postfiles" v-else>上传</a>

    <Alert @showMsg="showMsg" v-if="msg"
      ><p v-html="msg" class="ziti"></p
    ></Alert>
  </div>
</template>
<script>
import uploader from "./upload-pupload";

export default {
  data() {
    return {
      msg: "",
      isvadio: false,
      size: 0,
      name: "",
      file: "",
      src: "",
      progress: 0,
      isSc: true,
      isShipin: "",
    };
  },
  methods: {
    save() {
      if (!this.src) return;
      console.log(123);
      console.log(document.getElementById("preview").firstChild.tagName);
      let a = document.getElementById("preview").firstChild.tagName;
      if (a == "IMG") {
        this.isShipin = false;
      } else {
        this.isShipin = true;
      }
      console.log("提交啦", this.src, this.isShipin);
      // this.$emit("upclick", this.src,this.isShipin);
    },
    delet() {
      this.src = "";
      this.$refs.ossfile.innerHTML = "";
    },
  },
  mounted() {
    uploader((url) => {
      this.src = url;
      console.log(url);
      // this.save();
    });
  },
};
</script>
<style lang='stylus' scoped>
.upbox {
  width: 86.6vw;
  margin: 0 auto 0;
  padding-bottom: 2vh;
}

.biaoti {
  margin: 3.2vh auto 2vh;
  text-align: center;
  font-size: 1.8em;
  color: #fff;
}

.tit {
  font-size: 1.8em;
  color: #fff;
}

.upbj {
  width: 29.6vw;
  margin: 0 auto;
}

.upfile {
  width: 86.6vw;
  border-radius: 2vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 1vh auto 0;
}

.videobox {
  position: absolute;
  top: 0;
  left: -1vw;
  width: 86.6vw;
  height: 49vw;
}

video {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

/deep/.progress {
  width: 86.6vw;
  height: 3vw;
  background: #fff;
  margin: 1vh auto;
  border-radius: 3vw;

  .progress-bar {
    border-radius: 3vw;
    background: #da1884;
    height: 100%;
    position: relative;

    .num {
      display: block;
      position: absolute;
      right: 0;
      top: 3vw;
    }
  }
}

.previewbox {
  position: relative;

  .del {
    position: absolute;
    right: 0;
    top: 0;
    width: 7vw;
    height: 7vw;
    text-align: center;
    line-height: 7vw;
    color: #fff;
    font-size: 1.8em;
    border-bottom-left-radius: 2vw;
    background: rgba(0, 0, 0, 0.8);
  }
}

.preview {
  width: 86.6vw;
  height: 49.3vw;
  margin: 0 auto;

  /deep/img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  /deep/video {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

.but {
  width: 86.6vw;
  margin-bottom: 5.3vw;
  margin-top: 4vh;
}

.color {
  color: #da1884;
}
</style>
