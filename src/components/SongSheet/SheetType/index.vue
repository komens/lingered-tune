<template>
  <div id="sheet-type">
    <div class="left">
      <span>{{type}}</span>
      <button @click="handleClick">选择分类<span :class="{iconfont:true,active: showDialog}">&#xe628;</span></button>
      <transition name="right">
        <keep-alive>
          <sheet-choose  v-show="showDialog" @hide="dialogHide" @choose="chooseHandle"></sheet-choose>
        </keep-alive>
      </transition>
    </div>
    <div class="right">
      <span>热门</span>
    </div>
  </div>
</template>

<script>
  import SheetChoose from './SheetChoose'
  export default {
    name: 'SheetType',
    components: {
      SheetChoose
    },
    data() {
      return {
        type: '全部',
        showDialog: false
      }
    },
    methods: {
      handleClick() {
        this.showDialog = true;
      },
      dialogHide() {
        this.showDialog = false
      },
      chooseHandle(type) {
        this.type = type
        this.dialogHide()
      }
    }
  }
</script>

<style lang="stylus">
@import '~assets/common/style'
#sheet-type
  display flex
  justify-content space-between
  border-bottom 1px solid $borderColor
  padding 10px
  .left
    font-weight bold
    button
      defaultBtn()
      border none
      border-radius 0
      color #aaa
      border-bottom 1px solid $defaultBgColor
      padding 3px 6px
      margin-left 5px
      font-size .8em
      .iconfont
        margin-left 0.3125rem
        transition all .3s
        display inline-block
        transform rotateZ(90deg)
        &.active
          transform rotateZ(0)
  .right
    span
      vertical-align  middle
</style>
