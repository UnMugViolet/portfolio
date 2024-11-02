<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <div class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5 relative">
      <div class="m-2">
        <section v-if="!goBackStore.currentActiveDocument">
          <div class="flex flex-wrap md:flex-row md:gap-1.5 flex-col gap-3">
            <div
              v-for="page in pages"
              :key="page.name"
              @click="focusPage(page)"
              @dblclick="toggleProject(page)"
              class="flex items-center gap-1 cursor-pointer"
              :class="{ active: page.isFocused }"
            >
              <img :src="'/img/icons/documents/' + page.icon" alt="Office icon" class="w-11 h-11" :style="{ opacity: page.isFocused ? 0.6 : 1 }" />
              <div
                class="px-1 text-left"
                :style="{
                  backgroundColor: page.isFocused ? '#0B61FF' : 'transparent',
                  color: page.isFocused ? 'white' : 'black'
                }"
              >
                <p class="text-xs font-tahoma font-medium leading-tight">{{ $t(page.name) }}</p>
                <p :class="'text-xxs ' + [page.isFocused ? 'text-gray-192' : 'text-gray-400']">{{ $t(page.type) }}</p>
                <p :class="'text-xxs ' + [page.isFocused ? 'text-gray-192' : 'text-gray-400']">{{ page.size }}</p>
              </div>
            </div>
          </div>
        </section>
        <component :is="currentComponent" v-if="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useGoBackStore } from '@/stores/goBackStore'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'
import About from './About.vue'
import Legal from './Legal.vue'

// Stores management
const goBackStore = useGoBackStore()

const props = defineProps({
  leftMenuType: String
})

const pages = ref([
  {
    name: 'windows.documents.about.title',
    type: 'common.textDocument',
    icon: 'txt-icon.webp',
    size: '5KB',
    isFocused: false,
    isActive: false,
    component: 'About'
  },
  {
    name: 'windows.documents.legal.title',
    type: 'common.textDocument',
    icon: 'txt-icon.webp',
    size: '11KB',
    isFocused: false,
    isActive: false,
    component: 'Legal'
  }
])

const componentMap = {
  About,
  Legal
}

const currentComponent = computed(() => {
  const activeDocument = goBackStore.currentActiveDocument
  return activeDocument ? componentMap[activeDocument.component] : null
})

onUnmounted(() => {
  goBackStore.currentActiveDocument = null
})

const toggleProperty = (page, property) => {
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
  goBackStore.currentActiveDocument = page
}

const focusPage = (page) => {
  toggleProperty(page, 'isFocused')
}
</script>
