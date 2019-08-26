<template>
  <div class="audio-player">
    <div class="wrapper">
      <div class="left">
        <div class="music-img"></div>
        <div class="music-title">
          <h3>勿忘心安</h3>
          <p>张杰</p>
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
          	<li v-for="(i) in 15" :key="i">
              <p>世本常态 - 隔壁老樊</p>
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
        showList: false
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
      }
    },
    watch: {
      progress(val) {
        this.isHalf = val % 100 > 50 ? true : false
      }
    },
    mounted() {
      this.audio = new Audio('http://mp3.9ku.com/m4a/464446.m4a')
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
        align-items center
        background #fff
        .music-img
          width 3.125rem
          height 3.125rem
          border-radius 50%
          background url(../../assets/zj.jpg)
          background-size cover
          background-position center center
        .music-title
          padding 0 0.75rem
          h3
            font-size 1rem
            line-height 1.6
            font-weight bold
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
