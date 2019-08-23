<template>
	<div id="recommend" ref="bsWrapper">
		<div>
      <recommend-swiper></recommend-swiper>
      <song-lists></song-lists>
      <new-songs></new-songs>
    </div>
	</div>
</template>

<script>
 import RecommendSwiper from 'components/Recommend/RecommendSwiper'
 import SongLists from 'components/Recommend/SongLists'
 import NewSongs from 'components/Recommend/NewSongs'
 import BScroll from 'better-scroll'
export default {
	name: 'Recommend',
  components:{
    RecommendSwiper,
    SongLists,
    NewSongs
  },
  methods:{
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.bsWrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus">
  #recommend
    height calc(100vh - 61px)
    overflow hidden
</style>
