import { createStore } from "vuex";
const store = createStore({
  state: {
    likedSongs: [],
  },
  mutations: {
    toggleLike(state, song) {
      const index = state.likedSongs.findIndex(
        (item) => item.id === song.id && item.type === song.type
      );
      if (index !== -1) {
        state.likedSongs.splice(index, 1);
      } else {
        state.likedSongs.push({ ...song });
      }
    },
  },
  getters: {
    isLiked: (state) => (song, type) => {
      return state.likedSongs.some(
        (item) => item.id === song.id && item.type === type
      );
    },
    likedSongs: (state) => state.likedSongs, 
  },
})

export default store

