<script setup>
import { useConnectionStore } from '@/stores/connectionStore'

const connectionStore = useConnectionStore()

const handleDisconnect = () => {
  connectionStore.disconnect()
}
</script>

<template>
  <router-link to="/" @click="handleDisconnect">
    <button
      class="flex text-white text-xs h-full items-center buttons-header-bottom px-1 full-screen"
    >
      <img
        src="/img/icons/key-log-icon.png"
        alt="Se déconnecter"
        class="w-fit h-6 sm:h-4/6 mr-0.5 sm:mr-1"
      />
      <p class="small-p">Se Déconnecter</p>
    </button>
  </router-link>
</template>
