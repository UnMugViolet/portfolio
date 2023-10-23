<script setup>
  import { ref } from 'vue';
  import CurrentTime from './CurrentTime.vue';

  // Initialize refs
  const isFullScreen = ref(false);
  const originalTitle = ref('Mode plein écran');

  const enterFullScreen = () => {
    if (isFullScreen.value) {
      // Exit full-screen mode
      document.exitFullscreen();
      originalTitle.value = 'Mode plein écran';
      isFullScreen.value = false;
    } else {
      // Enter full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      originalTitle.value = 'Quitter le mode plein écran';
      isFullScreen.value = true;
    }
  };
</script>

<template>
  <div class="text-white h-full flex items-center px-3 gap-1 bg-footer-right-component footer-left-shadow">
    <img
      class="w-4 h-4 cursor-pointer"
      src="src/assets/img/icons/full-screen-icon.png"
      alt="Mettre en plein écran"
      :title="originalTitle"
      @click="enterFullScreen"
    />
    <img class="w-4 h-4 mt-px cursor-pointer" src="src/assets/img/icons/volume-icon.png" alt="Gestion du volume" title="Gestion du volume">
    <CurrentTime />
  </div>
</template>
