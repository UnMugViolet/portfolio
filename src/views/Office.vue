<template>
  <section class="h-screen w-screen overflow-hidden bg-office-pic relative" @mousedown="handleOutsideClick">
    <Header v-if="showHeader" 
      :entities="entities"
      @toggle-header="toggleHeader" 
      @toggle-myProjects="openWindow('myProjects')"
      @toggle-music="openWindow('music')"
    />
    <DesktopAppsLayout 
      :entities="entities"
      @toggle-MyProjects="openWindow('myProjects')"
      @toggle-music="openWindow('music')"
    />
    <div v-for="window in entities" :key="window.id">
      <Window v-if="isWindowVisible(window.id)" @close-window="closeWindow(window.id)">
        <component :is="window.component" />
      </Window>
    </div>
    <Footer @toggle-header="toggleHeader" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer/Footer.vue';

import Play from '/src/components/Window/Play.vue';
import MyCV from '/src/components/Window/MyCV.vue';
import Music from '/src/components/Window/Music.vue';
import ContactMe from '/src/components/Window/ContactMe.vue';
import MyProjects from '/src/components/Window/MyProjects.vue';
import DesktopAppsLayout from '../layouts/DesktopAppsLayout.vue';
import Window from '../layouts/Window.vue';

const showHeader = ref(false);
const windows = ref([]);

const entities = ref([
  { 
    id: 'myProjects', 
    title: 'Mes projets', 
    subtitle: 'Voir tous mes projets', 
    imgSrc:'/src/assets/img/icons/projects-icon-lg.png', 
    component: MyProjects 
  },
  { 
    id: 'contact', 
    title: 'Me contacter', 
    subtitle: 'Me contacter', 
    imgSrc: 'src/assets/img/icons/email-icon-lg.png', 
    component: ContactMe 
  },
  { 
    id: 'myCV', 
    title: 'Mon CV', 
    subtitle: 'Mon CV', 
    imgSrc: 'src/assets/img/icons/cv-icon.png', 
    component: MyCV 
  },
  { 
    id: 'music', 
    title: 'Musiques', 
    subtitle: '', 
    imgSrc: '/src/assets/img/icons/playmusic-icon.png', 
    component: Music 
  },
  { 
    id: 'play', 
    title: 'Jouer', 
    subtitle: '', 
    imgSrc: 'src/assets/img/icons/play-large-icon.png', 
    component: Play 
  },
]);

const toggleHeader = () => {
  showHeader.value = !showHeader.value;
};

const openWindow = (windowId) => {
  const existingWindow = windows.value.find((window) => window.id === windowId);
  if (!existingWindow) {
    windows.value.push({ id: windowId, visible: true, component: getComponent(windowId) });
  }
};

const closeWindow = (windowId) => {
  const windowIndex = windows.value.findIndex((window) => window.id === windowId);
  if (windowIndex !== -1) {
    windows.value.splice(windowIndex, 1);
  }
};

const isWindowVisible = (windowId) => windows.value.some((window) => window.id === windowId);

const getComponent = (windowId) => {
  const window = entities.value.find((w) => w.id === windowId);
  return window ? window.component : null;
};

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
};
</script>
