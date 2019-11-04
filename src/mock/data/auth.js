import Mock from 'mockjs'

const login = (prarms) => {
  const formUser = JSON.parse(prarms.body)
  if (formUser.username === 'admin' && formUser.password === '123456') {
    return {
      code: 1,
      message: '登录成功',
      user: 'Rui',
      token: 'Basic bGVzc29uLWNsb3VkOmxlc3Nvbi1jbG91ZC1zZWNyZXQ='
    }
  } else {
    return { code: 2, message: '账号密码错误' }
  }
}

const register = (prarms) => {
  const formUser = JSON.parse(prarms.body)
  if (formUser.password === formUser.repassword) {
    return {
      code: 1,
      message: '注册成功'
    }
  } else {
    return { code: 2, message: '注册失败' }
  }
}
Mock.mock('/auth/login', 'post', login)
Mock.mock('/auth/register', 'post', register)
