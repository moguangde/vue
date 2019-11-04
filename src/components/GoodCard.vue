<template lang="pug">
  a(@click="select")
    Card.good-card
      img.good-img(:src='goodModel.img')
      h3
        span.good-name {{goodModel.name}}
        span.good-price {{goodModel.price}}
      span 推荐指数：
      Rate(allow-half v-model="goodModel.score" disabled)
</template>
<script>
export default {
  name: 'GoodCard',
  props: {
    index: Number,
    goodModel: {
      id: Number,
      name: String,
      price: String,
      img: String,
      score: Number
    }
  },
  created () {},
  data () {
    return {}
  },
  methods: {
    select () {
      this.$emit('on-select', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.good-card {
  width: 250px;
  height: 300px;
}
.good-img {
  width: 200px;
  height: 200px;
}
.good-price {
  margin-left: 30px;
  color: red;
}
</style>
