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

<script>    
    import StartButton from '../Button/StartButton.vue';
    import FooterRight from './FooterRight.vue';

    export default {
        name: 'Footer',
        components: {
            StartButton,
            FooterRight,
        }
    };
</script>