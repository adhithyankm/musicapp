<template>
  <div class="third-grid">
    <div class="topsongs">
      <h1>Top Beats</h1>
      <div class="list">
        <div class="item" v-for="beat in beats" :key="beat.id">
          <div class="item-image-container">
            <img :src="beat.content" alt="Beat Image" class="item-image" />
            <button class="play-button" @click="togglePlay(beat, beats)">
              <i :class="beat.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'"></i>
            </button>
          </div>
          <div class="item-info">
            <h3>{{ beat.title }}</h3>
            <p>{{ beat.subtitle }}</p>
          </div>
          <button class="like-button" @click="toggleLike(beat, 'beats')">
            <i :class="['pi', isLiked(beat, 'beats') ? 'pi-heart-fill liked' : 'pi-heart']"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="topsongs">
      <h1>Top Songs</h1>
      <div class="list">
        <div class="item" v-for="song in music" :key="song.id">
          <div class="item-image-container">
            <img :src="song.content" alt="Song Image" class="item-image" />
            <button class="play-button" @click="togglePlay(song, music)">
              <i :class="song.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'"></i>
            </button>
          </div>
          <div class="item-info">
            <h3>{{ song.title }}</h3>
            <p>{{ song.subtitle }}</p>
          </div>
          <button class="like-button" @click="toggleLike(song, 'music')">
            <i :class="['pi', isLiked(song, 'music') ? 'pi-heart-fill liked' : 'pi-heart']"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '@/store';

const props = defineProps({
  beats: Array,
  music: Array,
  togglePlay: Function, // Passed as a prop from the parent component
});

const toggleLike = (item, type) => {
  console.log("Toggling Like for:", item, "Type:", type);
  store.commit("toggleLike", { ...item, type });
  console.log(store.getters.likedSongs);
};

const isLiked = (item, type) => {
  return store.getters.isLiked(item, type);
};
</script>


<style scoped>
.liked {
  color: red !important;
}
</style>
