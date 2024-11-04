<script setup>
import { ref, reactive, watch, computed, onUnmounted } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'
import { useGoBackStore } from '@/stores/goBackStore'

import projectData from '@/data/projects-data.json'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'
import HomeserverContent from '@/components/Windows/MyProjects/HomeserverContent.vue'
import ClenchContent from '@/components/Windows/MyProjects/ClenchContent.vue'
import LogmaContent from '@/components/Windows/MyProjects/LogmaContent.vue'
import PangaiaContent from '@/components/Windows/MyProjects/PangaiaContent.vue'
import Emc2Content from './MyProjects/Emc2Content.vue'

const props = defineProps({
  leftMenuType: String
})

// Locale management
const localeStore = useLocaleStore()
const goBackStore = useGoBackStore()

onUnmounted(() => {
  goBackStore.currentActiveProject = null
})

const categories = ref(
  projectData.categories.map((category) => ({
    ...category,
    projects: category.projects.map((project) => ({ ...project, isFocus: false, isActive: false }))
  }))
)

const state = reactive({
  selectedProject: null
})

const focusProject = (project) => {
  if (project.isFocus) {
    return
  }

  project.isFocus = !project.isFocus

  categories.value.forEach((category) => {
    category.projects.forEach((p) => {
      if (p.name !== project.name) {
        p.isFocus = false
      }
    })
  })
  state.selectedProject = project
}

const toggleProject = (project) => {
  // Before opening a project, close all others
  closeAllProjects()

  // Then open the selected project
  project.isActive = true
  state.selectedProject = project

  goBackStore.currentActiveProject = project
}

const closeAllProjects = () => {
  categories.value.forEach((category) => {
    category.projects.forEach((project) => {
      project.isActive = false
    })
  })
}

// Map of component names to component objects
const componentMap = {
  HomeserverContent,
  ClenchContent,
  LogmaContent,
  PangaiaContent,
  Emc2Content
}

// Computed property that returns the component object based on the componentName of the selected project
const selectedComponent = computed(() => {
  if (goBackStore.currentActiveProject) {
    return componentMap[goBackStore.currentActiveProject.componentName]
  }
  return null
})

const getLocalizedCategoryName = (category) => {
  return category.name[localeStore.currentLocale] || category.name['fr']
}

// Computed property to get the localized title
const localizedTitle = computed(() => {
  return goBackStore.currentActiveProject?.title[localeStore.currentLocale] || goBackStore.currentActiveProject?.title['fr']
})

// Computed property to get the localized date
const localizedDate = computed(() => {
  return goBackStore.currentActiveProject?.date[localeStore.currentLocale] || goBackStore.currentActiveProject?.date['fr']
})

// Watch for changes in currentActiveProject
watch(
  () => goBackStore.currentActiveProject,
  (newProject) => {
    if (!newProject) {
      closeAllProjects()
    }
  },
  { immediate: true }
)

// Unfocus the project when the user clicks outside the project card
window.addEventListener('click', (e) => {
  if (!e.target.closest('.project-card') && state.selectedProject) {
    state.selectedProject.isFocus = false
    state.selectedProject = null
  }
})
</script>

<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <!-- Content of project -->
    <div v-if="goBackStore.currentActiveProject" class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5">
      <div class="m-2">
        <div class="w-full gap-4 mb-3">
          <h2>{{ localizedTitle }}</h2>
          <div class="flex items-center text-sm gap-0.5 mt-1" v-if="goBackStore.currentActiveProject.date">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"
              />
            </svg>
            <h2>{{ localizedDate }}</h2>
          </div>
        </div>
        <!-- Component for the content is loaded there -->
        <component :is="selectedComponent" />
      </div>
    </div>
    <!-- Content window Foreach categories and projects -->
    <div v-else class="flex flex-col w-full h-full bg-white overflow-auto pt-0.5">
      <div v-for="category in categories" :key="category.name" class="relative group mb-3">
        <h1 class="text-xs font-semibold px-3">{{ getLocalizedCategoryName(category) }}</h1>
        <div class="absolute left-[-12px] top-5 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>

        <!-- Content for the projects -->
        <div class="flex flex-wrap gap-2 pt-2 md:pt-3 pb-3 w-full">
          <div
            v-for="project in category.projects"
            :key="project.name"
            @click="focusProject(project)"
            @dblclick="toggleProject(project)"
            class="flex items-center px-4 pb-2 gap-2.5 cursor-pointer project-card"
            :class="{ active: project.isFocus }"
          >
            <img :src="'/img/icons/' + project.icon" alt="project" class="w-10 h-10" :style="{ opacity: project.isFocus ? 0.5 : 1 }" />
            <p
              class="text-xs font-tahoma font-medium"
              :style="{
                backgroundColor: project.isFocus ? '#0B61FF' : 'transparent',
                color: project.isFocus ? 'white' : 'black'
              }"
            >
              {{ project.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
