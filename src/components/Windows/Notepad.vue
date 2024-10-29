<template>
  <div class="relative right-0 h-full flex">
    <textarea
      v-model="noteContent"
      class="w-full h-content-headless-toolbox bg-white overflow-y-scroll outline-none resize-none px-1 font-trebuchet-pixel text-md"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const noteContent = ref('')
</script>
