<template lang="pug">
  //- 颜色通过参数控制
  Card.number-card-main(:style='{backgroundColor:color}')
    span {{name}}
    countTo.number-card-number(:startVal=0 :endVal='number' :duration='2000')
</template>
<script>
export default {
  name: 'NumberCard',
  props: {
    name: String,
    number: Number,
    color: String
  },
  created () {
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.number-card-main {
  width: 150px;
  height: 100px;
  display:inline-block;
  font-weight: bold;
  left:0;
  margin:5px;
}
.number-card-number{
  font-size: 32px;
  color: white;
}
</style>
