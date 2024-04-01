<script setup>
import { defineProps } from 'vue';
import WindowSideMenu from '@/components/Window/WindowSideMenu.vue'

const props = defineProps({
    subMenuItems: Array,
});
</script>

<template>
    <div class="relative right-0 h-content-window flex">
        <WindowSideMenu :subMenuItems="props.subMenuItems"/>

        <div class="w-full h-full bg-white overflow-auto">
            
        </div>
    </div>  
</template>