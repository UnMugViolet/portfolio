<template>
    <div class="flex items-center h-full gap-1 py-1 mt-px w-44 select-none">
        <div class="flex items-center px-2 w-full h-full bg-pellet-blue hover:brightness-110 rounded-sm"
          :class="activeWindow === entity.id ? 'bg-pellet-blue-active shadow-pellet-footer-active' : 'bg-pellet-blue-deactivated shadow-pellet-footer-deactivated'"
        >
        <div class="flex gap-1 mt-px">
            <img :src="entity.iconSrc" :alt="'icon ' + entity.title" class="w-4 h-4"/>
            <p class="small-p text-white"> {{ entity.title }}</p>
        </div>
        </div>
    </div>
</template>

<script setup>
 import { inject } from 'vue';

 const activeWindow = inject('activeWindow');

  const props = defineProps({
    entity: {
      type: Object,
      required: true
    }
  })
</script>
