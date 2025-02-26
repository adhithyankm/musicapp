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
          <button class="like-button" @click="toggleLike(beat)">
            <i :class="isLiked(beat.id) ? 'pi pi-heart-fill' : 'pi pi-heart'"></i>
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
          <button class="like-button" @click="toggleLike(song)">
            <i :class="isLiked(song.id) ? 'pi pi-heart-fill' : 'pi pi-heart'"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
const props = defineProps({
  beats: Array,
  music: Array,
  togglePlay: Function,
});



// Toggle Like Function
const toggleLike = (song) => {
  store.commit("toggleLike", song);
  
};

// Check if song is liked
const isLiked = (id) => computed(() => store.getters.isLiked(id));
</script>
