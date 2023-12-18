import { defineStore } from 'pinia'
import { kebabCase } from 'lodash'
import { nextTick } from 'vue'

const themeKey = 'theme'
const key = 'primary'

const defaultConfig = {
  elColorPrimary: '#167EFF',
  dwSidebaBg: '#202938'
}

/** 添加css vars至html */
function addThemeCssVarsToHtml (themeVars) {
  const keys = Object.keys(themeVars)
  const style = []
  keys.forEach(key => {
    style.push(`--${kebabCase(key)}: ${themeVars[key]}`)
  })
  const styleStr = style.join(';')
  document.documentElement.style.cssText += styleStr
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    isDark: getStorage('vueuse-color-scheme') === true || false,
    themeJson: getStorage(themeKey) || { ...defaultConfig }
  }),
  getters: {},
  actions: {

  }
})
