import Vue from 'vue'
export const allgoods = () => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$get('/api/good/allGoods')
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
