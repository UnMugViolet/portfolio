<template>
    <div class="text-white h-full flex items-center px-3 gap-1 background-footer-right-component footer-left-shadow">
        <img class="w-4 h-4 cursor-pointer" src="../assets/img/full-screen-icon.png" alt="Mettre en plein écran" title="Mode plein écran">
        <img class="w-4 h-4 mt-px cursor-pointer" src="../assets/img/volume-icon.png" alt="Gestion du volume" title="Gestion du volume">

        <CurrentTime />
    </div>
</template>

<script>
    import CurrentTime from './CurrentTime.vue';
    
    export default{
        name: 'FooterRight',
        components: {
        CurrentTime
    }
    };
</script>