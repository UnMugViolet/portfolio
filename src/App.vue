<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

const route = useRoute();

const updateMetaTags = (to) => {
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

updateMetaTags(route);
</script>

<template>
  <router-view />
</template>