<template lang='pug'>
  #auth-main
    Spin(size="large" fix v-if='loadingIsShow')
    vue-particles(color="#282C34"
        :particleOpacity="0.7"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="4"
        linesColor="#282C34"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push")
    p.auth-title 美食之家-后台
    Login.login-card(@on-login='login'
    @on-register-switch='registerSwitch')
    #register-main(:class='{"register-show":registerIsShow}')
      Register.register-card.margin-center(@on-register-switch='registerSwitch' @on-register='register')
    #auth-footer
      h1 脱贫攻坚队
      h1 @只要我够穷 你就一点办法也没有

</template>
<script>
import Login from '_components/Login.vue'
import Register from '_components/Register.vue'
import * as auth from '_api/auth'
export default {
  name: 'TheAuth',
  components: {
    Login,
    Register
  },
  data () {
    return {
      registerIsShow: false,
      loadingIsShow: false
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    login (formUser) {
      let _this = this
      _this.loadingIsShow = true
      auth.login(formUser)
        .then(data => {
          _this.$store.commit('auth/SET_TOKEN', data.token)
          _this.$store.commit('auth/SET_USER', data.user)
          _this.$Message.success(data.message)
          _this.$router.push({ name: 'admin-home' })
        })
        .catch(errMessage => {
          _this.$Message.error(errMessage)
        })
        .finally(() => {
          _this.loadingIsShow = false
        })
    },
    registerSwitch () {
      this.registerIsShow = !this.registerIsShow
    },
    register (username, password, repassword) {
      this.$Message.success('注册成功')
      this.registerSwitch()
    }
  }
}
</script>
<style lang="less">
#auth-main {
  background-image: url('/background.jpg');
  background-size:100% 100%;
  height: 100%;
}
#auth-footer{
  position:fixed;
  bottom: 0;
  .full-width;
}
.auth-title {
  font-size: @normal-font-size*3;
  position: absolute;
  .full-width;
  .text-center;
}
.login-card {
  width: 320px;
  margin-right: 64px!important;
  .margin-top !important;
  .float-right;
}
.register-card {
  width: 384px;
  margin-top: 64px !important;
}
.register-show {
  margin-top: 0% !important;
}
#register-main {
  position: fixed;
  margin-top: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  .full-screen;
  .transition(all 1s);
}
</style>
