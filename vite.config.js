import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'
import Unocss from 'unocss/vite'

const configProxy = {
  local: {
    ucenter: 'http://127.0.0.1:9000',
    social: 'http://127.0.0.1:9701'
  },
  test: {
    ucenter: 'http://xfglweb.diweiyunlian.cn:6433',
    social: 'http://xfglweb.diweiyunlian.cn:6433'
  },
  line: {
    ucenter: 'http://182.43.58.47:1326/',
    social: 'http://222.209.208.86:2260/'
  }
}

const getProxy = (name) => {
  return {
    '/ucenter': {
      target: configProxy[name].ucenter,
      changeOrigin: true
    },
    '/monitor': {
      target: configProxy[name].ucenter,
      changeOrigin: true
    },
    '/social': {
      target: configProxy[name].social,
      changeOrigin: true
    },
    '/excel-server': {
      target: 'https://xzy.diweiyunlian.cn/',
      changeOrigin: true
    }
  }
}

export default defineConfig(({ command, mode }) => {
  let alias = {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  if (mode === 'dwui') {
    alias = {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('../../../dwyl-ui/packages', import.meta.url)),
      'dwyl-ui': fileURLToPath(new URL('../../../dwyl-ui/packages/index.js', import.meta.url))
    }
  }

  return {
    base: '/',
    plugins: [
      vue(),
      DefineOptions(),
      vueJsx(),
      Unocss(),
      createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "./src/styles/var.scss";' // 全局变量
        }
      }
    },
    define: {
      'process.env': {}
    },
    resolve: {
      alias,
      extensions: ['.js', '.jsx', '.json', '.vue', '.css', '.scss']
    },
    server: {
      host: '0.0.0.0',
      port: 9696,
      hmr: true, // 启动热更新
      proxy: getProxy('test'), // test：测试， line: 线上， dyw：丁云伟
      fs: {
      // 可以为项目根目录的上一级提供服务
        allow: ['..']
      }
    }
  }
})
