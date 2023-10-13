<template>
    <section class="h-screen w-screen overflow-hidden bg-office-pic relative">
      <Header v-if="showHeader" />
      <div></div>
      <Footer @toggle-header="toggleHeader" />
    </section>
  </template>
  
  <script setup>
  import Footer from '../components/Footer/Footer.vue';
  import Header from '../components/Header/Header.vue';
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const showHeader = ref(false);
  
  const toggleHeader = () => {
    showHeader.value = !showHeader.value;
  };
  const closeHeader = () => {
    showHeader.value = false;
  };
  
  const handleDocumentClick = (event) => {
    if (!document.querySelector('.header-component').contains(event.target)) {
      closeHeader();
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', handleDocumentClick);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick);
  });
  </script>
  