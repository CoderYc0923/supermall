<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 监听组件点击需要增加原生事件native -->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>
<script>
import HomeSwiper from "./childComps/swiper/swiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import {itemListenerMixin, backTopMixin} from "common/mixin"
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTYpe: "pop",
      isTabFixed: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTYpe].list;
    },
    activated() {
      this.$refs.scroll.ScrollTo(0, this.saveY, 0);
      this.$refs.scroll.Refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
    },
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTYpe = "pop";
          break;
        case 1:
          this.currentTYpe = "new";
          break;
        case 2:
          this.currentTYpe = "sell";
          break;
      }
      this.$refs.tabControl1.currentTYpe = index;
      this.$refs.tabControl2.currentTYpe = index;
    },

    contentScroll(position) {
      this.listenShowBackTop(position)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    loadMore() {
      this.getHomeGoods(this.currentTYpe);
    },

    //防抖函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },

    //获取tabControl的offsetTop值
    //所有组件都有一个$el,用于获取组件的元素
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //将服务器的这一页数据追加到数组中
        this.goods[type].page += 1;

        this.$refs.scroll.FinishPullUp();
      });
    },
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: relative;
  top: 0px;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>