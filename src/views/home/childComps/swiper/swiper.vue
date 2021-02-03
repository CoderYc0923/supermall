<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide :key="index" v-for="(item, index) in banners">
        <a :href="item.link">
          <img :src="item.image" class="swiper-img" @load="imgload"/>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination:{
          el:'.swiper-pagination',
          clickable:true,
        },
        isLoad: false
      }
    };
  },
  methods: {
    imgload() {
      if(!this.isLoad) {
        this.$emit("swiperImgLoad")
        this.isLoad = true
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
}

.swiper-img {
  width: 100%;
}

.swiper-pagination {
  height: 0.23rem;
  font-size: 0.156rem;
  color: #fff;
  letter-spacing: 0;
  line-height: 0.12rem;
  bottom: 20px;
}
</style>