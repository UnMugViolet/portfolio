<script setup>    
    import StartButton from '../Buttons/StartButton.vue';
    import FooterRight from './FooterRight.vue';

</script>

<template>
    <footer>
        <div class="absolute bottom-0 footer-gradient shadow-footer w-full z-20">
            <div class="h-8 flex items-center justify-between"> 
                <StartButton />
                <FooterRight />
            </div>
        </div>
    </footer>
</template>