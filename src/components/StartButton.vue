<script setup>
import WindowsIcon from '@/components/icons/WindowsIcon.vue';

</script>

<template>
    <button class="text-white start-button-font text-lg start-button-gradient start-button-shadow">
        <div class="flex items-center gap-px pr-4 h-8">
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