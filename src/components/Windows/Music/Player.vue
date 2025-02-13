<template>
  <div class="absolute bottom-0 w-full bg-player h-14 shadow-inner">
    <div class="flex items-center justify-between h-full px-2">
      <div class="w-1/3">
        <div class="flex items-center gap-2">
          <img
            v-if="currentTrack.album && currentTrack.album.images && currentTrack.album.images.length > 0"
            :src="currentTrack.album.images[2].url"
            alt="cover album musique"
            class="w-10 h-10 rounded-sm"
          />
          <div>
            <p class="text-xs font-trebuchet-pixel">{{ currentTrack.name }}</p>
            <p class="text-xs font-trebuchet-pixel">
              {{ currentTrack.artists && currentTrack.artists.length > 0 ? currentTrack.artists[0].name : '' }}
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
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore'

const props = defineProps({
  playlist: {
    type: Array,
    required: true
  },
  trackToggled: String
})

const currentTrackIndex = ref(0)
const currentTrack = ref({})
const isPlaying = ref(false)
const player = ref(null)
const deviceId = ref(null)
const volumeStore = useVolumeStore()
const currentTime = ref(0)
let intervalId = null
const trackEnded = ref(false)


watch(currentTrackIndex, (newIndex) => {
  if (player.value && deviceId.value) {
    loadTrack(deviceId.value, props.playlist[newIndex].track.uri)
  }
})

watch(
  () => volumeStore.volume,
  (newVolume) => {
    if (player.value) {
      player.value.setVolume(newVolume)
    }
  }
)

watch(
  () => props.trackToggled,
  (newTrackUri) => {
    if (player.value && deviceId.value && newTrackUri) {
      const newIndex = props.playlist.findIndex(track => track.track.uri === newTrackUri)
      if (newIndex !== -1) {
        currentTrackIndex.value = newIndex
        loadTrack(deviceId.value, newTrackUri)
      }
    }
  }
)

onMounted(() => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    player.value = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: (cb) => {
        cb(localStorage.getItem('access_token'))
      },
      volume: volumeStore.volume
    })

    // Error handling
    player.value.addListener('initialization_error', ({ message }) => {
      console.error(message)
    })
    player.value.addListener('authentication_error', ({ message }) => {
      console.error(message)
    })
    player.value.addListener('account_error', ({ message }) => {
      console.error(message)
    })
    player.value.addListener('playback_error', ({ message }) => {
      console.error(message)
    })

    // Playback status updates
    player.value.addListener('player_state_changed', (state) => {
      if (!state) {
        return
      }
      currentTrack.value = state.track_window.current_track
      isPlaying.value = !state.paused
      currentTime.value = state.position

      // Check if the track has ended
      if (state.position === 0 && state.paused && state.track_window.previous_tracks.length > 0) {
        if (!trackEnded.value) {
          trackEnded.value = true
          nextTrack()
        }
      } else {
        trackEnded.value = false
      }
    })

    // Ready
    player.value.addListener('ready', ({ device_id }) => {
      deviceId.value = device_id // Store the device ID
      // Load the initial track when the player is ready
      loadTrack(device_id, props.playlist[currentTrackIndex.value].track.uri)
    })

    // Not Ready
    player.value.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id)
    })

    // Connect to the player!
    player.value.connect()
  }

  // Load the Spotify Web Playback SDK
  const script = document.createElement('script')
  script.src = 'https://sdk.scdn.co/spotify-player.js'
  script.async = true
  document.body.appendChild(script)

  // Update the current time every second
  intervalId = setInterval(() => {
    if (isPlaying.value && player.value) {
      player.value.getCurrentState().then((state) => {
        if (state) {
          currentTime.value = state.position
        }
      })
    }
  }, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  if (player.value) {
    player.value.pause()
    player.value.disconnect()
    player.value = null
  }
})

function togglePlay() {
  if (isPlaying.value) {
    player.value.pause()
  } else {
    player.value.resume()
  }
}

function previousTrack() {
  if (currentTrackIndex.value > 0) {
    currentTrackIndex.value--
  }
}

function nextTrack() {
  if (currentTrackIndex.value < props.playlist.length - 1) {
    currentTrackIndex.value++
  } else {
    currentTrackIndex.value = 0 // Loop back to the first track if at the end of the playlist
  }
}

async function loadTrack(device_id, trackUri) {
  const accessToken = localStorage.getItem('access_token')

  try {
    const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [trackUri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Failed to load track:', errorData)
      throw new Error('Failed to load track')
    }

    // Pause the player after loading the track
    await player.value.pause()
  } catch (error) {
    console.error('Error loading track:', error)
  }
}

function formatTime(ms) {
  if (ms == null || isNaN(ms) || ms == undefined) {
    return '0:00'
  }
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
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
