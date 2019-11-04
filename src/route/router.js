
import TheAuth from '_views/the-auth'
const TheIndex = () => import('_views/the-index')
const TheAdmin = () => import('_views/the-admin')
const adminIrderToday = () => import('_views/the-admin/orderToday')
const adminOrderTotal = () => import('_views/the-admin/orderTotal')
const adminHome = () => import('_views/the-admin/home')
export const welcome = {
  path: '/auth',
  name: 'auth',
  meta: {
    auth: false,
    title: '登陆/注册'
  },
  component: TheAuth

}
export const index = {
  path: '/',
  name: 'index',
  meta: {
    auth: false,
    title: '首页'
  },
  component: TheIndex

}

export const admin = {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  meta: {
    auth: false,
    title: '后台管理'
  },
  children: [
    {
      path: 'home',
      name: 'admin-home',
      meta: {
        title: '欢迎'
      },
      component: adminHome
    },
    {
      path: 'orderToday',
      name: 'admin-orderToday',
      meta: {
        title: '今日订单'
      },
      component: adminIrderToday
    },
    {
      path: 'orderTotal',
      name: 'admin-orderTotal',
      meta: {
        title: '总订单'
      },
      component: adminOrderTotal
    }
  ]

}
export const Routes = [
  welcome, index, admin
]
