<template>
  <div class="goods-list">
    <goods-list-item :key="index" v-for="(item,index) in goods" :goodsItem="item">

    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>
<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>