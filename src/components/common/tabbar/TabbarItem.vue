<template>
  <div class="item" @click="itemClick">
    <div :style="activeStyle"><slot name="slot-icon"></slot></div>
    <div :style="activeStyle"><slot name="slot-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  activated() {
    !isActive;
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("~assets/fonts/icomoon.eot?7kkyc2");
  src: url("~assets/fonts/icomoon.eot?7kkyc2#iefix")
      format("embedded-opentype"),
    url("~assets/fonts/icomoon.ttf?7kkyc2") format("truetype"),
    url("~assets/fonts/icomoon.woff?7kkyc2") format("woff"),
    url("~assets/fonts/icomoon.svg?7kkyc2#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}
.item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.item .icomoon {
  font-family: "icomoon";
  display: block;
  font-size: 16px;
  line-height: 26px;
}

</style>