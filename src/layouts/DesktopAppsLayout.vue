<template>
    <section class="absolute top-0 left-0">
      <div class="grid grid-cols-2 gap-5 pt-6 pl-6">
        <button
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex flex-col gap-2 items-center w-full"
          @click="toggleEffect(index)"
          :class="{ 'active': item.isActive }"
        >
          <img
            class="w-11 h-11"
            :style="{
              ...item.imageStyle,
              opacity: item.isActive ? 0.5 : 1
            }"
            :src="item.imageSrc"
            :alt="item.alt"
          />
          <p class="text-white text-xs font-normal py-px px-1"
             :style="{
               ...item.textStyle,
               backgroundColor: item.isActive ? 'rgb(11, 97, 255)' : 'transparent',
               textShadow: item.isActive ? 'none' : '0px 1px 1px rgba(1, 1, 1, 1), 0px 0px 4px #000'
             }"
          >
            {{ item.label }}
          </p>
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const menuItems = ref([
    {
      label: 'Mes projets',
      imageSrc: 'src/assets/img/icons/projects-large-icon.png',
      alt: 'Mes projets',
      isActive: false,
    },
    {
      label: 'Musiques',
      imageSrc: 'src/assets/img/icons/playmusic-icon.png',
      alt: 'Musiques',
      isActive: false,
    },
    {
      label: 'Jouer',
      imageSrc: 'src/assets/img/icons/play-large-icon.png',
      alt: 'Jouer',
      isActive: false,
    },
    {
      label: 'Mon CV',
      imageSrc: 'src/assets/img/icons/cv-large-icon.png',
      alt: 'Mon CV',
      isActive: false,
    },
    {
      label: 'Me contacter',
      imageSrc: 'src/assets/img/icons/email-large-icon.png',
      alt: 'Me contacter',
      isActive: false,
    },
  ]);
  
  const toggleEffect = (index) => {
    menuItems.value.forEach((item, i) => {
      if (i === index) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  };
  
  onMounted(() => {
    const clickOutsideHandler = (event) => {
      if (!event.target.closest(".active")) {
        menuItems.value.forEach((item) => {
          item.isActive = false;
        });
      }
    };
  
    document.body.addEventListener("click", clickOutsideHandler);
    onBeforeUnmount(() => {
      document.body.removeEventListener("click", clickOutsideHandler);
    });
  });
  </script>
  
  <style scoped>
  .active {
    filter: drop-shadow(blue 0px 0px);
  }
  </style>
  