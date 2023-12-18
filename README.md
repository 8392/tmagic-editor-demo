<!--
 * @Author: 'songren' '732054167@qq.com'
 * @Date: 2023-03-24 11:55:15
 * @LastEditors: 'songren' '732054167@qq.com'
 * @LastEditTime: 2023-03-29 15:16:48
 * @FilePath: \wisdom_admin_2.0\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 厂家认证状态
- ` producer_certified_status` 字典
- ` certified ` 状态值
- http://localhost:8888/#/manufactnfo 页面地址
<!-- truncate -->

<!-- https://fire.diweiyunlian.cn/file/289833598238683136.png -->


### 原型
http://axure.zd178.com/wlw/#id=3afmoy&p=%E6%8E%A5%E5%85%A5%E8%AE%BE%E5%A4%87%E5%88%97%E8%A1%A8&hi=1&g=1

### 接口
http://139.186.136.53:1548/manager/doc.html#/default/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/exportUsingPOST

### UI图
https://mastergo.com/file/60526838458326?page_id=365%3A09339
### 后台地址 
- 密码： `Dwy1@xzy`
http://139.186.136.53:1548/#/device/device?id=
### bug文档
http://222.209.208.86:8091/browse/ZHXF-689?filter=-1

### 文件下载

- get请求如果拿的直接是文件流，创建a标签，跳转直接下载
- get请求如果拿的是文件地址，那么通过axios请求，配置响应为bolb，拿到文件流，再通过js-URL.createObjectURL(blob)，生成本地文件地址，创建a链接下载

- post请求都要通过axios获取，转换成文件流，再生成本地地址，创建a标签下载

- 跨域不能请求，生成文件流
- truncate

### vite热更新失效，解决
- 由于在页面中引入了'@/router组件文件，导致路由还没完成渲染'
- '解决办法，在引入@/route的地方，通过import { userRouter } from "vue-router"'

### 兄弟组件通过用`mitt`这个包

### vue3插槽选择器
  :slotted(div) {
    // width: v-bind(colWidth);
  }
 
### 判断dom元素类型

```js
  e.target.nodeName === 'IMG'
  // 获取自定义data-属性的值，两种方法
   e.target.dataset.href
   e.target.getAttribute('data-href')
```

`bg-opacity-80`


```vue
  @update:modelValue="changeHtmlData"
```

### npm迪威镜像
- http://222.209.208.86:1917/repository/npm-diwei/


- npm config set registry https://registry.npmjs.org
-  npm config set registry http://222.209.208.86:1917/repository/npm-diwei/


### 租户账号
lesstest

123456


### 原型
http://axure.zd178.com/glpt/#id=zjmh11&p=%E5%8F%AF%E8%A7%86%E5%8C%96_1&hi=1&g=1
http://axure.zd178.com/cglw/#id=363st7&p=%E7%9B%91%E6%8E%A7&g=1



### 监管大屏地址，联网大屏---`测试地址`
http://222.209.208.86:2137/login
#### 联网大屏地址，为了演示监管跳联网
http://222.209.208.86:2142/#/home
### 个人大屏---`测试地址`
http://222.209.208.86:2138/login

#### 数据中台---生产后台
http://222.209.208.86:2135/admin/


http://222.209.208.86:2548/#/login 物联网前端


### 接口地址
http://222.209.208.86:2204/monitor/doc.html#/home
http://222.209.208.86:2203/ucenter/doc.html#/home
http://222.209.208.86:1548/manager/doc.html#/home




 
 

### 重构后的---生产环境
http://182.43.58.47:1325/admin/# 生产后台
http://203.34.92.89:2324/#/login 物联网后台
http://182.43.58.47:1326/#/login 物联网前端


http://203.34.92.89:2142/#/login /联网大屏地址，为了演示监管跳联网

http://203.34.92.89:2138 个人监管大屏




http://203.34.92.89:2137/#/ 监管/联网大屏。
监管账号：  jgys  123456

文物古建账号：  wwgjys  123456

高层建筑平台：  gcjzys  123456

