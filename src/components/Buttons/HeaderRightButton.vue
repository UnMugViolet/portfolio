<template>
  <button class="flex w-full h-10 items-center gap-1.5 px-0.5 component-style" @click="toggleButton">
    <div class="w-6 h-6 md:w-7 md:h-7">
      <slot name="img" />
    </div>

    <h3 class="font-verdana font-semibold text-xxs md:text-xs">
      <slot name="text" />
    </h3>
  </button>
</template>

<script setup>
const props = defineProps({
  buttonName: String
})

const emit = defineEmits(['toggle-button'])

const toggleButton = () => {
  emit('toggle-button', props.buttonName)
}
</script>

<style scoped>
.component-style {
  color: #00136b;
}
.component-style:hover {
  background: #2f71cd;
  color: white;
}
</style>
