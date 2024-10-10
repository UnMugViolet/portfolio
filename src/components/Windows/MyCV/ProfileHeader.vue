<script setup>
const props = defineProps({
  age: Number
})
</script>

<template>
  <div class="grid grid-flow-col auto-cols-max gap-2">
    <img src="/img/paul-jaguin-photo-cv.webp" alt="Photo de mon cv" class="w-20 h-20" />
    <div class="flex justify-center flex-col">
      <h1 class="font-trebuchet-pixel">Paul Jaguin</h1>
      <h2 class="font-trebuchet-pixel">{{ props.age }} ans</h2>
    </div>
    <div class="flex items-center ml-10">
      <h2 class="font-trebuchet-pixel py-1">Développeur Web</h2>
    </div>
  </div>
</template>
