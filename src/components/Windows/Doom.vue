<template>
  <div class="relative right-0 h-full flex">
    <div id="dosbox" class="w-full h-full bg-black pt-6 overflow-hidden"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
let dosbox = null
let isRunning = ref(false)

onMounted(() => {
  if (window.Dosbox) {
    dosbox = new Dosbox({
      id: 'dosbox',
      onload: function (dosbox) {
        dosbox.run('/game/DOOM-@evilution.zip', './DOOM/DOOM.EXE')
        isRunning.value = true
      },
      onrun: function (dosbox, app) {
        console.log("App '" + app + "' is running")
      }
    })
  } else {
    console.error('Dosbox is not defined')
  }
})

onUnmounted(() => {
  if (isRunning.value) {
    // Could not find a way to stop Dosbox from running
    window.location.reload()
  }
})
</script>
