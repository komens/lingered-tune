<template>
	<div id="nav">
		<div class="logo-wrapper">
      <router-link to="/user" class="iconfont user">&#xe64b;</router-link>
      <div to="/" class="logo">余音</div>
      <router-link to="/search" class="iconfont search">&#xe60c;</router-link>
		</div>
    <div class="nav-wrapper">
      <router-link to="/" exact>推荐</router-link>
      <router-link to="/songSheet">歌单</router-link>
      <router-link to="/rankinglist">排行榜</router-link>
      <router-link to="/singers">歌手</router-link>
    </div>
	</div>
</template>

<script>
export default {
	name: 'Nav'
}
</script>

<style lang="stylus">
@import '~assets/common/style.styl'
#nav
  fontDefault($activeFontColor)
  line-height 40px
  a
    color $activeFontColor
  .logo-wrapper
    font-size: 20px
    display flex
    justify-content space-between
    padding 0 20px
    .iconfont
      font-size 18px
  .nav-wrapper
    display flex
    justify-content space-around
    a
      line-height 19px
      box-sizing border-box
      margin-bottom 2px
      &.active
        margin-bottom 0
        color $activeBgColor
        border-radius 1px
        border-bottom 2px solid $activeBgColor
</style>
