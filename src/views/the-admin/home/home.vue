<template lang='pug'>
  #home-main
    #home-left
      Card.good-classification-card
        #good-classification
    #home-right
      NumberCard(v-for="(item,index) in orderData"
      :key="index"
      :number='item.number'
      :color="item.color"
      :name="item.name")
      Card.history-today-card
        #history-today
    #order-money
</template>
<script>
import NumberCard from '_components/NumberCard'
import * as order from '_api/order'
export default {
  name: 'home',
  components: {
    NumberCard
  },
  data () {
    return {
      orderData: [
        { name: '今日订单', number: 2324, color: 'rgb(0, 158, 84)' },
        { name: '总订单', number: 3212, color: 'rgb(167, 50, 50)' },
        { name: '总销量', number: 3651, color: 'rgb(36, 136, 224)' }
      ],
      historyTodayData: {},
      goodClassificationData: {},
      orderMoneyData: {}
    }
  },
  mounted () {
    let _this = this
    order.historyToday().then(data => {
      this.historyTodayData = data.historyToday
      this.goodClassificationData = data.goodClassification
      this.orderMoneyData = data.orderMoney
      console.log(data)
      let historyToday = _this.$echarts.init(document.getElementById('history-today'))
      let goodClassification = _this.$echarts.init(document.getElementById('good-classification'))
      let orderMoney = _this.$echarts.init(document.getElementById('order-money'))
      historyToday.setOption(_this.historyTodayData)
      goodClassification.setOption(_this.goodClassificationData)
      orderMoney.setOption(_this.orderMoneyData)
      // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize', function () {
        historyToday.resize()
        goodClassification.resize()
        orderMoney.resize()
      })
    })
  },
  methods: {}
}
</script>
<style lang="less">
#home-right {
  width: @echarts-width;
  .float-right;
  margin-right:20px !important;
}
#home-left {
  .float-left;
  margin-top: 5px;
  margin-left:20px;
}
#history-today{
  width: calc(@echarts-width -30px);
  height: 300px;
}
#good-classification{
    width: 850px;
  height: 400px;
}
.history-today-card{
  width: 500px;
  height: 320px;

}
.good-classification-card{
  width: 900px;
  height: 425px;
}
#order-money{
  width: 100%;
  height: 500px;
  margin:10px;
}
</style>
