<script setup>
  import { ref, onUnmounted } from 'vue'

  const emit = defineEmits(['update-volume'])

  // Retrieve volume level from localStorage if it exists, otherwise set to 1
  const volume = ref(localStorage.getItem('volume') ? parseFloat(localStorage.getItem('volume')) : 1)

  onUnmounted(() => {
    localStorage.setItem('volume', volume.value) // Store volume level in localStorage when the component is unmounted
    emit('update-volume', volume.value) // Emit the 'update-volume' event with the volume value
  })
</script>

<template>
  <section class="absolute bottom-10 right-9 w-20 rounded-t-lg">
    <div class="bg-light-yellow h-44">
        <div class="h-full w-full flex items-center px-2">
          <label class="text-black text-xs font-trebuchet-pixel pr-4" for="volume">Volume</label>
          <input class="slider" type="range" min="0" max="2" v-model.number="volume" @input="adjustVolume">
        </div>
    </div>
  </section>
</template>

<style scoped>

.slider {
  writing-mode: vertical-lr;
  direction: rtl;
  width: 4px; /* Width of the slider thumb */
  padding: 0;
  margin: 0;
  box-shadow: 1px 0 0 #fff,1px 1px 0 #fff,0 1px 0 #fff,-1px 0 0 #a9a9a9,-1px -1px 0 #a9a9a9,0 -1px 0 #a9a9a9,-1px 1px 0 #fff,1px -1px #a9a9a9;
  -webkit-appearance: none;
  appearance: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: url('/src/assets/img/cursors/volume-icon.png') center/contain no-repeat;
  height: 9px; /* Height of the slider thumb */
  width: 20px; /* Width of the slider thumb */
}

.slider::-moz-range-thumb {
  background: url('/src/assets/img/cursors/volume-icon.png') center/contain no-repeat;
  height: 9px; /* Height of the slider thumb */
  width: 20px; /* Width of the slider thumb */
}

</style>