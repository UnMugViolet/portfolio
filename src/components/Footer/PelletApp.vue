<template>
    <div class="flex items-center h-full gap-1 py-1 mt-px sm:w-44 select-none cursor-pointer"
      @click="toggleWindow"
    >
        <div class="flex items-center px-2 w-full h-full bg-pellet-blue hover:brightness-110 rounded-sm"
          :class="activeWindow === entity.id ? 'bg-pellet-blue-active shadow-pellet-footer-active' : 'bg-pellet-blue-deactivated shadow-pellet-footer-deactivated'"
        >
        <div class="flex gap-1 mt-px">
            <img :src="entity.iconSrc" :alt="'icon ' + entity.title" class="w-4 h-4"/>
            <p class="small-p text-white truncate hidden sm:block"> {{ entity.title }}</p>
        </div>
        </div>
    </div>
</template>

<script setup>
  import { inject } from 'vue';

  // Define props
  const props = defineProps({
    entity: {
      type: Object,
      required: true
    }
  });

  const { entity } = props; 

  const activeWindow = inject('activeWindow');
  const emit = defineEmits(['toggle-window']);

  const toggleWindow = () => {
    emit('toggle-window', entity.id);
  };
</script>
