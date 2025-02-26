import { createStore } from 'vuex';

export default createStore({
  state: {
    likedSongs: [], // Store liked songs separately
  },
  mutations: {
    toggleLike(state, song) {
      const index = state.likedSongs.findIndex((item) => item.id === song.id);
      if (index !== -1) {
        state.likedSongs.splice(index, 1); // Remove if already liked
      } else {
        state.likedSongs.push(song); // Add if not liked
      }
    },
  },
  getters: {
    isLiked: (state) => (id) => {
      return state.likedSongs.some((song) => song.id === id);
    },
    getLikedSongs: (state) => {
      return state.likedSongs;
    },
  },
});
