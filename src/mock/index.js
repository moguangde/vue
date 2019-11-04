
import Mock from 'mockjs'
// 格式： Mock.mock( url, post/get , 返回的数据)；
import './data/auth'
import './data/order'
import './data/good'

Mock.setup({
  timeout: '200 - 400'
})
