<template>
	<div id="song-sheet">
		<sheet-type></sheet-type>
    <scroll class="sheet-wrapper">
      <sheet-list class="sheet-list"></sheet-list>
    </scroll>
	</div>
</template>

<script>
  import SheetType from 'components/SongSheet/SheetType'
  import SheetList from 'components/SongSheet/SheetList'
  import Scroll from 'components/common/Bscroll.vue'
export default {
	name: 'SongSheet',
  components: {
    SheetType,
    SheetList,
    Scroll
  }
}
</script>

<style lang="stylus">
  #song-sheet
    .sheet-wrapper
      height calc(100vh - 101px)
      .sheet-list
        padding-bottom 60px
</style>
