<template>
    <section
      class="h-screen w-screen overflow-hidden bg-office-pic relative"
      @click="handleOutsideClick"
    >
      <Header v-if="showHeader" @toggle-header="toggleHeader"/>
      <DesktopAppsLayout/>
      <Window>
        
      </Window>
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
  
    const toggleHeader = () => {
      showHeader.value = !showHeader.value;
    };
  
    const handleOutsideClick = (event) => {
      if (showHeader.value) {
        const headerElement = document.querySelector('.header-component');
        const startButtonElement = document.querySelector('.start-button');
        const fullScreenElement = document.querySelector('.full-screen');
  
        // Check if the clicked element is the StartButton or FullScreen
        if (
          (startButtonElement && startButtonElement.contains(event.target)) ||
          (fullScreenElement && fullScreenElement.contains(event.target))
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
  
