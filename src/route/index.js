import Vue from 'vue'
import Router from 'vue-router'
import { Routes } from './router'
import iView from 'iview'
import store from '_store'
Vue.use(iView)
Vue.use(Router)
const setTitle = (title) => {
  window.document.title = title || 'admin'
}
iView.LoadingBar.config({
  height: 3
})

const router = new Router({
  mode: 'history',
  routes: Routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.matched.some(route => route.meta.auth)) {
    if (store.getters['auth/isAuth']) {
      if (from.query.redirect === null) {
        next()
      } else {
        let routeName = from.query.redirect
        // 解决循环跳转
        from.query.redirect = null
        next({ name: routeName })
      }
    } else {
      next({
        name: 'auth',
        query: { redirect: to.name } // 登陆成功跳转回来
      })
    }
  }
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
  setTitle(route.meta.title)
})

export default router
