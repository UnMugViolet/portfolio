<template>
  <MetaUpdater />
  <section class="h-svh w-screen overflow-hidden bg-office-pic bg-no-repeat bg-cover bg-center relative" @mousedown="handleOutsideClick">
    <Header
      v-if="showHeader"
      :entities="entities"
      @toggle-header="toggleHeader"
      @toggle-myProjects="openWindow('myProjects')"
      @toggle-contact="openWindow('contact')"
      @toggle-myCV="openWindow('myCV')"
      @toggle-documents="openWindow('documents')"
      @toggle-pictures="openWindow('pictures')"
      @toggle-music="openWindow('music')"
      @toggle-calendar="openWindow('calendar')"
      @toggle-minesweeper="openWindow('minesweeper')"
      @toggle-notepad="openWindow('notepad')"
      @toggle-doom="openWindow('doom')"
      @toggle-terminal="openWindow('terminal')"
    />
    <DesktopAppsLayout
      :entities="entities"
      @toggle-MyProjects="openWindow('myProjects')"
      @toggle-contact="openWindow('contact')"
      @toggle-myCV="openWindow('myCV')"
      @toggle-music="openWindow('music')"
      @toggle-minesweeper="openWindow('minesweeper')"
      @toggle-notepad="openWindow('notepad')"
      @toggle-doom="openWindow('doom')"
    />
    <div v-for="window in windows" :key="window.id">
      <Window
        v-if="isWindowVisible(window.id)"
        v-show="window.visible"
        @toggle-minimize="minimizeWindow(window.id)"
        @close-window="closeWindow(window.id)"
        @mousedown="handleWindowClick(window.id)"
        :id="window.id"
        :title="window.title"
        :iconSrc="window.iconSrc"
        :initPositionX="window.initPositionX"
        :initPositionY="window.initPositionY"
        :initWidth="window.initWidth"
        :initHeight="window.initHeight"
        :minWidth="window.minWidth"
        :minHeight="window.minHeight"
        :headerToolsId="window.headerToolsId"
        :menuHeaderItemsId="window.menuHeaderItemsId"
        :resizable="window.resizable"
        :windowsHeaderLogo="window.windowsHeaderLogo"
        :isSearchVisible="window.isSearchVisible"
        :style="{ zIndex: findWindowZIndex(window.id) }"
      >
        <component :is="window.component" v-bind="window.leftMenuType ? { leftMenuType: window.leftMenuType } : {}" />
      </Window>
    </div>
    <Footer :entities="windows" @toggle-header="toggleHeader" @toggle-window="handleWindowClick" />
  </section>
</template>

<script setup>
import { ref, shallowRef, provide, onMounted, onUnmounted } from 'vue'
import { useWindowsStore } from '@/stores/windowsStore.js'
import { useVolumeStore } from '@/stores/volumeStore.js'
import { useLocaleStore } from '@/stores/localeStore'

import MetaUpdater from '../MetaUpdater.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

import Minesweeper from '@/components/Windows/Minesweeper.vue'
import MyCV from '@/components/Windows/MyCV/MyCV.vue'
import Music from '@/components/Windows/Music/Music.vue'
import ContactMe from '@/components/Windows/ContactMe.vue'
import MyProjects from '@/components/Windows/MyProjects.vue'
import Documents from '@/components/Windows/Documents/Documents.vue'
import Pictures from '@/components/Windows/Pictures.vue'
import Calendar from '@/components/Windows/Calendar/Calendar.vue'
import Notepad from '@/components/Windows/Notepad.vue'
import Doom from '@/components/Windows/Doom.vue'
import Terminal from '@/components/Windows/Terminal.vue'

import DesktopAppsLayout from '@/layouts/DesktopAppsLayout.vue'
import Window from '@/layouts/Window.vue'
import windowsData from '@/data/windows-data.json'

const showHeader = ref(false)
const windows = ref([])
const windowsStore = useWindowsStore()
const volumeStore = useVolumeStore()
const localeStore = useLocaleStore()

onMounted(() => {
  // Ensure the localeStore is updated with the correct locale from localStorage
  const storedLocale = localStorage.getItem('currentLocale') || 'fr'
  localeStore.setLocale(storedLocale)

  windowsStore.loadState()
  volumeStore.playAudio(['/sounds/start-windows.mp3'])
  volumeStore.unmuteAudio()
})

onUnmounted(() => {
  const script = document.getElementById('spotify-player-script')
  if (script) {
    document.head.removeChild(script)
  }
})

// Keep track of the highest z-index
const highestZIndex = ref(0)
provide('highestZIndex', highestZIndex)

// Set activeness of windows
const activeWindow = ref(null)
provide('activeWindow', activeWindow)

// Create components from data json
const components = {
  MyProjects: shallowRef(MyProjects),
  ContactMe: shallowRef(ContactMe),
  MyCV: shallowRef(MyCV),
  Music: shallowRef(Music),
  Minesweeper: shallowRef(Minesweeper),
  Documents: shallowRef(Documents),
  Pictures: shallowRef(Pictures),
  Calendar: shallowRef(Calendar),
  Notepad: shallowRef(Notepad),
  Doom: shallowRef(Doom),
  Terminal: shallowRef(Terminal)
}

// Create the entities array from the data.json
const entities = ref(
  windowsData.map((item) => ({
    ...item,
    component: components[item.component]
  }))
)

const toggleHeader = () => {
  showHeader.value = !showHeader.value
}

const setActiveWindow = (windowId) => {
  activeWindow.value = windowId
}

const openWindow = (windowId) => {
  const existingWindow = windows.value.find((window) => window.id === windowId)
  if (!existingWindow) {
    const entity = entities.value.find((entity) => entity.id === windowId)
    if (entity) {
      highestZIndex.value++ // Increase highestZIndex
      windows.value.push({
        id: windowId,
        visible: true,
        component: shallowRef(entity.component),
        iconSrc: entity.iconSrc,
        title: entity.title,
        zIndex: highestZIndex.value, // Use highestZIndex
        initPositionX: entity.initPositionX,
        initPositionY: entity.initPositionY,
        initWidth: entity.initWidth,
        initHeight: entity.initHeight,
        minWidth: entity.minWidth,
        minHeight: entity.minHeight,
        leftMenuType: entity.leftMenuType,
        headerToolsId: entity.headerToolsId,
        menuHeaderItemsId: entity.menuHeaderItemsId,
        resizable: entity.resizable,
        windowsHeaderLogo: entity.windowsHeaderLogo,
        isSearchVisible: entity.isSearchVisible
      })
      setActiveWindow(windowId) // Set the window clicked as active
      windowsStore.addWindowStore(windowId) // Save state to localStorage
    }
  } else {
    // If window already exists, just bring it to the front
    handleWindowClick(windowId)
  }
}

const findWindowZIndex = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId)
  return window ? window.zIndex : 0
}

const handleWindowClick = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId)
  if (window) {
    if (!window.visible) {
      // If window is not visible, make it visible
      window.visible = true
    }
    if (window.zIndex !== highestZIndex.value) {
      highestZIndex.value++ // Increase highestZIndex
      window.zIndex = highestZIndex.value // Use highestZIndex
    }
    setActiveWindow(windowId) // Set the window clicked as active
  }
}

const closeWindow = (windowId) => {
  const windowIndex = windows.value.findIndex((window) => window.id === windowId)
  if (windowIndex !== -1) {
    windows.value.splice(windowIndex, 1)
    windowsStore.removeWindowStore(windowId) // Remove the window from localstorage
  }
}

const minimizeWindow = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId)
  if (window) {
    window.visible = false
    if (activeWindow.value === windowId) {
      activeWindow.value = null // Set activeWindow to null if the minimized window was active
    }
  }
}

const isWindowVisible = (windowId) => windows.value.some((window) => window.id === windowId)

const handleOutsideClick = (event) => {
  if (showHeader.value) {
    const headerElement = document.querySelector('.header-component')
    const startButtonElement = document.querySelector('.start-button')

    // Cancel close if click occurs on start button
    if (startButtonElement && startButtonElement.contains(event.target)) {
      return
    }

    // Close the header if the clicked element is outside the header
    if (headerElement && !headerElement.contains(event.target)) {
      toggleHeader()
    }
  }

  // Deactivate the active window if the click occurred outside of any window
  const clickedOutsideAnyWindow = windows.value.every((window) => {
    const windowElement = document.getElementById(window.id)
    return windowElement && !windowElement.contains(event.target)
  })

  if (clickedOutsideAnyWindow) {
    setActiveWindow(null)
  }
}

// Open each window that was open before the page was reloaded
windowsStore.openWindowIds.forEach((windowId) => {
  openWindow(windowId)
})
</script>
