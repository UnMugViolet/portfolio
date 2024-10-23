<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <!-- Content of project -->
    <div class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5">

    </div>
  </div>
</template>

<script setup>
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'

const props = defineProps({
  leftMenuType: String,
})

</script>
