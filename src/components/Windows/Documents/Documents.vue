<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <div class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5 relative">
      <div class="m-2">
        <section v-if="!isAboutVisible && !isLegalVisible">
          <div class="flex gap-1.5">
            <div
              v-for="page in pages"
              :key="page.name"
              @click="focusPage(page)"
              @dblclick="toggleProject(page)"
              class="flex items-center gap-1"
              :class="{ active: page.isFocused }"
            >
              <img :src="'/img/icons/' + page.icon" alt="Office icon" class="w-11 h-11" :style="{ opacity: page.isFocused ? 0.6 : 1 }" />
              <div
                class="px-1 text-left"
                :style="{
                  backgroundColor: page.isFocused ? '#0B61FF' : 'transparent',
                  color: page.isFocused ? 'white' : 'black'
                }"
              >
                <p class="text-xs font-tahoma font-medium leading-tight">{{ $t(page.name) }}</p>
                <p :class="'text-xxs ' + [page.isFocused ? 'text-gray-192' : 'text-gray-400']">{{ $t(page.type) }}</p>
              </div>
            </div>
          </div>
        </section>
        <About v-else-if="isAboutVisible" />
        <Legal v-else-if="isLegalVisible" />
      </div>
      <button @click="closeProject(currentActivePage)" class="absolute top-0 right-0 bg-black text-white">
        close
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'
import About from './About.vue'
import Legal from './Legal.vue'

const props = defineProps({
  leftMenuType: String
})

const emit = defineEmits(['goback-is-available', 'page-active-name'])

const pages = ref([
  {
    name: 'windows.documents.about.title',
    type: 'common.textDocument',
    icon: 'txt-icon.webp',
    isFocused: false,
    isActive: false
  },
  {
    name: 'windows.documents.legal.title',
    type: 'common.textDocument',
    icon: 'txt-icon.webp',
    isFocused: false,
    isActive: false
  }
])

const isAboutVisible = ref(false)
const isLegalVisible = ref(false)
const currentActivePage = ref([]) 

const toggleProperty= (page, property) => {
  if (page[property]) {
    return
  }

  pages.value.forEach((p) => {
    p[property] = false
  })

  page[property] = !page[property]
}

const toggleProject = (page) => {
  toggleProperty(page, 'isActive')
  currentActivePage.value = page
  emit('goback-is-available')
  emit('page-active-name', page.name)
}

const focusPage = (page) => {
  toggleProperty(page, 'isFocused')
}

const closeProject = () => {
  if (currentActivePage.value) {
    currentActivePage.value.isActive = false
    currentActivePage.value = null
  }
}

watch(
  () => pages.value.map(p => p.isActive),
  (newValues) => {
    isAboutVisible.value = pages.value[0].isActive
    isLegalVisible.value = pages.value[1].isActive
  },
  { immediate: true }
)
</script>

