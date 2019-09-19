<template>
  <div id="app">
    <my-nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <audio-player v-if="currentSong.id"></audio-player>
  </div>
</template>
<script>
import MyNav from 'views/Nav/'
import AudioPlayer from 'views/AudioPlayer'
import { mapState } from 'vuex'
export default {
	name: 'App',
	components: {
		MyNav,
    AudioPlayer
  },
  computed: {
    ...mapState([
      'currentSong'
    ])
  }
}
</script>
<style lang="stylus">
@import '~assets/css/reset.css'
@import '~assets/css/iconfont/iconfont.css'
body
  font-family '宋体', 'SimSun', '楷体', 'KaiTi', '华文行楷', '华文楷体', 'arial', 'Verdana', 'helvetica', 'sans-serif'
  color #333
</style>
