<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore'
import { useI18n } from 'vue-i18n'
import CurrentTime from './CurrentTime.vue'
import NotificationModal from '@/components/Modals/NotificationModal.vue'
import MusicVolumeModal from '@/components/Modals/MusicVolumeModal.vue'
import LanguageModal from '@/components/Modals/LanguageModal.vue'

const volumeStore = useVolumeStore()
const volume = computed(() => volumeStore.volume)
const { locale } = useI18n()

const localeNames = {
  en: 'EN',
  fr: 'FR'
}

// Initialize refs
const isFullScreen = ref(false)
const originalTitle = ref('Mode plein écran')
const isVolumeSettingsDisplayed = ref(false)
const isLanguageSettingsDisplayed = ref(false)
const musicModalRef = ref(null)
const storedLocale = localStorage.getItem('currentLocale')
const currentLocale = ref(storedLocale || locale.value)

const enterFullScreen = () => {
  if (isFullScreen.value) {
    // Exit full-screen mode
    document.exitFullscreen()
    originalTitle.value = 'Mode plein écran'
    isFullScreen.value = false
  } else {
    // Enter full-screen mode only if the device is not a mobile device
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }
    originalTitle.value = 'Quitter le mode plein écran'
    isFullScreen.value = true
  }
}

const toggleMusicModal = () => {
  isVolumeSettingsDisplayed.value = !isVolumeSettingsDisplayed.value
  if (isVolumeSettingsDisplayed.value) {
    isLanguageSettingsDisplayed.value = false
  }
}

const handleClickOutside = (event) => {
  const { target } = event
  if (musicModalRef.value && !musicModalRef.value.$el.contains(target)) {
    isVolumeSettingsDisplayed.value = false
  }
  if (languageModalRef.value && !languageModalRef.value.$el.contains(target)) {
    isLanguageSettingsDisplayed.value = false;
  }
}

onMounted(() => {
  document.body.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.body.removeEventListener('click', handleClickOutside)
})

const volumeIconSrc = computed(() => {
  return volume.value === 0 ? '/img/icons/mute-icon-sm.webp' : '/img/icons/volume-icon-sm.webp'
})

// Function to toggle the language modal
const toggleLanguageModal = () => {
  isLanguageSettingsDisplayed.value = !isLanguageSettingsDisplayed.value
  if (isLanguageSettingsDisplayed.value) {
    isVolumeSettingsDisplayed.value = false
  }
}

const flagSrc = computed(() => {
  return `/img/icons/langs/flag-${currentLocale.value}.webp`
})
</script>

<template>
  <div class="absolute right-0 text-white h-full flex items-center px-1.5 sm:px-3 gap-0.5 bg-footer-right-component footer-left-shadow select-none">
    <div class="flex flex-row items-center justify-center gap-px">
      <img 
        class="w-4 h-3 cursor-pointer " 
        :src="flagSrc"
        :alt="$t('alt.currLang') + ' ' + localeNames[currentLocale]" 
        :title="$t('alt.currLang') + ' ' + localeNames[currentLocale]"
        @click="toggleLanguageModal"
        />
    </div>
    <img class="w-4 h-4 cursor-pointer" src="/img/icons/full-screen-icon-sm.webp" alt="Mode plein écran" :title="originalTitle" @click="enterFullScreen" />
    <img class="w-4 h-4 mt-px cursor-pointer" :src="volumeIconSrc" alt="Gestion du volume" title="Gestion du volume" @click.stop="toggleMusicModal" />
    <MusicVolumeModal v-if="isVolumeSettingsDisplayed" ref="musicModalRef" />
    <LanguageModal v-if="isLanguageSettingsDisplayed" :currentLocale="currentLocale" />
    <NotificationModal class="md:block z-fmax" />
    <CurrentTime />
  </div>
</template>

