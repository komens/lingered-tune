<template>
  <div id="app">
    <my-nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import MyNav from 'views/Nav/'
export default {
	name: 'App',
	components: {
		MyNav
	}
}
</script>
<style lang="stylus">
@import '~assets/css/reset.css'
@import '~assets/css/iconfont/iconfont.css'
body
  font-family '宋体', 'SimSun', '楷体', 'KaiTi', '华文行楷', '华文楷体', 'arial', 'Verdana', 'helvetica', 'sans-serif'
  color #333
</style>
