<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { onMounted, watch } from 'vue';

const route = useRoute();

const updateMetaTags = (to) => {
  console.log('Updating meta tags for route:', to.meta);
  useHead({
    title: to.meta.title || 'Default title',
    meta: (to.meta.metaTags || []).map(tag => ({
      name: tag.name || tag.property,
      content: tag.content
    }))
  });
};

onBeforeRouteUpdate((to, from, next) => {
  updateMetaTags(to);
  next();
});

onMounted(() => {
  updateMetaTags(route);
});

watch(route, (newRoute) => {
  updateMetaTags(newRoute);
});
</script>

<template>
  <router-view />
</template>