<template>
  <div class="third-grid">
    <div class="topsongs">
      <h1>Top Beats</h1>
      <div class="list">
        <div class="item" v-for="beat in beats" :key="beat.id">
          <div class="item-image-container">
            <img :src="beat.content" alt="Beat Image" class="item-image" />
            <button
              class="play-button"
              @click="togglePlay(beat, beats)"
              aria-label="Play/Pause"
            >
              <i
                :class="
                  beat.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'
                "
              ></i>
            </button>
          </div>
          <div class="item-info">
            <h3>{{ beat.title }}</h3>
            <p>{{ beat.subtitle }}</p>
          </div>
          <button class="like-button"><i class="pi pi-heart" style="font-size: 1rem"></i></button>
          <button class="add-button">Add</button>
          <audio :id="'audio-beat-' + beat.id" class="audio-player">
            <source :src="beat.audioSrc" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>

    <div class="topsongs">
      <h1>Top Songs</h1>
      <div class="list">
        <div class="item" v-for="song in music" :key="song.id">
          <div class="item-image-container">
            <img :src="song.content" alt="Song Image" class="item-image" />
            <button
              class="play-button"
              @click="togglePlay(song, music)"
              aria-label="Play/Pause"
            >
              <i
                :class="
                  song.isPlaying ? 'pi pi-pause-circle' : 'pi pi-play-circle'
                "
              ></i>
            </button>
          </div>
          <div class="item-info">
            <h3>{{ song.title }}</h3>
            <p>{{ song.subtitle }}</p>
          </div>
          <button class="like-button"><i class="pi pi-heart" style="font-size: 1rem"></i></button>
          <button class="add-button">Add</button>
          <audio :id="'audio-music-' + song.id" class="audio-player">
            <source :src="song.audioSrc" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
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
