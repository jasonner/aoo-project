<template>
  <div class="uploadbox">
    <p class="tit">上传视频/照片</p>
    <div class="upcont">
        <!-- 未上传时 -->
      <div class="upbox" @click="clickinput" v-if="!file">
        <img src="../assets/img/upbj.png" alt="" />
      </div>
      <div class="yulan" v-if="file">
        <div class="uping" v-if="isuping">
            <!-- 上传中显示 -->
          <svg
            t="1640749132351"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2138"
            width="10vw"
            height="10vw"
          >
            <path
              class="path"
              d="M876.864 782.592c3.264 0 6.272-3.2 6.272-6.656 0-3.456-3.008-6.592-6.272-6.592-3.264 0-6.272 3.2-6.272 6.592 0 3.456 3.008 6.656 6.272 6.656z m-140.544 153.344c2.304 2.432 5.568 3.84 8.768 3.84a12.16 12.16 0 0 0 8.832-3.84 13.76 13.76 0 0 0 0-18.56 12.224 12.224 0 0 0-8.832-3.84 12.16 12.16 0 0 0-8.768 3.84 13.696 13.696 0 0 0 0 18.56zM552.32 1018.24c3.456 3.648 8.32 5.76 13.184 5.76a18.368 18.368 0 0 0 13.184-5.76 20.608 20.608 0 0 0 0-27.968 18.368 18.368 0 0 0-13.184-5.824 18.368 18.368 0 0 0-13.184 5.76 20.608 20.608 0 0 0 0 28.032z m-198.336-5.76c4.608 4.8 11.072 7.68 17.6 7.68a24.448 24.448 0 0 0 17.536-7.68 27.456 27.456 0 0 0 0-37.248 24.448 24.448 0 0 0-17.536-7.68 24.448 24.448 0 0 0-17.6 7.68 27.52 27.52 0 0 0 0 37.184z m-175.68-91.84c5.76 6.08 13.824 9.6 21.952 9.6a30.592 30.592 0 0 0 22.016-9.6 34.368 34.368 0 0 0 0-46.592 30.592 30.592 0 0 0-22.016-9.6 30.592 30.592 0 0 0-21.952 9.6 34.368 34.368 0 0 0 0 46.592z m-121.152-159.36c6.912 7.36 16.64 11.648 26.368 11.648a36.736 36.736 0 0 0 26.432-11.584 41.28 41.28 0 0 0 0-55.936 36.736 36.736 0 0 0-26.432-11.584 36.8 36.8 0 0 0-26.368 11.52 41.28 41.28 0 0 0 0 56zM12.736 564.672a42.88 42.88 0 0 0 30.784 13.44 42.88 42.88 0 0 0 30.784-13.44 48.128 48.128 0 0 0 0-65.216 42.88 42.88 0 0 0-30.72-13.44 42.88 42.88 0 0 0-30.848 13.44 48.128 48.128 0 0 0 0 65.216z m39.808-195.392a48.96 48.96 0 0 0 35.2 15.36 48.96 48.96 0 0 0 35.2-15.36 54.976 54.976 0 0 0 0-74.56 48.96 48.96 0 0 0-35.2-15.424 48.96 48.96 0 0 0-35.2 15.424 54.976 54.976 0 0 0 0 74.56zM168.32 212.48c10.368 11.008 24.96 17.408 39.68 17.408 14.592 0 29.184-6.4 39.552-17.408a61.888 61.888 0 0 0 0-83.84 55.104 55.104 0 0 0-39.616-17.408c-14.656 0-29.248 6.4-39.616 17.408a61.888 61.888 0 0 0 0 83.84zM337.344 124.8c11.52 12.16 27.712 19.264 43.968 19.264 16.256 0 32.448-7.04 43.968-19.264a68.672 68.672 0 0 0 0-93.184 61.248 61.248 0 0 0-43.968-19.264 61.248 61.248 0 0 0-43.968 19.264 68.736 68.736 0 0 0 0 93.184z m189.632-1.088c12.672 13.44 30.528 21.248 48.448 21.248s35.712-7.808 48.384-21.248a75.584 75.584 0 0 0 0-102.464A67.392 67.392 0 0 0 575.36 0c-17.92 0-35.776 7.808-48.448 21.248a75.584 75.584 0 0 0 0 102.464z m173.824 86.592c13.824 14.592 33.28 23.104 52.736 23.104 19.584 0 39.04-8.512 52.8-23.104a82.432 82.432 0 0 0 0-111.744 73.472 73.472 0 0 0-52.8-23.168c-19.52 0-38.912 8.512-52.736 23.168a82.432 82.432 0 0 0 0 111.744z m124.032 158.528c14.976 15.872 36.032 25.088 57.216 25.088 21.12 0 42.24-9.216 57.152-25.088a89.344 89.344 0 0 0 0-121.088 79.616 79.616 0 0 0-57.152-25.088c-21.184 0-42.24 9.216-57.216 25.088a89.344 89.344 0 0 0 0 121.088z m50.432 204.032c16.128 17.088 38.784 27.008 61.632 27.008 22.784 0 45.44-9.92 61.568-27.008a96.256 96.256 0 0 0 0-130.432 85.76 85.76 0 0 0-61.568-27.072c-22.848 0-45.44 9.984-61.632 27.072a96.192 96.192 0 0 0 0 130.432z"
              fill="#dbdbdb"
              p-id="2139"
            ></path>
          </svg>
          {{ uptext }}
        </div>
        <div class="shibai uping" v-if="!isuping && !isfinish">
            <!-- 上传失败 -->
          <svg
            t="1640749941920"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2166"
            width="10vw"
            height="10vw"
          >
            <path
              d="M512 0.006C229.233 0.006 0.006 229.233 0.006 512c0 282.766 229.228 511.993 511.994 511.993S1023.993 794.765 1023.993 512C1023.993 229.233 794.766 0.006 512 0.006z m319.607 831.601c-41.53 41.529-89.874 74.128-143.689 96.891-55.686 23.553-114.873 35.495-175.918 35.495s-120.233-11.942-175.918-35.495c-53.816-22.763-102.161-55.361-143.69-96.891-41.53-41.53-74.128-89.874-96.891-143.689C71.948 632.232 60.006 573.045 60.006 512s11.942-120.233 35.495-175.918c22.762-53.816 55.361-102.16 96.891-143.69s89.874-74.128 143.69-96.891C391.767 71.948 450.955 60.006 512 60.006s120.232 11.942 175.918 35.495c53.815 22.763 102.159 55.361 143.689 96.891 41.529 41.53 74.128 89.875 96.891 143.69 23.553 55.685 35.495 114.873 35.495 175.918s-11.942 120.232-35.495 175.918c-22.763 53.815-55.361 102.159-96.891 143.689z"
              p-id="2167"
              fill="#dbdbdb"
            ></path>
            <path
              d="M749.773 274.226c-15.621-15.621-40.947-15.621-56.568 0L512 455.432 330.795 274.227c-15.621-15.621-40.947-15.621-56.568 0-15.621 15.621-15.621 40.947 0 56.568L455.432 512 274.227 693.204c-15.621 15.621-15.621 40.947 0 56.568 7.811 7.811 18.047 11.716 28.284 11.716s20.474-3.905 28.284-11.716L512 568.568l181.205 181.205c7.811 7.811 18.047 11.716 28.284 11.716s20.474-3.905 28.284-11.716c15.621-15.621 15.621-40.947 0-56.568L568.568 512l181.205-181.206c15.622-15.621 15.622-40.947 0-56.568z"
              p-id="2168"
              fill="#dbdbdb"
            ></path>
          </svg>
          {{ uptext }}
        </div>
        <!-- 上传成功 -->
        <!-- 删除 -->
        <div v-if="!isuping && isfinish" class="del" @click="delhanle">X</div>
        <!-- 图片 -->
        <img v-if="!isuping && isfinish && !isSp && type != 'qita'" :src="'https://oss.sxyweb.com.cn/' + src" alt="" />
        <!-- 视频 -->
        <video
          v-if="!isuping && isfinish && isSp  && type != 'qita'"
          :src="'https://oss.sxyweb.com.cn/' + src"
          :poster="
            'https://oss.sxyweb.com.cn/' +
            src +
            '?x-oss-process=video/snapshot,t_1000,m_fast'
          "
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
        <!-- 其他类型 -->
        <div class="qita" v-if="!isuping && isfinish && type == 'qita'">
            <p>其他类型文件</p>
        </div>
      </div>
    </div>
    <!-- 隐藏的input -->
    <input
      ref="fileinput"
      type="file"
      id="file"
      capture="camera"
      @change="changefliehandle($event)"
    />
    <!-- 显示名字大小 -->
    <p v-show="file" class="biaoti">{{ name }} ({{ size }}Mb)</p>
        <!-- 进度条 -->
    <div v-show="file" class="progressbox">
      <div class="progress" :style="{ width: pro + '%' }">
        <span class="num">{{ pro }}%</span>
      </div>
    </div>
    <div class="but color" @click="clickhandle">提交</div>
  </div>
</template>

<script>
import OSS from "ali-oss";
export default {
  data() {
    return {
      name: "",
      size: "",
      isfinish: true,
      dir: "2021/q/test",
      pro: 0,
      tempCheckpoint: "",
      file: "",
      client: "",
      src: "",
      type: "",
      isSp: false,
      isQita: false,
      uptext: "上传中...",
      isuping: false,
    };
  },
  methods: {
    clickinput() {
        // 选择图片
      if (this.isuping) return;
      this.isuping = true;
      if (this.file) {
        this.$refs.fileinput.value = "";
      }
      this.$refs.fileinput.click();
    },
    changefliehandle(e) {
     // 上传oss
      console.log(e.target.files[0]);
      this.type = e.target.files[0].type.split("/")[0];
      if (this.type == "image") {
        this.isSp = false;
      } else if (this.type == "video") {
        this.isSp = true;
      } else {
        this.isQita = true;
        this.type = "qita";
        // alert("该文件格式不支持");
        // this.$refs.fileinput.value='';
        // this.isfinish=true
        // return
      }
      console.log(this.type);
      this.file = e.target.files[0];
      this.name = this.file.name;
      this.size = (this.file.size / 1024 / 1000).toFixed(2);
      this.uploadFile(this.file);
    },
    delhanle() {
        // 删除
      this.$refs.fileinput.value = "";
      this.file = "";
    },
    clickhandle() {
        // 提交后台
      if (!this.isfinish || !this.file || this.isuping) return;
      console.log(123);
    },
    ossinit() {
        // oss初始化
      this.$fetch("https://wxcore.forhoo.com.cn/forhoo/GetOSSSTS", {
        dir: this.dir,
      }).then((result) => {
        console.log(result.data);
        this.client = new OSS({
          region: result.region,
          accessKeyId: result.data.accessKeyId,
          accessKeySecret: result.data.accessKeySecret,
          stsToken: result.data.securityToken,
          bucket: result.bucketName,
        });
      });
    },
    random_string(len) {
      len = len || 32;
      var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      var maxPos = chars.length;
      var pwd = "";
      for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },
    get_suffix(filename) {
      var pos = filename.lastIndexOf(".");
      var suffix = "";
      if (pos !== -1) {
        suffix = filename.substring(pos);
      }
      return suffix;
    },
    uploadFile(file) {
      var storeAs =
        this.dir + "/" + this.random_string(8) + this.get_suffix(file.name);
      return this.multipartUpload(storeAs, file);
    },
    async upload(name, file) {
      return this.client.put(name, file).then((res) => {
        return res.name;
      });
    },
    // 定义上传方法，分片上传
    async multipartUpload(name, file) {
      console.log(name, file);
      try {
        const result = await this.client
          .multipartUpload(name, file, {
            progress: (p, checkpoint) => {
              this.tempCheckpoint = checkpoint;
              console.log(checkpoint);
              this.pro = Math.floor(p * 100);
              console.log(this.pro);
            },
            parallel: 4,
            partSize: 1024 * 1024,
            mime: "text/plain",
          })
          .then((res) => {
            this.tempCheckpoint = null;
            console.log(res);
            this.isfinish = true;
            this.isuping = false;
            this.src = res.name;
            return res.name;
          });
      } catch (e) {
        console.log(e);
        this.isfinish = false;
        this.isuping = false;
        this.uptext = "上传失败";
      }
    },
  },
  mounted() {
    this.ossinit();
  },
};
</script>

<style lang="stylus" scoped>
.uploadbox {
  width: 100%;
  height: 50vh;
  background: #999;
}

.uping {
  width: 60vw;
  height: 33vw;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: #fff;
  padding: 1vh 0 0;
  font-size: 1.2em;

  .icon {
    display: block;
    margin: 5vw auto 2vw;

    .path {
      transform-origin: 50% 50%;
      animation: animations1 2s linear infinite forwards;
      animation-play-state: running;
    }
  }
}

@keyframes animations1 {
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

.upcont {
  width: 100%;
  position: relative;
  height: 33vw;
  margin-top 2vh

  .yulan {
    position: absolute;
    width: 60vw;
    height: 33vw;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;

    img, video {
      width: 100%;
      height: 100%;
      display: block;
      margin: 0 auto;
      object-fit: contain;
    }

    .del {
      width: 5vw;
      height: 5vw;
      position: absolute;
      right: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      font-size: 1.3em;
      text-align: center;
      border-bottom-left-radius: 2vw;
      z-index 99
    }
    .qita{
        height 100%
        width 100%
        text-align: center
        color #da1884
        font-size: 1.5em
        background: rgba(0, 0, 0, 0.8);
        line-height: 33vw
    }
  }
}

#file {
  opacity: 0;
}

.tit {
  font-size: 1.8em;
  color: #fff;
}

.upbox {
  width: 60vw;
  margin: 1vh auto;
}

.progressbox {
  width: 86.6vw;
  height: 4vw;
  margin: 4vh auto 2vh;
  border-radius: 2vw;
  background: #fff;

  .progress {
    height: 100%;
    border-radius: 2vw;
    background: #da1884;
    position: relative;

    .num {
      position: absolute;
      right: -3vw;
      top: 4.5vw;
      font-size: 1.2em;
    }
  }
}

.biaoti {
  margin: 1vh auto 0;
  text-align: center;
  font-size: 1.6em;
}

.but {
  width: 86.6vw;
  margin: 4vh auto;
  text-align: center;
  color: #000;
  background: #fff;
  height: 10vw;
  border-radius: 2vw;
  line-height: 10vw;
  font-size: 2em;
}

.color {
  color: #da1884;
}
</style>