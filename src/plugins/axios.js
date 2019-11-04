import Vue from 'vue'
import axios from 'axios'
const unkownErrorMessage = '未知错误'
axios.defaults.timeout = 5000 // axios等待时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '' // 接口地址 前后端分离
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  if (!res.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})
const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (response.data.code !== 1) {
          reject(response.data.message)
        }
        resolve(response.data)
      }, err => {
        console.log(err)
        reject(unkownErrorMessage)
      })
      .catch((err) => {
        console.log(err)
        reject(unkownErrorMessage)
      })
  })
}
const get = (url, param) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: param })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
Vue.prototype.$get = get
Vue.prototype.$post = post
