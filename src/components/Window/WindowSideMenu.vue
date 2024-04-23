<script setup>

const props = defineProps({
  subMenuItems: Array
})

</script>

<template>
  <div class="flex flex-col flex-shrink-0 gap-3 bg-window-side-menu w-32 md:w-12.125 h-full p-2.5 overflow-auto">
    <div class="text-twilight-blue" v-for="item in props.subMenuItems" :key="item.id">
      <div
        class="flex flew-row justify-between items-center bg-window-menu-card-header rounded-t-sm px-1 py-px sm:px-2 sm:py-0.5 text-xs-mobile md:text-xs font-bold cursor-pointer hover:text-heroic-blue">
        <h3>{{ item.title }}</h3>
        <img src="@/assets/img/icons/top-icon-card-window.png" alt="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-lg">
      </div>
      <div class="bg-window-menu-card px-1 py-0.75 md:px-2" v-for="subtask in item.subtasks" :key="subtask.id">
        <a v-if="subtask.url" :href="subtask.url" target="_blank"
          class="flex flex-row items-center gap-1 cursor-pointer hover:underline hover:text-heroic-blue">
          <img :src="subtask.iconUrl" :alt="subtask.subtitle" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
          <p class="font-light text-xxs-mobile md:text-xxs">{{ subtask.subtitle }}</p>
        </a>
        <div v-else
          class="flex flex-row items-center gap-1 cursor-pointer hover:underline hover:text-heroic-blue">
          <img :src="subtask.iconUrl" :alt="subtask.subtitle" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
          <p class="font-light text-xxs-mobile md:text-xxs">{{ subtask.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
