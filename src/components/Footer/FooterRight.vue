<script setup>
    import CurrentTime from '../CurrentTime.vue';
</script>


<template>
    <div class="text-white h-full flex items-center px-3 gap-1 bg-footer-right-component footer-left-shadow">
        <img class="w-4 h-4 cursor-pointer full-screen" src="src/assets/img/icons/full-screen-icon.png" alt="Mettre en plein écran" title="Mode plein écran">
        <img class="w-4 h-4 mt-px cursor-pointer" src="src/assets/img/icons/volume-icon.png" alt="Gestion du volume" title="Gestion du volume">

        <CurrentTime />
    </div>
</template>
