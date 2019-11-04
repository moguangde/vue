<template lang="pug">
  Modal(title="商品详情" @on-ok="motalOK" v-model='isShow' @on-cancel="motalCancel")
    div.good
      .good-left
        img.good-img(:src='good.img')
        h3
          span.good-name {{good.name}}
          span.good-price {{good.price}}
        span 推荐指数：
        Rate(allow-half v-model="good.score" disabled)
      .good-right
        h3.good-describe {{good.describe}}
    div(slot="footer" style='height:36px')
      Button( size="large" style='float:left' @click='motalCancel') 取消
      .float-right
        InputNumber(v-model='count' :min='0' :max='200')
        Button(@click='motalOK' type='success') 加入购物车

</template>
<script>
export default {
  name: 'GoodModal',
  props: {
    model: Boolean,
    good: {
      index: Number,
      name: String,
      price: String,
      img: String,
      score: Number,
      describe: String
    }
  },
  created () {
    console.log(this.model)
  },
  data () {
    return {
      count: 1,
      isShow: this.model
    }
  },
  methods: {
    motalOK () {
      this.$emit('on-ok', this.good.index, this.count)
    },
    motalCancel () {
      this.$emit('on-cancel')
    }
  },
  watch: {
    model (val) {
      let _this = this
      _this.count = 1
      _this.isShow = val
      if (val) {
        this.$store.getters['shopping/shoppingData'].filter((item, index, arr) => {
          if (item.id === _this.good.id) {
            _this.count = item.count
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.good {
  width: 500px;
  height: 250px;
}
.good-left {
  width: 250px;
  height: 100%;
  .float-left;
}
.good-right {
  width: 250px;
  height: 100%;
  .float-right;
  h3 {
    width: 100%;
    text-indent: 20px;
    letter-spacing: 10px;
    line-height: 30px;
  }
}
.good-img {
  width: 200px;
  height: 200px;
}
.good-price {
  margin-left: 50px;
  color: red;
}
.good-describe {
  .float-right;
}
</style>
