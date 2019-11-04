<template lang="pug">
  #shoppingCart
    Drawer(title="购物车" :closable="false" v-model="myShoppingCartShow" @on-close='onClose' width=320)
      .shopping-cards
        Card.margin-top(v-for='(item,index) in $store.getters["shopping/shoppingData"]'
        :key='index')
          Button(size='small' slot="title" shape="circle" icon="md-close" @click='delSP(item)' type='error')
          .shopping-card
            .shopping-card-left
              img.shopping-card-img(:src='item.good.img')
            .shopping-card-right
              h3 {{item.good.name}}
              h3 数量：
              InputNumber(v-model='item.count' :min='1' :max='200')
      .shopping-buttons
        Button(type='warning' @click='check') 结账

</template>
<script>
export default {
  name: 'ShoppingCart',
  props: {
    model: Boolean,
    goods: Array
  },
  created () {},
  data () {
    return {
      myShoppingCartShow: this.model
    }
  },
  watch: {
    model (val) {
      this.myShoppingCartShow = val
      if (val) {
      }
    }
  },
  methods: {
    onClose () {
      this.$emit('on-close')
    },
    delSP (good) {
      this.$store.commit('shopping/DEL_SP', good.id)
    },
    check () {
      this.$store.commit('shopping/CHECK')
      this.$Message.success('结账成功')
      this.onClose()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.ivu-card-head {
  padding: 3px !important;
}
.shopping-card {
  width: 100%;
  height: 100px;
  .shopping-card-left {
    .float-left;
  }
  .shopping-card-right {
    text-align: center;
    margin-top: 10px;
    .float-right;
  }
}

.shopping-card-img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.shopping-buttons {
  position: fixed;
  bottom: 8px;
  right: 20px;
  z-index: 99;
}
</style>
