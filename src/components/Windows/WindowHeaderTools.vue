<script setup>
import { computed } from 'vue'
import headerToolsData from '@/data/header-tools-data.json'

const emit = defineEmits()

const props = defineProps({
  isGoBackAvailable: Boolean,
  headerToolsId: String,
})

const goBack = () => {
  emit('goback-toggled')
}

const headerTools = computed(() => {
  return headerToolsData.headerToolsItems[props.headerToolsId]
})

headerTools.value.forEach((tool, index) => {
  console.log(`Tool ${index}:`, tool)
  if (tool.hasBackAndForward) {
    console.log(`Tool ${index} hasBackAndForward:`, tool.hasBackAndForward)
  }
})
</script>

<template>
  <div class="flex relative top-0 w-full h-9 bg-window-white border-top-grey overflow-hidden">
    <div v-for="(tools, index) in headerTools" :key="index" class="flex items-center h-full min-w-max">
      <!-- Display Group -->
      <div v-if="tools.type === 'group'" class="flex justify-center items-center">
        <!-- Conditional rendering for back and forward icons if available -->
        <div v-if="tools.hasBackAndForward" class="flex items-center pl-1">
          <div @click="goBack" class="flex items-center border rounded-sm pr-1.5 h-8" :class="{
            'bg-transparent cursor-pointer hover:border-gray-300 hover:shadow-header-tools': isGoBackAvailable,
            'filter grayscale': !isGoBackAvailable
          }">
            <img src="/img/icons/windows-header-tools/right-arrow-green-icon.webp"
              :alt="$t('common.icon') + ' ' + $t('common.back')" class="w-7 h-7 flex-shrink-0" />
            <p class="small-p mr-2">{{ $t('common.back') }}</p>
            <div class="block border-solid down-arrow"></div>
          </div>
          <div class="flex items-center mr-1 filter grayscale">
            <img src="/img/icons/windows-header-tools/left-arrow-green-icon.webp"
              :alt="$t('common.icon') + ' ' + $t('common.next')" class="w-7 h-7 flex-shrink-0" />
            <div class="block border-solid down-arrow ml-px"></div>
          </div>
        </div>

        <!-- Display group items -->
        <div v-for="(item, itemIndex) in tools.items" :key="itemIndex" :class="item.class">
          <img :src="item.icon" :alt="$t('common.icon') + ' ' + $t(item.alt)" :class="[item.iconClass ? item.iconClass : 'w-6 h-6 flex-shrink-0']" />
          <p v-if="item.text" class="hidden md:block small-p ml-1 mr-1.5">{{ $t(item.text) }}</p>
          <div v-if="item.hasArrow" class="block border-solid down-arrow ml-1"></div>
        </div>
      </div>

      <!-- Display Separator -->
      <div v-else-if="tools.type === 'separator'" :class="tools.class"></div>
    </div>
  </div>
</template>

<style scoped>
.down-arrow {
  content: '';
  border-width: 3px 3px 0px;
  border-color: rgb(0, 0, 0) transparent;
}
</style>
