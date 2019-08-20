<template>
  <div id="SongList">
    <title-tag title="推荐歌单" />
    <div class="song-list-wrapper">
      <div class="song-container" v-for="list in showLists" :key="list.id">
        <div class="list-bg" :style="{backgroundImage:'url('+list.coverImgUrl+')'}">
          <p class="play-count">{{list.playCount | playCount}}</p>
          <p class="creator">BY.{{list.creator.nickname | hideMoreText(6)}}</p>
        </div>
        <p class="name">{{list.name | hideMoreText}}</p>
      </div>
    </div>
    <div class="more">
      <span @click="loadMore">{{loadMoreText}}</span>
    </div>
  </div>
</template>

<script>
  import TitleTag from 'components/common/TitleTag'
  export default {
    name: 'SongLists',
    components: {
      TitleTag
    },
    data() {
      return {
        songLists: [],
        showLists: [],
        showIndex: 1,
        loadMoreText: '加载更多 >'
      }
    },
    methods: {
      loadMore() {
        let showLength = this.showLists.length
        let songLength = this.songLists.length
        let start = this.showIndex * 6
        if (showLength <= songLength - 6) {
          this.showLists.push(...this.songLists.slice(start,start + 6))
          this.showIndex ++
        } else if(showLength < songLength) {
          this.showLists.push(...this.songLists.slice(start,songLength))
          this.loadMoreText = '加载完啦！'
        } else {
          this.loadMoreText = '加载完啦！'
          return
        }
      }
    },
    mounted() {
      this.axios.get('api/hot.json')
      .then((res) => {
        this.songLists =  res.data.data;
        this.showLists = res.data.data.slice(0,6)
        console.log(this.showLists)
      })
    },
    filters: {
      hideMoreText(value, max = 19) {
        if(value.length > max) {
          return value.slice(0,max-2) + '...'
        } else {
          return value
        }
      },
      playCount(value) {
        return value > 9999 ?
        Math.floor(value/10000) + '万' :
        value
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/common/style.styl'
  #SongList
    .song-list-wrapper
      display flex
      flex-wrap wrap
      justify-content space-around
      .song-container
        width 30%
        margin-bottom 15px
        .list-bg
          position relative
          background-size cover
          padding-bottom 100%
          font-size 12px
          line-height 16px
          .play-count
            position absolute
            top 0
            right 0
            background rgba(0,0,0,.3)
            color #fff
            font-weight 500
            padding 0 5px
            border-radius 3px
          .creator
            position absolute
            bottom 0
            right 0
            width 100%
            background rgba(0,0,0,.5)
            color #fff
            text-align center
        .name
          margin 3px 0
          font-size 12px
          line-height 14px
    .more
      width 80%
      margin 0 auto
      text-align center
      font-size 14px
      padding-bottom 15px
      border-bottom 1px solid #eee
</style>
