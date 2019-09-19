<template>
	<div id="song-sheet">
		<sheet-type @typechoose="typeChoose"></sheet-type>
    <scroll class="sheet-wrapper">
      <sheet-list class="sheet-list" :songLists="songLists"></sheet-list>
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
  },
  data() {
    return {
      songLists: []
    }
  },
  methods: {
    typeChoose(type) {
      this.axios.get('api/top/playlist?limit=30&cat=' + type)
      .then((res) => {
        this.songLists =  res.data.playlists;
      })
    }
  },
  mounted() {
    this.axios.get('api/top/playlist?limit=30')
      .then((res) => {
        this.songLists =  res.data.playlists;
      })
  }
}
</script>

<style lang="stylus">
  #song-sheet
    .sheet-wrapper
      height calc(100vh - 101px)
      .sheet-list
        padding-bottom 75px
</style>
