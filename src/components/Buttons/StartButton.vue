<template>
  <button class="text-white start-button font-franklin italic text-lg h-8 select-none cursor-pointer">
    <div class="flex items-center gap-px pr-5 pl-2 h-8">
      <WindowsIcon />
      {{ $t('buttons.start') }}
    </div>
  </button>
</template>

<script setup>
import WindowsIcon from '@/components/icons/WindowsIcon.vue'
</script>

<style scoped>
.start-button {
  border-radius: 0% 10px 10px 0% / 0% 25px 25px 0%;
  background: linear-gradient(180deg, #509d4f 0%, #499e47 69.2%, #48b347 100%), linear-gradient(180deg, #509d4f 0%, #499e47 69.2%, #48b347 100%);
  box-shadow:
    1px 1px 1px 0px #196045 inset,
    2px 0px 3px 0px rgba(0, 0, 0, 0.25) inset,
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    -4px 0px 6px 0px rgba(0, 0, 0, 0.25) inset,
    2px 4px 4px 0px rgba(255, 255, 255, 0.47) inset,
    0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
    4px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.start-button:hover {
  background: linear-gradient(180deg, #3daa3e 0%, #4bc14b 100%);
  box-shadow:
    1px 1px 1px 0px #196045 inset,
    2px 0px 3px 0px rgba(0, 0, 0, 0.25) inset,
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    -8px 0px 14px 0px rgba(0, 0, 0, 0.25) inset,
    2px 4px 4px 0px rgba(255, 255, 255, 0.47) inset,
    0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
    4px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.start-button:active {
  background: linear-gradient(180deg, #499947 0%, #499e47 24.4%, #48b347 100%);
  box-shadow:
    1px 1px 1px 0px #196045 inset,
    2px 0px 3px 0px rgba(0, 0, 0, 0.25) inset,
    0px -2px 4px 0px rgba(0, 0, 0, 0.25) inset,
    -2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset,
    2px 4px 4px 0px rgba(255, 255, 255, 0.47) inset,
    0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
    10px 12px 48px 0px rgba(0, 0, 0, 0.34) inset;
}
</style>
