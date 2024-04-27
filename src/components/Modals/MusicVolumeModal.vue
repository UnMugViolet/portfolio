
<script setup>
  import { ref } from 'vue'

  const volume = ref(50) // Initial volume level
  const isMuted = ref(false)

  const toggleMute = () => {
    isMuted.value = !isMuted.value
  }

  const adjustVolume = () => {
    // Adjust volume here
  }
</script>

<template>
  <div class="absolute bottom-10 right-16">
    <div class="flex items-center flex-col space-x-2">
      <div class="w-2 h-24 relative">
        <input type="range" min="0" max="2" v-model="volume" class="slider" @input="adjustVolume" :disabled="isMuted">
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: absolute;
  bottom: 0;
  writing-mode: bt-lr; /* IE/Edge */
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 8px;
  height: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
}
</style>