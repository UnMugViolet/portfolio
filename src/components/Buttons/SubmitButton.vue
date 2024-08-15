<script setup>

const emit = defineEmits(['submit']);

const props = defineProps({
  message: String,
  isLoading: Boolean,
});

const handleClick = () => {
  emit('submit');
};

</script>

<template>
  <button 
      @click.prevent="handleClick"
      :class="{ 'cursor-wait': isLoading }"
      class="text-xs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-5 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked font-trebuchet-pixel text-black">
      <slot />
  </button>
</template>