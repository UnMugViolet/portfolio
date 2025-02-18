<template>
  <div v-if="isSearchVisible" class="flex items-center top-0 w-full h-5 px-0.5 bg-window-white border-top-grey shadow-header-window">
    <div>
      <p class="small-p text-gray-500 px-1.5 cursor-default">{{ $t('common.address') }}</p>
    </div>
    <div class="w-full h-full bg-white border border-blue-400 pl-1 flex items-center justify-between">
      <div class="flex items-center overflow-hidden">
        <img :src="iconSrc" alt="projects-icon" class="w-3.5 h-3.5" />
        <p class="px-1 small-p cursor-default truncate mt-px">
          {{ title }}
        </p>
      </div>
      <div class="mr-0.5 hover:brightness-110">
        <img src="/img/icons/windows-header-tools/down-icon.webp" alt="voir" class="w-3.5 h-3.5" />
      </div>
    </div>
    <div class="flex items-center px-2 gap-1 w-20">
      <img src="/img/icons/windows-header-tools/right-green-arrow-icon.webp" :alt="$t('common.icon') + ' ' + $t('common.go')" class="w-3.5 h-3.5" />
      <p class="small-p cursor-default">{{ $t('common.go') }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGoBackStore } from '@/stores/goBackStore'
import { useI18n } from 'vue-i18n'

const goBackStore = useGoBackStore()
const { t, te } = useI18n()

const props = defineProps({
  id: String,
  title: String,
  iconSrc: String,
  isSearchVisible: Boolean
})

const formatName = (nameKey) => {
  if (!nameKey) return ''
  // Check if the translation exists
  if (te(nameKey)) {
    const translatedName = t(nameKey)
    return translatedName.toLowerCase().replace(/[()]/g, '').replace(/ /g, '-')
  }
  // If no translation is found, return the original nameKey
  return nameKey.toLowerCase().replace(/[()]/g, '').replace(/ /g, '-')
}

const title = computed(() => {
  let formattedName = ''
  if (props.id === 'myProjects') {
    formattedName = formatName(goBackStore.currentActiveProject?.name)
  } else if (props.id === 'documents') {
    formattedName = formatName(goBackStore.currentActiveDocument?.name)
  }
  return formattedName ? `${props.title}/${formattedName}` : props.title
})
</script>
