<template lang='pug'>
  #index
    Layout
      Header.index-title
        #index-title-left
          Icon(type="ios-finger-print")
          span 美食之家
          span.title-describe -想你所想
        #index-title-right
          Button(type='success' @click="routeHome") 商家登陆
      Content
        Carousel(autoplay :height=300 )
          CarouselItem(v-for="(item,index) in bannerData"
            :key='index')
            img.carousel-img(:src="item.img" )
        #index-classification
          Button.index-classification-button(@click='switchGoods("all")' ) 全部
          Button.index-classification-button(@click='switchGoods("hotPot")' type='error') 火锅
          Button.index-classification-button(@click='switchGoods("stirFfry")' type='warning') 炒菜
          Button.index-classification-button(@click='switchGoods("drinks")' type='info') 饮料
        #index-goods
          GoodCard.index-good-card(v-for="(item,index) in goods"
          @on-select='selectGood'
          :goodModel="item"
          :key='index'
          :index='index')
        GoodModal(:good='good' :model="detailsShow" @on-cancel="detailsCancel" @on-ok="detailsOk")
        ShoppingCart(:model='shoppingCartShow' :goods='goods' @on-close='shoppingCartShow=false')
    Badge.shopping-cart-button(:count='$store.getters["shopping/shoppingNumber"]' type="error")
      Button(icon='ios-basket' shape="circle" type='success' size='large' @click='openShoppingCart') 购物车

</template>
<script>
import GoodCard from '_components/GoodCard'
import GoodModal from '_components/GoodModal'
import ShoppingCart from '_components/ShoppingCart'
import * as good from '_api/good'
export default {
  name: 'TheIndex',
  components: {
    GoodCard,
    GoodModal,
    ShoppingCart
  },
  data () {
    return {
      detailsShow: false,
      shoppingCartShow: false,
      bannerData: [
        { img: '/banner/1.jpg' },
        { img: '/banner/2.jpg' },
        { img: '/banner/3.jpg' },
        { img: '/banner/4.jpg' },
        { img: '/banner/5.jpg' }
      ],
      goods: [],
      good: {},
      allGoods: [],
      allGoodsDict: {}
    }
  },
  created () {
    let _this = this
    good
      .allgoods()
      .then(data => {
        _this.allGoods = _this.allGoods.concat(data.stirFfry)
        _this.allGoods = _this.allGoods.concat(data.hotPot)
        _this.allGoods = _this.allGoods.concat(data.drinks)
        _this.allGoodsDict = data
        _this.goods = _this.allGoods
      })
      .catch(errMessage => {
        _this.$Message.error(errMessage)
      })
  },
  methods: {
    switchGoods (name) {
      let _this = this
      if (name === 'all') {
        _this.goods = _this.allGoods
      } else {
        _this.goods = _this.allGoodsDict[name]
      }
      console.log(name)
    },
    routeHome () {
      this.$router.push({ name: 'admin-home' })
    },
    selectGood (index) {
      this.good = this.goods[index]
      this.good.index = index
      this.detailsShow = true
    },
    detailsCancel () {
      this.detailsShow = false
    },
    detailsOk (index, count) {
      let _this = this
      let item = this.goods[index]
      console.log(item)
      // 如果count大于0 加入购物车 否则删除购物车
      if (count > 0) {
        _this.$store.commit('shopping/ADD_SP', { id: item.id, count: count, good: item })
      } else {
        _this.$store.commit('shopping/DEL_SP', { id: item.id })
      }

      _this.detailsShow = false
    },
    openShoppingCart () {
      this.shoppingCartShow = true
    }
  }
}
</script>
<style lang="less">
#index{
  img{
    border-radius:5px;
  }
}
#index-classification{
  display: flex;
  justify-content: center;
  .index-classification-button{
    margin:10px;
  }
}
.shopping-cart-button{
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
}
.index-title {
  background-color: rgb(85, 170, 0);
  #index-title-left {
    font-size: 32px;
    letter-spacing: 16px;
    .title-describe {
      font-size: 24px;
    }
    .float-left;
  }
  #index-title-right {
    .float-right;
  }
}
.carousel-img {
  width: 960px;
  height: 300px;
}
#index-goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .index-good-card {
    margin: 24px;
  }
}
</style>
