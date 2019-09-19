<template>
  <div class="audio-player">
    <div class="wrapper">
      <audio :src="songUrl" @canplay="MusicPlayPause" ref="audio"></audio>
      <div class="left">
        <div class="music-img" :style="{'background-image':'url('+song.album.picUrl+')'}"></div>
        <div class="music-title">
          <h3>{{song.name}}</h3>
          <p>{{song.artists[0].name}}</p>
        </div>
      </div>
      <div class="right">
        <div :class="{'music-time-container': true,'half': isHalf}">
          <div class="radius1" :style="{transform:(isHalf ? 'rotateZ('+progressRate+'deg)': null)}"></div>
          <div class="radius2" :style="{transform:(!isHalf ? 'rotateZ('+progressRate+'deg)': null)}"></div>
          <div class="radius3" @click.stop="MusicPlayPause">
            <i class="iconfont" v-if="play">&#xe7af;</i>
            <i class="iconfont" v-else>&#xe628;</i>
          </div>
        </div>
        <div class="music-list">
          <i class="iconfont" @click.stop="handleShowList">&#xe640;</i>
        </div>
      </div>
    </div>
    <transition name="list">
      <div class="music" @click.self="hideList" v-show="showList">
        <Bscroll class="list">
          <ul>
          	<li v-for="s in list" :key="s.id">
              <p>{{s.name}} - {{s.artists[0].name}}</p>
              <i>x</i>
            </li>
          </ul>
        </Bscroll>
      </div>
    </transition>
  </div>
</template>

<script>
  import Bscroll from 'components/common/Bscroll.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'AudioPlayer',
    components: {
      Bscroll
    },
    data() {
      return {
        progress: 0,
        isHalf: false,
        play: false,
        timer: null,
        songUrl: '',
        showList: false,
        audio: null
      }
    },
    methods: {
      MusicPlayPause() {
        if (this.audio.paused) {
          this.audio.play()
          this.timer = setInterval(this.musicProgress, 1000)
        } else {
          this.audio.pause()
          clearInterval(this.timer)
        }
        this.play = !this.audio.paused
      },
      musicProgress() {
        let audio = this.audio
        this.progress = audio.currentTime / audio.duration * 100
      },
      handleShowList() {
        this.showList = true
      },
      hideList() {
        this.showList = false
      }
    },
    computed:{
      progressRate() {
        if(this.progress <= 0) {
          return
        }
        const pro = this.progress % 100
        return pro * 360 / 100 - 180 * this.isHalf
      },
      ...mapState({
        song: 'currentSong',
        list: 'songList'
      })
    },
    watch: {
      progress(val) {
        this.isHalf = val % 100 > 50 ? true : false
      },
      song(val) {
        this.axios.get('api/song/url?id=' + val.id).then((res)=>{
          res = res.data.data[0]
          this.songUrl = res.url
        })
      }
    },
    mounted() {
      this.audio = this.$refs.audio
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/common/style'
  .audio-player
    width 100%
    height 3.75rem
    background rgba(255,255,255,.96 )
    position fixed
    bottom 0
    left 0
    z-index 2
    .wrapper
      display flex
      justify-content space-between
      align-items center
      height 60px
      border-top 1px solid #eee
      padding 0 15px
      .left
        display flex
        width 70%
        align-items center
        background #fff
        .music-img
          flex-basis 50px
          width 3.125rem
          height 3.125rem
          border-radius 50%
          background url(../../assets/zj.jpg)
          background-size cover
          background-position center center
        .music-title
          flex 1
          padding 0 0.75rem
          overflow hidden
          h3
            font-size 1rem
            line-height 1.6
            font-weight bold
            hideText()
          p
            font-size 0.75rem
            color #666
            padding-left 0.125rem
      .right
        background #fff
        display flex
        align-items center
        .music-time-container
          background $defaultBgColor
          width 38px
          height 38px
          border-radius 50%
          position relative
          .radius1
            position absolute
            top 0
            left 0
            width: 50%;
            height: 100%;
            background-color: #ddd;
            border-radius: 38px 0 0 38px;
            transform-origin right center
          .radius2
            position absolute
            top 0
            right 0
            width: 50%;
            height: 100%;
            background-color: #ddd;
            border-radius: 0 38px 38px 0;
            transform-origin left center
          .radius3
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            width 85%
            height 85%
            border-radius 50%
            background #fff
            text-align center
            line-height 32.3px
            .iconfont
              font-size 20px
          &.half
            .radius1
              background-color: #ddd;
              border-radius: 100px 0 0 100px;
            .radius2
              background-color: $defaultBgColor;
        .music-list
          margin-left 15px
          .iconfont
            font-size 22px
  .music
    position absolute
    bottom 0
    left -0
    width 100vw
    height 100vh
    background rgba(0,0,0,.4)
    .list
      position absolute
      left 0
      bottom 0
      width 100%
      height 50vh
      background #fff
      border-radius 20px 20px 0 0
      animation music-list .3s
      ul
        margin-top 10px
        padding 2px 10px
        font-size 14px
        li
          display flex
          justify-content space-between
          padding 12px 0
          border-bottom 1px solid $borderColor
</style>
