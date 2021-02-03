<template>
  <tabbar>
      <tabbar-item path="/home">
        <i slot="slot-icon" class="icomoon"></i>
        <div slot="slot-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category"> 
        <i slot="slot-icon" class="icomoon"></i>
        <div slot="slot-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/shopcars">
        <i slot="slot-icon" class="icomoon"></i>
        <div slot="slot-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <i slot="slot-icon" class="icomoon"></i>
        <div slot="slot-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>
<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style scoped>
</style>