<template>
  <section
    class="h-screen w-screen overflow-hidden bg-office-pic relative"
    @click="handleOutsideClick"
  >
    <Header v-if="showHeader" @toggle-header="toggleHeader"/>
    <div></div>
    <Footer @toggle-header="toggleHeader" />
  </section>
</template>

<script setup>
  import Footer from '../components/Footer/Footer.vue';
  import Header from '../components/Header/Header.vue';
  import { ref } from 'vue';

  const showHeader = ref(false);

  const toggleHeader = () => {
    showHeader.value = !showHeader.value;
  };

  const handleOutsideClick = (event) => {
    if (showHeader.value) {
      const headerElement = document.querySelector('.header-component');
      const startButtonElement = document.querySelector('.start-button');

      // Check if the clicked element is the StartButton
      if (
        startButtonElement &&
        startButtonElement.contains(event.target)
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
