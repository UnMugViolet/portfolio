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
</script>

<template>
  <div class="flex flex-col flex-shrink-0 gap-3 bg-window-side-menu w-32 md:w-12.125 h-full p-2.5 overflow-hidden z-20">
    <div
      v-for="item in leftMenu"
      :key="item.id"
      :class="[
        'text-twilight-blue rounded-t-sm',
        item.iconHeader ? 'mt-1 md:mt-2' : '',
        item.bgColor,
        item.bgImage ? 'bg-no-repeat bg-16 bg-bottom-right-picture-menu' : ''
      ]"
      :style="
        item.bgImage
          ? {
              backgroundImage: `url(${item.bgImage})`
            }
          : {}
      "
    >
      <div v-if="item.iconHeader">
        <img :src="item.iconHeader" :alt="getLocalizedTitle(item)" class="absolute w-5 h-5 md:w-7 md:h-7 top-3 md:top-2.5" />
        <div
          :class="[
            'flex flex-row justify-between items-center bg-window-menu-card-header rounded-t-sm px-1 py-px sm:px-2 sm:py-0.5 text-xs-mobile md:text-xs font-bold cursor-pointer hover:text-heroic-blue',
            { 'bg-window-menu-card-header-active text-white hover:text-white': item['headerActive'] }
          ]"
        >
          <h3 class="ml-4 md:ml-6 text-xs-mobile md:text-xxs">{{ getLocalizedTitle(item) }}</h3>
          <img :src="item.iconSrc" alt="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-lg" />
        </div>
      </div>
      <div
        v-else
        :class="[
          'flex flew-row justify-between items-center bg-window-menu-card-header rounded-t-sm px-1 py-px sm:px-2 sm:py-0.5 text-xs-mobile md:text-xs font-bold cursor-pointer hover:text-heroic-blue',
          { 'bg-window-menu-card-header-active text-white hover:text-white': item['headerActive'] }
        ]"
      >
        <h3 class="text-xs-mobile md:text-xxs">{{ getLocalizedTitle(item) }}</h3>
        <img :src="item.iconSrc" alt="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-lg" />
      </div>
      <div class="px-1 py-0.5 md:py-0.75 md:px-2" v-for="subtask in item.subtasks" :key="subtask.id">
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
