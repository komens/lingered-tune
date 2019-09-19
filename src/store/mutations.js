const mutations = {
    AudioSetCurrentSong(state, song) {
        state.currentSong = song;
    },
    AudioSetSongList(state, list) {
        state.songList = list;
    }
}

export default mutations;