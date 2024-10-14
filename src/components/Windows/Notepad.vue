<template>
  <div class="relative right-0 h-full flex">
      <textarea v-model="noteContent" class="w-full h-content-head-cut bg-white overflow-y-scroll outline-none resize-none px-1"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const noteContent = ref('')
</script>
