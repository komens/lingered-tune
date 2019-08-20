<template>
  <div id="TitleTag">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'TitleTag',
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/common/style.styl'
  #TitleTag
    text-align center
    line-height 40px
    font-size $mFontSize = 15px
    color $defaultBgColor
</style>
