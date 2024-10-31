<template>
  <div class="relative right-0 h-full flex">
    <div id="jsdos-container"
      class="w-full h-full bg-black overflow-y-scroll outline-none resize-none px-1 font-trebuchet-pixel text-md">
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const container = document.getElementById('jsdos-container')
  Dos(container, { wdosboxUrl: 'https://js-dos.com/6.22/current/wdosbox.js' }).ready((fs, main) => {
    fs.extract('https://js-dos.com/cdn/dos/doom.zip').then(() => {
      main(['-c', 'doom.exe'])
    })
  })
})
</script>