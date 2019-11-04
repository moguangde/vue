<template lang='pug'>
  Layout.full-screen
    Header.admin-title
      #admin-header
        .admin-header-left
          Icon(type="ios-finger-print")
          span 美食之家
          span.title-describe -想你所想
        .admin-header-right
          span 欢迎您,{{$store.getters['auth/user']}}
          Button(@click='logout' ghost) 注销
    Layout
      //- 培训公司不咋滴 不想写了
      //- Sider(hide-trigger)
      //-   Navigation(@on-select='handleRouter')
      Content
        router-view
</template>
<script>
import Navigation from '_components/Navigation.vue'
export default {
  name: 'TheHome',
  components: {
    Navigation
  },
  data () {
    return {}
  },

  methods: {
    handleRouter (name) {
      this.$router.push({ name })
    },
    logout () {
      console.log('注销')
      this.$store.commit('LOGOUT')
      this.$router.push({ name: 'auth' })
    }
  }
}
</script>
<style lang="less">
.admin-title {
  background-color: rgb(85, 170, 0) !important;
}
.admin-header-left {
  font-size: 32px;
  letter-spacing: 16px;
  .title-describe {
    font-size: 24px;
  }
  .float-left;
}
.admin-header-right {
  font-size: 24px;
  .float-right;
  span {
    padding: 10px;
  }
}
</style>
