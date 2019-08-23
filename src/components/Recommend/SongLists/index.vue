<template>
  <div id="SongList">
    <title-tag title="推荐歌单" />
    <div class="song-list-wrapper">
      <song-sheet class="song-container" v-for="list in showLists" :key="list.id" :list="list" />
    </div>
    <div class="more">
      <span @click="loadMore">{{loadMoreText}}</span>
    </div>
  </div>
</template>

<script>
  import TitleTag from 'components/common/TitleTag'
  import SongSheet from 'components/common/SongSheet'
  export default {
    name: 'SongLists',
    components: {
      TitleTag,
      SongSheet
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
    .more
      width 80%
      margin 0 auto
      text-align center
      font-size 14px
      padding-bottom 15px
      border-bottom 1px solid #F8F8FF
</style>
