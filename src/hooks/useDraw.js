import { ref } from 'vue'

export default function useDraw ({
  // * 设计稿尺寸（px）
  baseWidth = 1920,
  baseHeight = 1080,
  autoScale = false // 是否全屏比缩放
}) {
  // * 指向最外层容器
  const appRef = ref()
  // * 定时函数
  const timer = ref(0)
  // * 默认缩放值

  const scale = {
    width: '1',
    height: '1'
  }

  const calcRate = () => {
    // 当前宽高比
    if (autoScale) {
      scale.width = (window.innerWidth / baseWidth).toFixed(5)
      scale.height = (window.innerHeight / baseHeight).toFixed(5)

      appRef.value.style.transform = `scale(${scale.width}, ${scale.height})`
    } else {
      const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
      const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
      if (appRef.value) {
        if (currentRate > baseProportion) {
          // 表示更宽
          scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
          scale.height = (window.innerHeight / baseHeight).toFixed(5)
          appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        } else {
          // 表示更高
          scale.height = ((window.innerWidth / baseProportion) / baseHeight).toFixed(5)
          scale.width = (window.innerWidth / baseWidth).toFixed(5)
          appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        }
      }
    }
  }

  const initConfig = () => {
    const dom = appRef.value

    dom.style.width = `${baseWidth}px`
    dom.style.height = `${baseHeight}px`
  }

  const resize = () => {
    clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      calcRate()
    }, 10)
  }

  // 改变窗口大小重新绘制
  const windowDraw = () => {
    window.addEventListener('resize', resize)
  }

  // 改变窗口大小重新绘制
  const unWindowDraw = () => {
    window.removeEventListener('resize', resize)
  }

  return {
    appRef,
    initConfig,
    calcRate,
    windowDraw,
    unWindowDraw
  }
}
