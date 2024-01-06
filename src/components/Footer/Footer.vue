<template>
  <footer>
    <div class="absolute bottom-0 footer-gradient shadow-footer w-full z-50">
      <div class="h-8 flex items-center justify-between">
        <div class="flex items-center h-full ">
          <StartButton @click="toggleHeader" />
          <div class="flex items-center h-full gap-1 px-2 py-1 mt-px w-44">
            <div class="flex items-center px-2 w-full h-full bg-pellet-blue box-shadow-pellet-footer hover:brightness-110 rounded-sm">
              <div class="flex gap-1 mt-px">
                <img src="/src/assets/img/icons/projects-icon-xs.png" alt="office-icon" class="w-4 h-4"/>
                <p class="small-p text-white">My Projects</p>
              </div>
            </div>
          </div>
        </div>
        <FooterRight />
      </div>
    </div>
  </footer>
</template>  


<script setup>    
  import StartButton from '../Buttons/StartButton.vue';
  import FooterRight from './FooterRight.vue';
  
  const emit = defineEmits(['toggle-header']);

  const toggleHeader = () => {
    emit('toggle-header');
  };
</script>
