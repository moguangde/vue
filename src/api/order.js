import Vue from 'vue'
export const historyToday = () => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$get('/api/order/historyToday')
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
