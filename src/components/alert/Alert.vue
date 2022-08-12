<template>
  <div class="full">
    <div class="alertify">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {type: String, default: 'success'}
  },
  mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild)
  },
  beforeDestroy() {
    this.$el.remove()
  }
}
</script>
<style scoped>
.alertify {
  position: fixed;
  text-align: center;
  z-index: 1000;
  width: 50vw;
  height: 10vw;
  left:0;
  right: 0;
  bottom: 0;
  margin: auto;
  top:0;
  background-color: rgba(0, 0, 0, .7);
  border-radius: .1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 2em;
  align-items: center;
  padding: .1rem;
  -webkit-animation: fadeIn .3s ease-in forwards;
  -webkit-animation-fill-mode: both;
}
</style>
