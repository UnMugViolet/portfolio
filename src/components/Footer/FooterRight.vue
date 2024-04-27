<script setup>
  import { ref } from 'vue';
  import CurrentTime from './CurrentTime.vue';
  import NotificationModal from '@/components/Modals/NotificationModal.vue';

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

  let isVolumeSettingsDisplayed = ref(false);

  const toggleMusicModal = () => {
    isVolumeSettingsDisplayed.value = !isVolumeSettingsDisplayed.value;
  };

</script>

<template>
  <div class="absolute right-0 text-white h-full flex items-center px-1.5 sm:px-3 sm:gap-1 bg-footer-right-component footer-left-shadow select-none">
    <img
      class="w-4 h-4 cursor-pointer"
      src="@/assets/img/icons/full-screen-icon-lg.png"
      alt="Mode plein écran"
      :title="originalTitle"
      @click="enterFullScreen"
      />
    <img 
      class="w-4 h-4 mt-px cursor-pointer" 
      src="@/assets/img/icons/volume-icon-sm.png" 
      alt="Gestion du volume" 
      title="Gestion du volume"
      @click="toggleMusicModal">
    <div 
      v-if="isVolumeSettingsDisplayed"
      class="absolute bottom-10 ">
      <p>Test test test</p>
    </div>
    <NotificationModal class="md:block z-fmax"/>

    <CurrentTime />
  </div>
</template>
