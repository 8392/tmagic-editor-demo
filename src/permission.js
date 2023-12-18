import router from '@/router'

const getPageTitle = (title) => {
  return title || '“消智云”生态'
}

// 白名单，里面是路由对象的name
const WhiteList = ['login', 'specification']

// vue-router4的路由守卫不再是通过next放行，而是通过return返回true或false或者一个路由地址
router.beforeEach(async to => {
  document.title = getPageTitle(!!to.meta && to.meta.title)
  return true
})
