<template>
  <Header />
  <div class="coverimage">
    <img class="img" src="../assets/images/starss.jpg" alt="coverpage" />
    <div class="details">
      <img class="image" src="../assets/images/coldplay-4.jpg" alt="image" />
      <h1 class="title">Sky full of stars</h1>
      <h2 class="Singer">ColdPlay</h2>
    </div>

    <!-- Play/Pause Button -->
    <button class="play-button" @click="togglePlay()">
      {{ isMainAudioPlaying ? "❚❚" : "▶" }}
    </button>

    <!-- Audio Reference -->
    <audio ref="audioPlayer">
      <source src="../assets/audio/A-Sky-Full-Of-Stars.mp3" type="audio/mpeg" />
    </audio>
  </div>

  <!-- Passing Props to Child -->
  <SecondGrid
    :beats="beats"
    :music="music"
    :togglePlay="togglePlay"
  />
  <ThirdGrid
    :beats="beats"
    :music="music"
    :togglePlay="togglePlay"
  />
</template>


<script setup>
import { ref } from "vue";
import SecondGrid from "./SecondGrid.vue";
import Header from "./Header.vue";
import ThirdGrid from "./ThirdGrid.vue";


const isMainAudioPlaying = ref(false);
const audioPlayer = ref(null);

const beats =ref( [
  {
    id: 1,
    title: "Everybody",
    subtitle: "BackstreetBoys",
    content: new URL('../assets/images/Backstreetboys.jpg', import.meta.url).href,
    audioSrc: new URL('../assets/audio/Everybody.mp3', import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 2,
    title: "Faded",
    subtitle: "Alan Walker",
    content: new URL('../assets/images/faded.jpg', import.meta.url).href,
    audioSrc: new URL('../assets/audio/Faded.mp3', import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 3,
    title: "Memories",
    subtitle: "Maroon 5",
    content: new URL('../assets/images/memories.jpg', import.meta.url).href,
    audioSrc: new URL('../assets/audio/Maroon 5.mp3', import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 4,
    title: "Society",
    subtitle: "Eddie Vedder",
    content: new URL('../assets/images/society.jpg', import.meta.url).href,
    audioSrc: new URL('../assets/audio/Society.mp3', import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 5,
    title: "O Maahi",
    subtitle: "Arijit Singh",
    content: new URL('../assets/images/oh mahi.jpg', import.meta.url).href,
    audioSrc: new URL('../assets/audio/O Maahi.mp3', import.meta.url).href,
    isPlaying: false,
  },
]);

const music = ref([
{
    id: 1,
    title: "Shape of You",
    subtitle: "Ed Sheeran",
    content: new URL("../assets/images/shapeofyou.jpg", import.meta.url).href,
    audioSrc: new URL("../assets/audio/shapeofyou.mp3", import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 2,
    title: "Blinding Lights",
    subtitle: "The Weeknd",
    content: new URL("../assets/images/blindinglights.jpg", import.meta.url)
      .href,
    audioSrc: new URL("../assets/audio/blindinglights.mp3", import.meta.url)
      .href,
    isPlaying: false,
  },
  {
    id: 3,
    title: "Levitating",
    subtitle: "Dua Lipa",
    content: new URL("../assets/images/levitating.jpg", import.meta.url).href,
    audioSrc: new URL("../assets/audio/levitating.mp3", import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 4,
    title: "Took A Pill",
    subtitle: "Mike Posner",
    content: new URL("../assets/images/tookapill.jpg", import.meta.url).href,
    audioSrc: new URL("../assets/audio/tookapill.mp3", import.meta.url).href,
    isPlaying: false,
  },
  {
    id: 5,
    title: "Photograph",
    subtitle: "Ed Sheeran",
    content: new URL("../assets/images/Photograph.jpg", import.meta.url).href,
    audioSrc: new URL("../assets/audio/Photograph.mp3", import.meta.url).href,
    isPlaying: false,
  }
])

// Unified play/pause function
const togglePlay = (item = null, currentArray = null) => {
  const allTracks = [...beats.value, ...music.value];

  // If playing from a child component, pause the main audio
  if (item && isMainAudioPlaying.value) {
    audioPlayer.value.pause();
    isMainAudioPlaying.value = false;
  }

  // Pause all child tracks if main audio plays
  if (!item) {
    allTracks.forEach((track) => {
      if (track.audioRef) {
        track.audioRef.pause();
        track.isPlaying = false;
      }
    });

    // Play/Pause main audio
    if (audioPlayer.value) {
      if (!isMainAudioPlaying.value) {
        if (audioPlayer.value.currentTime < 18) {
          audioPlayer.value.currentTime = 18;
        }
        audioPlayer.value.play();
      } else {
        audioPlayer.value.pause();
        audioPlayer.value.currentTime = 0;
      }
      isMainAudioPlaying.value = !isMainAudioPlaying.value;
    }
  } else if (item) {
    // Play/Pause the child audio
    allTracks.forEach((track) => {
      if (track !== item && track.audioRef) {
        track.audioRef.pause();
        track.isPlaying = false;
      }
    });

    if (item.audioRef) {
      if (item.isPlaying) {
        item.audioRef.pause();
      } else {
        item.audioRef.play();
      }
      item.isPlaying = !item.isPlaying;
    }
  }
};
</script>

