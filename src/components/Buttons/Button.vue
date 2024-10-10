<script setup>
const emit = defineEmits(['submit'])

const props = defineProps({
  message: String,
  isLoading: Boolean,
  href: String,
  blank: Boolean
})

const handleClick = (event) => {
  if (!props.href) {
    emit('submit')
  }
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="blank ? '_blank' : null"
    @click="handleClick"
    :class="{ 'cursor-wait': isLoading }"
    class="inline-flex items-center text-xs border border-twilight-blue bg-button-submit rounded-sm leading-none px-5 py-0.5 min-h-6 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked font-trebuchet-pixel text-black"
    :type="href ? null : 'button'"
  >
    <slot />
  </component>
</template>
