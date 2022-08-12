<template>
  <div class="music">
    <!-- <img
      ref="rotate"
      class="start"
      @click="spinSwitch()"
      src="../assets/img/music.png"
      alt="音乐开关"
    /> -->
    <audio
      id="audio"
      ref="audioDom"
      src="https://oss.sxyweb.com.cn/ResourcePool/audio/ETRceTS5.mp3?v=20220516"
      controls="controls"
      loop="loop"
      autoplay="autoplay"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "Bjmusic",
  data() {
    return {
      animat: "running",
      isSpin: true,
    };
  },
  methods: {
    spinSwitch() {
      this.isSpin = !this.isSpin;
      if (!this.isSpin) {
        this.$refs["audioDom"].pause();
        this.$refs.rotate.style.animationPlayState = 'paused';
      } else {
        this.$refs["audioDom"].play();
	    	this.$refs.rotate.style.animationPlayState = 'running';
      }
    },
  },
  mounted() {
  function autoPlayAudio() {
            wx.ready(function () {
                document.getElementById('audio').play();
            });
            document.getElementById("audio").play();
            document.addEventListener(
                "WeixinJSBridgeReady",
                function () {
                    document.getElementById("audio").play();
                },
                false
            );
        }
        autoPlayAudio()
           

  },
};
</script>
<style scoped>

@keyframes animations1 {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform:  rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.music {
  position: fixed;
  right: 0.18rem;
  bottom: 0.25rem;
  width: 0.56rem;
}
.music img {
  width: 0.56rem;
}
audio {
  display: none;
}
.start {
  /* animation: spin 1s infinite forwards;
  -webkit-animation: spin 1s infinite forwards; */
  animation: animations1 2s linear infinite forwards;
	animation-play-state: running;
}
</style>


