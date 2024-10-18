<template>
  <div class="mt-2 mb-5">
    <h4 class="font-trebuchet-pixel uppercase text-xs">{{ education.degree }}</h4>
    <p class="font-trebuchet-pixel font-medium text-xs">{{ education.institution }} | {{ education.year }}</p>
    <p class="font-trebuchet-pixel font-medium text-xs">{{ education.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  education: Object
})
</script>
