<template>
  <div id="sheet-choose">
    <div class="menu">
      <i class="iconfont" @click="handleHide">&#xe67c;</i>
      <h3>歌单分类</h3>
      <span></span>
    </div>
    <ul class="container">
      <li>地挥洒</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SheetChoose',
    data() {
      return {
        sheetTypes: ['流行','影视原声']
      }
    },
    methods: {
      handleHide() {
        this.$emit('hide')
      }
    },
    mounted() {
      this.axios.get('api/category.json').then(res=>{
        console.log(res)
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
    .menu
      display flex
      justify-content space-between
      height 3.125rem
      line-height 3.125rem
      border-bottom 1px solid $borderColor
      .iconfont
        font-size 25px
        color $defaultBgColor
        &:hover
          color $activeBgColor
      span
        width 25px
</style>
