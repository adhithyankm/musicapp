<template>
  <Header/>
  <div class="favorites">
    <h1>Favorites</h1>
    <div v-if="likedSongs.length===0" class="empty-message">
      <p>No liked songs yet.</p>
    </div>
    <div v-else>
      <div class="list">
        <div class="item" v-for="song in likedSongs" :key="song.id">
          <div class="item-image-container" @mouseover="hoveredSong=song.id" @mouseleave="hoveredSong=null">
            <img :src="song.content" alt="Song Image" class="item-image"/>
            <button v-if="hoveredSong===song.id" class="play-button" @click="togglePlay(song)">
              <i :class="isPlaying?'pi pi-pause-circle':'pi pi-play-circle'"></i>
            </button>
          </div>
          <div class="item-info">
            <h3>{{song.title}}</h3>
            <p>{{song.subtitle}}</p>
          </div>
          <button class="remove-button" @click="removeLike(song)">
            <i class="pi pi-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <audio ref="audioPlayer" @ended="isPlaying=false"></audio>
  </div>
</template>
<script setup>
import {ref,computed} from "vue"
import store from "@/store"
import Header from "./Header.vue"
const likedSongs=computed(()=>store.getters.likedSongs)
const hoveredSong=ref(null)
const isPlaying=ref(false)
const audioPlayer=ref(null)
const removeLike=(song)=>store.commit("toggleLike",song)
const togglePlay=(song)=>{
  if(!song.audioSrc)return 
  if(audioPlayer.value.paused){
    audioPlayer.value.src=song.audioSrc
    audioPlayer.value.play()
    isPlaying.value=true
  }else{
    audioPlayer.value.pause()
    isPlaying.value=false
  }
}
</script>
