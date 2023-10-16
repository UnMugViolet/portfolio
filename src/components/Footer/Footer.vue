<template>
    <footer>
      <div class="absolute bottom-0 footer-gradient shadow-footer w-full z-20">
        <div class="h-8 flex items-center justify-between">
          <StartButton @click="toggleHeader" />
          <FooterRight />
        </div>
      </div>
    </footer>
  </template>  


<script setup>    
    import {ref} from 'vue';
    import StartButton from '../Buttons/StartButton.vue';
    import FooterRight from './FooterRight.vue';
    
    const emit = defineEmits(['toggle-header']);

    const toggleHeader = () =>{
        emit('toggle-header');
    };

</script>
