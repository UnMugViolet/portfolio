<template>
  <div class="relative top-0 w-full h-6 mt-6 bg-window-white flex justify-between">
    <div
      class="w-full h-full px-0.5 pt-0.5 pb-px flex items-center border-window-header-right border-window-header-bot"
    >
      <WindowDropdown v-for="(item, index) in dropdownItems" :key="index">
        <template #text>
          {{ item }}
        </template>
      </WindowDropdown>
    </div>
    <div class="flex items-center h-6 w-10">
      <img
        src="/img/icons/windows-header-window-icon.png"
        alt="icone mes projets"
        class="h-full pt-0.5 border-window-header-bot"
      />
    </div>
  </div>
</template>

<script setup>
import WindowDropdown from '@/components/Buttons/WindowDropdown.vue'

const props = defineProps({
  dropdownItems: {
    type: Array,
    default: () => []
  }
})
</script>
