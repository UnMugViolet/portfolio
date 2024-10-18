<template>
  <div class="flex items-center h-full gap-1 py-1 mt-px sm:w-44 select-none cursor-pointer" @click="toggleWindow">
    <div
      class="flex items-center px-2 w-full h-full bg-pellet-blue hover:brightness-110 rounded-sm"
      :class="activeWindow === entity.id ? 'bg-pellet-blue-active shadow-pellet-footer-active' : 'bg-pellet-blue-deactivated shadow-pellet-footer-deactivated'"
    >
      <div class="flex gap-1 mt-px">
        <img :src="entity.iconSrc" :alt="$t('common.icon') + ' ' + getLocalizedTitle(entity)" class="w-4 h-4" />
        <p class="small-p text-white truncate hidden sm:block">{{ getLocalizedTitle(entity) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

// Define props
const props = defineProps({
  entity: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-window'])

const { entity } = props
const localeStore = useLocaleStore()
const activeWindow = inject('activeWindow')

const toggleWindow = () => {
  emit('toggle-window', entity.id)
}

const getLocalizedTitle = (entity) => {
  return entity.title[localeStore.currentLocale] || entity.title['fr']
}
</script>
