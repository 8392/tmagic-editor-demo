import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useAccountStore } from '@/store'
let router = {}
import('@/router').then(({ router: r }) => {
  router = r
})

const service = axios.create({
  baseURL: 'https://www.diweiyunlian.cn/api/official',
  // baseURL: 'http://192.168.0.108:9083',
  timeout: 100000,
  withCredentials: true
})

// 拦截请求
service.interceptors.request.use(
  config => {
    const store = useAccountStore()
    if (store.authorization) {
      config.headers.Authorization = store.authorization
    }
    return config
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use(
  // 响应成功进入第1个函数，该函数的参数是响应对象
  response => {
    const res = response.data
    if (res instanceof Blob && response.config.responseType === 'blob') {
      let filename = response.headers['content-disposition']
      filename = filename.split(';')[1].split('filename=')[1]
      return {
        blob: res,
        fileName: decodeURIComponent(filename)
      }
    }
    if (res.code === 1 || res.code === 200 || response.config.backOtherCode) return res
    ElMessage.error(res?.msg || '请求出错')
    return Promise.reject(res)
  },
  // 响应失败进入第2个函数，该函数的参数是错误对象
  async error => {
    const user = useAccountStore()
    const { data, status } = error.response
    if (status === 401) {
      user.clearToken()
      // router.replace('/login')
      window.location.href = '/login'
      return
    }
    ElMessage.error(data?.msg || error?.message || '请求出错')
    return Promise.reject(data)
  }
)

export default service
