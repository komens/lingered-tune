<template>
  <div id="NewSongs">
    <title-tag title="最新单曲" />
    <ul class="song-list">
      <li class="song-container" v-for="song in showLists" :key="song.id">
        <router-link to="/song/+song.id">
          <span class="left">
            <p class="name">{{song.name}}</p>
            <p class="singer"> - {{song.artists[0].name}} - </p>
          </span>
          <span class="iconfont right" @click="AudioChangeSong(song)">
            &#xe63a;
          </span>
        </router-link>
      </li>
    </ul>
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
        step: 10,
        loadMoreText: '加载更多 >'
      }
    },
    methods: {
      loadMore() {
        let showLength = this.showLists.length
        let songLength = this.songLists.length
        if(songLength == showLength) {
          this.showLists = this.songLists.slice(0,this.step)
          this.loadMoreText = "加载全部"
        } else {
          this.showLists = [...this.songLists]
          this.loadMoreText = "已加载全部"
        }
      },
      AudioChangeSong(song) {
        this.$store.commit('AudioSetSongList',this.songLists)
        this.$store.commit('AudioSetCurrentSong',song)
      }
    },
    mounted() {
      this.axios.get('api/top/song')
      .then((res) => {
        this.songLists =  res.data.data;
        this.showLists = res.data.data.slice(0,this.step)
      })
    }
  }
</script>

<style lang="stylus">
  @import '~assets/common/style.styl'
  #NewSongs
    .song-list
      padding-bottom 15px
      .song-container
        a
          box-sizing border-box
          display flex
          justify-content space-between
          align-items center
          width 94%
          margin 0 auto
          padding 6px 10px
          border-bottom 1px solid #F8F8FF
          .left
            .name
              font-size 16px
              font-weight 600
              color #444
            .singer
              font-size 12px
              line-height 16px
              color #757575
              margin-left 4px
          .right
            color $defaultBgColor
    .more
      width 80%
      margin 0 auto
      text-align center
      font-size 14px
      padding-bottom 15px
      border-bottom 1px solid #F8F8FF
</style>
