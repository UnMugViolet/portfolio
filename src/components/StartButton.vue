<script setup>
import WindowsIcon from '@/components/icons/WindowsIcon.vue';
</script>

<template>
    <button class="text-white start-button start-button-font text-lg h-8">
        <div class="flex items-center gap-px pr-5 pl-2 h-8 ">
            <WindowsIcon />
            démarrer
        </div>

    </button>
</template>

<script>    
    export default {
        name: 'StartButton',
    }
</script>