<script setup>
import { computed } from 'vue'

const emit = defineEmits(['submit'])

const props = defineProps({
  message: String,
  isLoading: Boolean,
  href: String,
  blank: Boolean,
  layout: String
})

const handleClick = (event) => {
  if (!props.href) {
    emit('submit')
  }
}

const classes = computed(() => {
  if (props.layout === 'small') {
    return 'inline-flex items-center text-xs border border-twilight-blue bg-button-submit rounded-sm leading-none px-1.5 py-0.5 min-h-6 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked font-trebuchet-pixel text-black text-xxs'
  } else {
    return 'inline-flex items-center text-xs border border-twilight-blue bg-button-submit rounded-sm leading-none px-5 py-0.5 min-h-6 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked font-trebuchet-pixel text-black'
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="blank ? '_blank' : null"
    @click="handleClick"
    :type="href ? null : 'button'"
    :rel="blank ? 'noopener noreferrer' : null"
    :class="[classes, isLoading ? 'cursor-wait' : 'cursor-default']"
  >
    <slot />
  </component>
</template>
