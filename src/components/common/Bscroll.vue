<template>
  <div class="scWrapper" ref="scWrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Bscroll',
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(()=>{
        setTimeout(()=>{
          this.scroll = new BScroll(this.$refs.scWrapper, {
            click: true
          })
        },20)
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .scWrapper
    overflow hidden
</style>
