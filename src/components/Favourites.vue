<template>
<Header/>
  <div class="favorites">
    <h1>Favorites</h1>
    <div v-if="likedSongs.length === 0">
      <p>No liked songs yet.</p>
    </div>
    <div v-else>
      <div class="list">
        <div class="item" v-for="song in likedSongs" :key="song.id">
          <div class="item-image-container">
            <img :src="song.content" alt="Song Image" class="item-image" />
          </div>
          <div class="item-info">
            <h3>{{ song.title }}</h3>
            <p>{{ song.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import Header from "./Header.vue";


const likedSongs = computed(() => store.getters.getLikedSongs);

console.log(likedSongs, "kdkdkk");

</script>

<style scoped>
     .favorites {
        margin: 20% auto;
        width: 80%;

     }
</style>
