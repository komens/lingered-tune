<template>
  <div class="song-container">
    <div class="list-bg" v-lazy:background-image="list.coverImgUrl">
      <p class="play-count">{{list.playCount | playCount}}</p>
      <p class="creator">BY.{{list.creator.nickname | hideMoreText(6)}}</p>
    </div>
    <p class="name">{{list.name | hideMoreText}}</p>
  </div>
</template>

<script>
  export default {
    name: 'SongSheet',
    props: {
      list: {
        type: Object
      }
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

<style lang="stylus" scoped>
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
</style>
