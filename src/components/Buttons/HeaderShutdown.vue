<script setup>
import { useConnectionStore } from '@/stores/connectionStore'

const connectionStore = useConnectionStore()

const handleRestart = () => {
  connectionStore.restart()
}
</script>

<template>
  <router-link to="/" @click="handleRestart">
    <button class="flex text-white text-xs h-full items-center buttons-header-bottom px-1 full-screen">
      <img src="/img/icons/shutdown-icon.webp" :alt="$t('header.shutdown')" class="w-6 h-6 sm:w-7 sm:h-7 mr-0.5 sm:mr-1" />
      <p class="small-p">{{ $t('header.shutdown') }}</p>
    </button>
  </router-link>
</template>
