<template>
  <div class="wrapper">
     <ul class="content">
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
        <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
       <li>111</li>
     </ul>
  </div>
</template>
<script> 
import BScroll from 'better-scroll'

export default {
  name: "CateGory",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"),{
      probeType: 3,
      pullUpLoad: true,
    })
    this.scroll.on('scroll',(position) => {
      // console.log(position);
    })

    this.scroll.on('pullingUp',() => {
      console.log('加载');
    })
  }
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* overflow: scroll; */
}
</style>