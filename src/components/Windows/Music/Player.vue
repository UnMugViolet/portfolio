<template>
  <div class="absolute bottom-0 w-full bg-player h-14 shadow-inner">
    <div class="flex items-center justify-between h-full px-2">
      <div class="w-1/3">
        <div class="flex items-center gap-2">
          <img
            v-if="currentTrack.album && currentTrack.album.images"
            :src="currentTrack.album.images[0].url"
            alt="cover album musique"
            class="w-10 h-10 rounded-sm"
          />
          <div class="flex flex-col mr-5 w-full">
            <p class="text-xs font-trebuchet-pixel truncate">{{ currentTrack.name }}</p>
            <p class="text-xs font-trebuchet-pixel truncate">
              {{ currentTrack.artists ? currentTrack.artists[0].name : '' }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-1/3 flex items-center justify-center">
        <button @click="previousTrack" class="w-6 h-6 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 cursor-pointer">
          <img src="/img/icons/music/previous-icon.webp" alt="Musique précédente" class="w-full h-full" />
        </button>
        <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 relative overflow-hidden play-button cursor-pointer"
          :class="{ 'is-playing': isPlaying }"
        ></button>
        <button @click="nextTrack" class="w-6 h-6 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 cursor-pointer">
          <img src="/img/icons/music/next-icon.webp" alt="Musique suivante" class="w-full h-full" />
        </button>
      </div>
      <div class="w-1/3">
        <p class="text-xs font-trebuchet-pixel text-center">{{ formatTime(currentTime) }} / {{ formatTime(currentTrack.duration_ms) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore'

const props = defineProps({
  playlist: {
    type: Array,
    required: true
  },
  trackToggled: String
})


const volumeStore = useVolumeStore()
const currentTrack = ref(props.playlist[0])
const isPlaying = ref(false)
const currentTime = ref(0)
const trackTime = ref(0)
let audioElement = null

const updateCurrentTime = () => {
  if (audioElement) {
    currentTime.value = audioElement.currentTime * 1000 // Convert to milliseconds
  }
  if (currentTime.value >= currentTrack.value.duration_ms) {
    nextTrack()
  }
}

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  const audioFile = '/musics/' + currentTrack.value.id + '.mp3'
  if (isPlaying.value) {
    volumeStore.playAudio(audioFile)
    audioElement = volumeStore.audioElements[audioFile]
    audioElement.addEventListener('timeupdate', updateCurrentTime)
  } else {
    volumeStore.pauseAudio(audioFile)
    if (audioElement) {
      audioElement.removeEventListener('timeupdate', updateCurrentTime)
    }
  }
}

const previousTrack = () => {
  const currentIndex = props.playlist.findIndex(track => track.id === currentTrack.value.id)
  const currentAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
  volumeStore.pauseAudio(currentAudioFile)
  volumeStore.resetAudio(currentAudioFile)
  currentTime.value = 0

  if (audioElement) {
    audioElement.removeEventListener('timeupdate', updateCurrentTime)
  }

  if (currentIndex === 0) {
    currentTrack.value = props.playlist[props.playlist.length - 1]
  } else {
    currentTrack.value = props.playlist[currentIndex - 1]
  }

  const newAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
  if (isPlaying.value) {
    volumeStore.playAudio(newAudioFile)
    audioElement = volumeStore.audioElements[newAudioFile]
    audioElement.addEventListener('timeupdate', updateCurrentTime)
  }
}

const nextTrack = () => {
  const currentIndex = props.playlist.findIndex(track => track.id === currentTrack.value.id)
  const currentAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
  volumeStore.pauseAudio(currentAudioFile)
  volumeStore.resetAudio(currentAudioFile)
  currentTime.value = 0

  if (audioElement) {
    audioElement.removeEventListener('timeupdate', updateCurrentTime)
  }

  if (currentIndex === props.playlist.length - 1) {
    currentTrack.value = props.playlist[0]
  } else {
    currentTrack.value = props.playlist[currentIndex + 1]
  }

  const newAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
  if (isPlaying.value) {
    volumeStore.playAudio(newAudioFile)
    audioElement = volumeStore.audioElements[newAudioFile]
    audioElement.addEventListener('timeupdate', updateCurrentTime)
  }
}

function formatTime(ms) {
  if (ms == null || isNaN(ms) || ms == undefined) {
    return '0:00'
  }
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// watch the  trackToggled prop to play the track if it's different from the current track
watch(() => props.trackToggled, (newTrack) => {
  if (newTrack !== currentTrack.value.id) {
    const currentAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
    volumeStore.pauseAudio(currentAudioFile)
    volumeStore.resetAudio(currentAudioFile)
    currentTime.value = 0

    if (audioElement) {
      audioElement.removeEventListener('timeupdate', updateCurrentTime)
    }

    currentTrack.value = props.playlist.find(track => track.id === newTrack)
    const newAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
    if (isPlaying.value) {
      volumeStore.playAudio(newAudioFile)
      audioElement = volumeStore.audioElements[newAudioFile]
      audioElement.addEventListener('timeupdate', updateCurrentTime)
    }
  }
})

onUnmounted(() => {
  if (audioElement) {
    audioElement.removeEventListener('timeupdate', updateCurrentTime)
  }
  // Reset component state if window is closed 
  const currentAudioFile = '/musics/' + currentTrack.value.id + '.mp3'
  volumeStore.pauseAudio(currentAudioFile)
  volumeStore.resetAudio(currentAudioFile)
  currentTime.value = 0
})
</script>

<style scoped>
.play-button {
  background-image: url('/img/icons/music/play-icon.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.play-button:hover {
  background-image: url('/img/icons/music/play-icon-hover.webp');
}

.play-button.is-playing {
  background-image: url('/img/icons/music/pause-icon.webp');
}
</style>
