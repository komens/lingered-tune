<template>
  <swiper :options="swiperOption" id="swiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="https://music.163.com/store/newalbum/detail?id=80440087" class="swiper-link">
        <img src="http://p1.music.126.net/eNy8Wi1GdIf_bSvHKZgHOg==/109951164304365040.jpg" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            reverseDirection: true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/common/style.styl'
  .swiper-container
    min-height 174px
    .swiper-link
      img
        width 100%
    .swiper-pagination-bullet-active
      background-color $activeBgColor
</style>