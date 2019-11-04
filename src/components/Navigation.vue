<template lang="pug">
  #navigation-main
    Menu(width="auto" theme="dark" :active-name="$route.name"
    @on-select='onSelect')
      MenuItem(name='admin-home') 欢迎
      MenuGroup(title="订单")
        MenuItem(name='admin-orderToday')
          Icon(type="md-document")
          span 今日订单
        MenuItem(name='admin-orderTotal')
          Icon(type="md-document")
          span 总订单
      MenuGroup(title="商品")
        MenuItem(name='goods') 测试
</template>
<script>
export default {
  name: 'Navigation',
  created: () => {
    console.log(this)
  },
  data () {
    return {}
  },
  methods: {
    onSelect (name) {
      this.$emit('on-select', name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
