<template>
  <footer>
    <div class="absolute bottom-0 footer-gradient shadow-footer w-full z-max">
      <div class="h-8 flex items-center justify-between">
        <div class="flex items-center h-full">
          <StartButton @click="toggleHeader" />
          <div class="flex w-full h-full ml-2 gap-0.5">
            <PelletApp
                v-for="entity in entities"
                :key="entity.id"
                :entity="entity"
                @toggle-window="toggleWindow"
            />
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
  import PelletApp from './PelletApp.vue';
  
  const emit = defineEmits(['toggle-header', 'toggle-window']);

  const toggleHeader = () => {
    emit('toggle-header');
  };

  const toggleWindow = (windowId) => {
    emit('toggle-window', windowId);
  };

  const props = defineProps({
    entities: {
      type: Array,
      required: true
    }
  });

</script>
