<template>
  <div id="sheet-choose">
    <div class="menu">
      <i class="iconfont" @click="handleHide">&#xe67c;</i>
      <h3>歌单分类</h3>
      <span></span>
    </div>
    <div class="wrapper" ref="shWrapper">
      <ul class="container" @click="handleChoose">
        <li class="title">热门歌单</li>
        <li class="item hot"
            v-for="(sheet, index) in hotSheet"
            :key="'sheet'+index"
        >{{sheet.name}}</li>
        <li class="title">全部歌单</li>
        <li class="item"
            v-for="(sheet, index) in sheetTypes"
            :key="index"
        >{{sheet.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'SheetChoose',
    data() {
      return {
        sheetTypes: [],
        hotSheet: []
      }
    },
    methods: {
      handleHide() {
        this.$emit('hide')
      },
      handleChoose(e) {
        this.$emit('choose', e.target.innerText)
      }
    },
    mounted() {
      this.axios.get('api/category.json').then(res=>{
        const list = res.data.data.sub
        const ans = []
        list.forEach(item =>{
          item.hot ? ans.unshift(item) : null
        })
        this.hotSheet = ans
        this.sheetTypes = list
      })
      this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.shWrapper, {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/common/style'
  #sheet-choose
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh
    background #fff
    z-index 9
    .menu
      display flex
      justify-content space-between
      height 3.125rem
      line-height 3.125rem
      border-bottom 1px solid $borderColor
      padding 0 15px
      .iconfont
        font-size 25px
        color $defaultBgColor
        &:hover
          color $activeBgColor
      span
        width 25px
    .wrapper
      height calc(100vh - 51px)
      overflow hidden
      .container
        box-sizing border-box
        display flex
        flex-wrap wrap
        padding 0 15px
        .item
          padding 0 7px
          height 25px
          line-height 25px
          fontDefault(#fff)
          border 1px solid $borderColor
          margin 4px 7px
          border-radius 5px
          &.hot
            background #d43c33
        .title
          flex 1 1 100%
          padding 6px
          margin 15px 0
          color #444
          border-bottom 1px solid $borderColor
</style>
