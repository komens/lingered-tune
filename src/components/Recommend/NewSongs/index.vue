<template>
  <div id="NewSongs">
    <title-tag title="最新单曲" />
    <ul class="song-list">
      <li class="song-container" v-for="song in songList" :key="song.id">
        <router-link :to="'/song/'+song.id">
          <span class="left">
            <p class="name">{{song.name}}</p>
            <p class="singer"> - {{song.song.artists[0].name}} - </p>
          </span>
          <span class="iconfont right">
            &#xe63a;
          </span>
        </router-link>
      </li>
    </ul>
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
        songList: []
      }
    },
    mounted() {
      this.axios.get('api/newest.json')
      .then((res) => {
        this.songList =  res.data.data;
        console.log(this.songList)
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
</style>
