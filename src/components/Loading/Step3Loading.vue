<script setup>
import ContentCenter from '@/layouts/ContentCenter.vue'
</script>

<template>
  <ContentCenter class="bg-color-load-blue radial-gradient-loading">
    <template #top>
      <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2"></div>
    </template>

    <template #center>
      <div class="md:w-4/12 w-64 ml-5 mb-10">
        <img src="/img/logo-portfolio-black.webp" :alt="$t('alt.logoLoading')" />
      </div>
    </template>

    <template #bottom>
      <div class="absolute bg-color-load-header-blue w-full md:h-48 h-28 bottom-0 up-stroke-green-2">
        <div class="flex justify-center items-center h-full"></div>
      </div>
    </template>
  </ContentCenter>
</template>
