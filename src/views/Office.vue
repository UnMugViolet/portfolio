<template>
  <section class="h-screen w-screen overflow-hidden bg-office-pic relative" @mousedown="handleOutsideClick">
    <Header v-if="showHeader" 
      :entities="entities"
      @toggle-header="toggleHeader" 
      @toggle-myProjects="openWindow('myProjects')"
      @toggle-contact="openWindow('contact')"
      @toggle-myCV="openWindow('myCV')"
    />
    <DesktopAppsLayout 
      :entities="entities"
      @toggle-MyProjects="openWindow('myProjects')"
      @toggle-contact="openWindow('contact')"
      @toggle-myCV="openWindow('myCV')"
      @toggle-music="openWindow('music')"
      @toggle-play="openWindow('play')"
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
        :style="{zIndex: findWindowZIndex(window.id)}"
        >
        <component :is="window.component" />
      </Window>
    </div>
    <Footer 
      :entities="windows"
      @toggle-header="toggleHeader" 
      @toggle-window="handleWindowClick"
    />
  </section>
</template>

<script setup>
import { ref, shallowRef, provide, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

import Play from '@/components/Window/Play.vue';
import MyCV from '@/components/Window/MyCV.vue';
import Music from '@/components/Window/Music.vue';
import ContactMe from '@/components/Window/ContactMe.vue';
import MyProjects from '@/components/Window/MyProjects.vue';
import DesktopAppsLayout from '../layouts/DesktopAppsLayout.vue';
import Window from '../layouts/Window.vue';

const showHeader = ref(false);
const windows = ref([]);

// Keep track of the highest z-index
const highestZIndex = ref(0);
provide('highestZIndex', highestZIndex);

// Set activeness of windows
const activeWindow = ref(null);
provide('activeWindow', activeWindow);

/* Entities array
  * This array is just hhere to provide basic data for the windows
  * It is not used to render the windows
  * The windows are rendered using the windows array and the openWindow function
*/

const entities = ref([
  { 
    id: 'myProjects', 
    title: 'Mes projets', 
    subtitle: 'Voir tous mes projets', 
    imgSrc:'src/assets/img/icons/projects-icon-lg.png',
    iconSrc: 'src/assets/img/icons/projects-icon-sm.png',
    initPositionX: 180,
    initPositionY: 100,
    component: shallowRef(MyProjects)
  },
  { 
    id: 'contact', 
    title: 'Me contacter', 
    subtitle: 'Me contacter', 
    imgSrc: 'src/assets/img/icons/email-icon-lg.png',
    iconSrc: 'src/assets/img/icons/email-icon-sm.png',
    initPositionX: 210,
    initPositionY: 140,
    component: shallowRef(ContactMe)
  },
  { 
    id: 'myCV', 
    title: 'Mon CV', 
    subtitle: 'Voir le curriculum vitae', 
    imgSrc: 'src/assets/img/icons/cv-icon-lg.png',
    iconSrc: 'src/assets/img/icons/cv-icon-sm.png',
    initPositionX: 240,
    initPositionY: 180,
    component: shallowRef(MyCV)
  },
  { 
    id: 'music', 
    title: 'Mes Musiques', 
    subtitle: '', 
    imgSrc: 'src/assets/img/icons/playmusic-icon-lg.png',
    iconSrc: 'src/assets/img/icons/playmusic-icon-sm.png',
    initPositionX: 130,
    initPositionY: 230,
    component: shallowRef(Music)
  },
  { 
    id: 'play', 
    title: 'Jouer', 
    subtitle: '', 
    imgSrc: 'src/assets/img/icons/play-icon-lg.png', 
    iconSrc: 'src/assets/img/icons/play-icon-sm.png',
    initPositionX: 160,
    initPositionY: 270,
    component: shallowRef(Play)
  },
]);

const toggleHeader = () => {
  showHeader.value = !showHeader.value;
};

const setActiveWindow = (windowId) => {
  activeWindow.value = windowId;
};

const openWindow = (windowId) => {
  const existingWindow = windows.value.find((window) => window.id === windowId);
  if (!existingWindow) {
    const entity = entities.value.find((entity) => entity.id === windowId);
    if (entity) {
      highestZIndex.value++; // Increase highestZIndex
      windows.value.push({ 
        id: windowId, 
        visible: true, 
        component: shallowRef(entity.component),
        iconSrc: entity.iconSrc,
        title: entity.title,
        zIndex: highestZIndex.value, // Use highestZIndex
        initPositionX: entity.initPositionX,
        initPositionY: entity.initPositionY,
      });
      setActiveWindow(windowId); // Set the window clicked as active
      saveState(); // Save state to localStorage
    }
  } else {
    // If window already exists, just bring it to the front
    handleWindowClick(windowId);
  }
};

const findWindowZIndex = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId);
  return window ? window.zIndex : 0;
};

const handleWindowClick = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId);
  if (window) {
    if (!window.visible) {
      // If window is not visible, make it visible
      window.visible = true;
    }
    if (window.zIndex !== highestZIndex.value) {
      highestZIndex.value++; // Increase highestZIndex
      window.zIndex = highestZIndex.value; // Use highestZIndex
    }
    setActiveWindow(windowId); // Set the window clicked as active
  }
};

const closeWindow = (windowId) => {
  const windowIndex = windows.value.findIndex((window) => window.id === windowId);
  if (windowIndex !== -1) {
    windows.value.splice(windowIndex, 1);
    saveState(); // Save state to localStorage
  }
};

const minimizeWindow = (windowId) => {
  const window = windows.value.find((window) => window.id === windowId);
  if (window) {
    window.visible = false;
    if (activeWindow.value === windowId) {
      activeWindow.value = null; // Set activeWindow to null if the minimized window was active
      saveState(); // Save state after minimizing a window
    }
  }
};

const isWindowVisible = (windowId) => windows.value.some((window) => window.id === windowId);

const handleOutsideClick = (event) => {
  if (showHeader.value) {
    const headerElement = document.querySelector('.header-component');
    const startButtonElement = document.querySelector('.start-button');

    // Cancel close if click occurs on start button
    if (
      (startButtonElement && startButtonElement.contains(event.target))
    ) {
      return;
    }

    // Close the header if the clicked element is outside the header
    if (headerElement && !headerElement.contains(event.target)) {
      toggleHeader();
    }
  }

  // Deactivate the active window if the click occurred outside of any window
  const clickedOutsideAnyWindow = windows.value.every((window) => {
    const windowElement = document.getElementById(window.id);
    return windowElement && !windowElement.contains(event.target);
  });
  
  if (clickedOutsideAnyWindow) {
    setActiveWindow(null);
  }
};

// Save state to localStorage
const saveState = () => {
  const openWindowIds = Array.from(windows.value.values(), window => window.id);
  localStorage.setItem('windows', JSON.stringify(openWindowIds));
};

// Load state from localStorage on page load
const loadState = () => {
  const savedWindowIds = JSON.parse(localStorage.getItem('windows'));

  if (savedWindowIds) {
    savedWindowIds.forEach(windowId => {
      openWindow(windowId);
    });
  }
};

onMounted(loadState);

</script>
