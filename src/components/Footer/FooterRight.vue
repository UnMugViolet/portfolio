<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useVolumeStore } from '@/stores/volume';
  import CurrentTime from './CurrentTime.vue';
  import NotificationModal from '@/components/Modals/NotificationModal.vue';
  import MusicVolumeModal from '@/components/Modals/MusicVolumeModal.vue';

  // Initialize refs
  const isFullScreen = ref(false);
  const originalTitle = ref('Mode plein écran');
  const isVolumeSettingsDisplayed = ref(false);
  const musicModalRef = ref(null);
  const isMuted = ref(false);

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

  const toggleMusicModal = () => {
    isVolumeSettingsDisplayed.value = !isVolumeSettingsDisplayed.value;
  };

  const handleClickOutside = (event) => {
    const { target } = event;
    if (musicModalRef.value && !musicModalRef.value.$el.contains(target)) {
      isVolumeSettingsDisplayed.value = false;
    }
  };

  onMounted(() => {
    document.body.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.body.removeEventListener('click', handleClickOutside);
  });

  const volumeStore = useVolumeStore();

  // Get volume from the Pinia store
  const volume = computed(() => volumeStore.volume);

  const volumeIconSrc = computed(() => {
    return volume.value === 0 ? 'src/assets/img/icons/mute-icon-sm.png' : 'src/assets/img/icons/volume-icon-sm.png';
  });

  const handleUpdateVolume = (newVolume) => {
    volumeStore.setVolume(newVolume); // Update the volume in the Pinia store
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
      :src="volumeIconSrc" 
      alt="Gestion du volume" 
      title="Gestion du volume"
      @click.stop="toggleMusicModal">
    <MusicVolumeModal v-if="isVolumeSettingsDisplayed" ref="musicModalRef" @update-volume="handleUpdateVolume"/>
    <NotificationModal class="md:block z-fmax"/>

    <CurrentTime />
  </div>
</template>
