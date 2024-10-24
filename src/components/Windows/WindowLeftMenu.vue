<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'
import leftMenuData from '@/data/left-menu-data.json'

const props = defineProps({
  leftMenuType: String
})

// Get the current locale from the locale store
const localeStore = useLocaleStore()
const currentLocale = computed(() => localeStore.currentLocale)
const leftMenu = leftMenuData.leftMenuItems[props.leftMenuType]

const getLocalizedTitle = (item) => {
  return item.title[currentLocale.value] || item.title['fr']
}

const getLocalizedSubtitle = (subtask) => {
  return subtask.subtitle[currentLocale.value] || subtask.subtitle['fr']
}

console.log("LeftMenu", leftMenu)
</script>

<template>
  <div class="flex flex-col flex-shrink-0 gap-3 bg-window-side-menu w-32 md:w-12.125 h-full p-2.5 overflow-auto">
    <div 
      v-for="item in leftMenu" :key="item.id"
      :class="item.iconUrl ? `text-twilight-blue mt-1 md:mt-2 ${item['bg-color']}` : `text-twilight-blue ${item['bg-color']}`">
    <div v-if="item.iconUrl">
        <img :src="item.iconUrl" :alt="getLocalizedTitle(item)" class="absolute w-5 h-5 md:w-8 md:h-8 top-3 md:top-2.5" />
        <div class="flex flex-row justify-between items-center bg-window-menu-card-header rounded-t-sm px-1 py-px sm:px-2 sm:py-0.5 text-xs-mobile md:text-xs font-bold cursor-pointer hover:text-heroic-blue">
          <h3 class="ml-4 md:ml-6">{{ getLocalizedTitle(item) }}</h3>
          <img src="/img/icons/side-menu/top-icon-card-window.webp" alt="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-lg" />
        </div>
      </div>
      <div v-else
        class="flex flew-row justify-between items-center bg-window-menu-card-header rounded-t-sm px-1 py-px sm:px-2 sm:py-0.5 text-xs-mobile md:text-xs font-bold cursor-pointer hover:text-heroic-blue"
      >
        <h3>{{ getLocalizedTitle(item) }}</h3>
        <img src="/img/icons/side-menu/top-icon-card-window.webp" alt="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-lg" />
      </div>
      <div class="px-1 py-0.75 md:px-2" v-for="subtask in item.subtasks" :key="subtask.id">
        <a v-if="subtask.url" :href="subtask.url" target="_blank" class="flex flex-row items-center gap-1 cursor-pointer hover:underline hover:text-heroic-blue">
          <img :src="subtask.iconUrl" :alt="subtask.subtitle" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          <p class="font-light text-xxs-mobile md:text-xxs">{{ getLocalizedSubtitle(subtask) }}</p>
        </a>
        <div v-else class="flex flex-row items-center gap-1 cursor-pointer hover:underline hover:text-heroic-blue">
          <img :src="subtask.iconUrl" :alt="subtask.subtitle" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          <p class="font-light text-xxs-mobile md:text-xxs">{{ getLocalizedSubtitle(subtask) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
