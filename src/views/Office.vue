<template>
  <section class="h-screen w-screen overflow-hidden bg-office-pic relative" @mousedown="handleOutsideClick">
    <Header v-if="showHeader" @toggle-header="toggleHeader" @toggle-myProjects="openWindow('myProjects')"/>
    <DesktopAppsLayout @toggle-MyProjects="openWindow('myProjects')" />
    <div v-for="window in windows" :key="window.id">
      <Window v-if="window.visible" @close-window="closeWindow(window.id)">
        <MyProjects />
      </Window>
    </div>
    <Footer @toggle-header="toggleHeader" />
  </section>
</template>

<script setup>
import Footer from '/src/components/Footer/Footer.vue';
import Header from '/src/components/Header.vue';
import DesktopAppsLayout from '../layouts/DesktopAppsLayout.vue';
import MyProjects from '../components/Office/MyProjects.vue';
import Window from '../layouts/Window.vue';
import { ref } from 'vue';

const showHeader = ref(false);
const windows = ref([]);

const toggleHeader = () => {
  showHeader.value = !showHeader.value;
};

const openWindow = (windowId) => {
  const existingWindow = windows.value.find((window) => window.id === windowId);
  if (!existingWindow) {
    // Create a new window object
    windows.value.push({ id: windowId, visible: true, component: 'MyProjects' });
  }
};

const closeWindow = (windowId) => {
  const windowIndex = windows.value.findIndex((window) => window.id === windowId);
  if (windowIndex !== -1) {
    // Close the window by setting its visibility to false
    windows.value.splice(windowIndex, 1);
  }
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

  
