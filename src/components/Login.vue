<template lang="pug">
  Card(shadow)
    p(slot="title") 登陆
    Form(ref="formUser" :model="formUser" :rules="ruleUser")
      FormItem( prop='username')
        Input.login-item(prefix="ios-contact" placeholder="输入账号"  v-model='formUser.username')
      FormItem(prop='password')
        Input.login-item(prefix="ios-female" placeholder="输入密码" type='password' v-model='formUser.password')
      .login-item
        Button.tables-btn( type='info' @click='login("formUser")' ) 登陆
        Button.tables-btn( type='success' @click='registerSwitch()') 注册

</template>
<script>
export default {
  name: 'Login',
  created: () => {
    console.log(this)
  },
  data () {
    return {
      formUser: {
        username: '',
        password: ''
      },
      ruleUser: {
        username: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$emit('on-login', this.formUser)
        } else {
          this.$Message.error('登陆信息有误')
        }
      })
    },
    registerSwitch () {
      this.$emit('on-register-switch')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login-item {
  .margin-top;
}
</style>
