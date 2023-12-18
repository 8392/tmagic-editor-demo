import request from '@/utils/request'

// 多上传文件
export const uploadMoreApi = data => {
  return request({
    url: '/minio/file/upload/list',
    method: 'post',
    data
  })
}

/* 登录 */
export const loginApi = data => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export const customerInfoApi = params => {
  return request({
    url: '/customer/info/list',
    method: 'get',
    params
  })
}

export const newsListApi = params => {
  return request({
    url: '/news/list',
    method: 'get',
    params
  })
}

export const newsAddApi = data => {
  return request({
    url: '/news',
    method: 'post',
    data
  })
}

export const newsPutApi = data => {
  return request({
    url: '/news',
    method: 'put',
    data
  })
}

export const personDeleteApi = (id) => {
  return request({
    url: `/customer/info/${id}`,
    method: 'delete'
  })
}

export const newsDelApi = (id) => {
  return request({
    url: `/news/${id}`,
    method: 'delete'
  })
}

export const uploadFile = (data, config) => {
  return request({
    url: '/minio/file/upload',
    method: 'post',
    data,
    config
  })
}

export const solutionListApi = params => {
  return request({
    url: '/solution/list',
    method: 'get',
    params
  })
}

export const solutionAddApi = data => {
  return request({
    url: '/solution',
    method: 'post',
    data
  })
}

export const solutionPutApi = data => {
  return request({
    url: '/solution',
    method: 'put',
    data
  })
}

export const solutionDelApi = (id) => {
  return request({
    url: `/solution/${id}`,
    method: 'delete'
  })
}

export const jsonConfigAddApi = (data) => {
  return request({
    url: '/config',
    method: 'post',
    data
  })
}

export const jsonConfigPutApi = (data) => {
  return request({
    url: '/config',
    method: 'put',
    data
  })
}

export const jsonConfigAddListApi = (params) => {
  return request({
    url: '/config/list',
    method: 'get',
    params
  })
}

export const jsonConfigNameApi = (params) => {
  return request({
    url: '/config/getByName',
    method: 'get',
    params
  })
}

export const systemListApi = (params) => {
  return request({
    url: `/system/list/${params.type}`,
    method: 'get'
  })
}

export const systemPostApi = (data) => {
  return request({
    url: '/system',
    method: 'post',
    data
  })
}

export const systemPutApi = (data) => {
  return request({
    url: '/system',
    method: 'put',
    data
  })
}

export const systemDelApi = (id) => {
  return request({
    url: `/system/${id}`,
    method: 'delete'
  })
}

export const moduleListApi = (params) => {
  return request({
    url: `/module/list/${params.systemId}`,
    method: 'get'
  })
}

export const modulelPostApi = (data) => {
  return request({
    url: '/module',
    method: 'post',
    data
  })
}

export const modulelPutApi = (data) => {
  return request({
    url: '/module',
    method: 'put',
    data
  })
}

export const moduleDelApi = (id) => {
  return request({
    url: `/module/${id}`,
    method: 'delete'
  })
}
