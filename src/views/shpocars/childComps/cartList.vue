<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        :key="index"
        v-for="(item, index) in list"
        :item-info="item"
      />
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./cartListItem";


export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
  activated() {
    this.$refs.scroll.Refresh()
  }
};
</script>
<style scoped>
.cart-list {
  height: calc(100% - 93px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>