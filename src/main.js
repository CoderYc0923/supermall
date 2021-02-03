import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLzayLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//以下代码若是无，swiper6轮播图自动播放无效果
// import Swiper2, {Autoplay} from 'swiper';
// Swiper2.use([Autoplay]);

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus = new Vue()

Vue.use(VueAwesomeSwiper)
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用图片懒加载
Vue.use(VueLzayLoad, {
  loading: require('./assets/images/common/placeholder.png')//占位图
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
