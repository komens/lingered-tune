<template>
  <div id="sheet-list">
    <song-sheet v-for="sheet in songLists" :key="sheet.id" :list="sheet"></song-sheet>
  </div>
</template>

<script>
  import SongSheet from 'components/common/SongSheet'
  export default {
    name: 'SheetList',
    components: {
      SongSheet
    },
    data() {
      return {
        songLists: []
      }
    },
    mounted() {
      this.axios.get('api/hot.json')
      .then((res) => {
        this.songLists =  res.data.data;
        console.log(this.showLists)
      })
    }
  }
</script>

<style lang="stylus" scoped>
  #sheet-list
    z-index 1
    display flex
    flex-wrap wrap
    justify-content space-around
</style>
