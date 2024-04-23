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
      class="w-20 h-6 text-xs border border-twilight-blue bg-button-submit rounded-sm  leading-loose px-3 hover:shadow-button-submit-hover">
      {{ message }}
  </button>
</template>