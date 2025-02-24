<template>
  <div class="second-grid">
    <h1 class="grid-title">Trending Beats</h1>
    <div class="beat-box">
      <div class="card-beat" v-for="beat in beats" :key="beat.id">
        <img class="card-image" :src="beat.content" alt="Beat Cover" />
        <button class="audio-play-button" @click="togglePlay(beat, beats)">
          <i :class="beat.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'"></i>
        </button>
        <audio :ref="(el) => (beat.audioRef = el)">
          <source :src="beat.audioSrc" type="audio/mpeg" />
        </audio>
        <div class="song-info">
          <h3>{{ beat.title }}</h3>
          <p>{{ beat.subtitle }}</p>
        </div>

      </div>
    </div>

    <h1 class="grid-title">Trending Music</h1>
    <div class="beat-box">
      <div class="card-beat" v-for="track in music" :key="track.id">
        <img class="card-image" :src="track.content" alt="Track Cover" />
        <button class="audio-play-button" @click="togglePlay(track, music)">
          <i :class="track.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'"></i>
        </button>
        <audio :ref="(el) => (track.audioRef = el)">
          <source :src="track.audioSrc" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  beats: Array,
  music: Array,
  togglePlay: Function,
});
</script>
