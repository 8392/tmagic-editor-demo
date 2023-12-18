<template>
  <div id="dv-full-screen-container" ref="appRef">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import useDraw from '@/hooks/useDraw'

const { appRef, initConfig, calcRate, windowDraw, unWindowDraw } = useDraw({
  baseWidth: 1920,
  baseHeight: 1080,
  autoScale: true
})

onMounted(() => {
  // todo 屏幕适应
  initConfig()
  calcRate()
  windowDraw()
  const body = document.body
  body.style.overflow = 'hidden'
})

onUnmounted(() => {
  unWindowDraw()
  const body = document.body
  body.style.overflow = 'inherit'
})

</script>

<style lang="scss" scoped>
#dv-full-screen-container {
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transform-origin: 0px 0px;
  z-index: 1;
}
</style>
