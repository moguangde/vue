import Vue from 'vue'
export const login = (formUser) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$post('/auth/login', formUser)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const register = (formUser) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$post('/auth/register', formUser)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
