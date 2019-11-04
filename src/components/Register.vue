<template lang="pug">
  Card(shadow)
    p(slot="title") 注册
    Form(ref="formUser" :model="formUser" :rules="ruleUser")
      FormItem( prop='username')
        Input.register-item(prefix="ios-contact" placeholder="输入账号"  v-model='formUser.username')
      FormItem(prop='password')
        Input.register-item(prefix="ios-female" placeholder="输入密码" type='password' v-model='formUser.password')
      FormItem(prop='repassword')
        Input.register-item(prefix="ios-female" placeholder="输入二次密码" type='password' v-model='formUser.repassword')
      Button.tables-btn( type='info' @click='registerSwitch()') 返回
      Button.tables-btn( type='error' @click='register("formUser")') 注册

</template>
<script>
export default {
  name: 'Register',
  created: () => {},
  data () {
    return {
      formUser: {
        username: '',
        password: '',
        repassword: ''
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
        ],
        repassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    register (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$emit('on-register', this.username, this.password, this.repassword)
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
.register-item {
  .margin-top;
}
</style>
