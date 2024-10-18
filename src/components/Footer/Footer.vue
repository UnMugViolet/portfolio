<template>
  <footer>
    <div class="absolute bottom-0 footer-gradient shadow-footer w-full z-max">
      <div class="h-8 flex items-center">
        <div class="flex items-center h-full overflow-hidden">
          <StartButton @click="toggleHeader" />
          <div class="flex w-10/12 h-full ml-px sm:ml-2 sm:gap-0.5">
            <PelletApp v-for="entity in entities" :key="entity.id" :entity="entity" @toggle-window="toggleWindow" class="flex-shrink" />
          </div>
        </div>
        <FooterRight />
      </div>
    </div>
  </footer>
</template>

<script setup>
import StartButton from '../Buttons/StartButton.vue'
import FooterRight from './FooterRight.vue'
import PelletApp from './PelletApp.vue'

const emit = defineEmits(['toggle-header', 'toggle-window'])

const toggleHeader = () => {
  emit('toggle-header')
}

const toggleWindow = (windowId) => {
  emit('toggle-window', windowId)
}

const props = defineProps({
  entities: {
    type: Array,
    required: true
  }
})
</script>
