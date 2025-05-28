<script setup>
import { ref } from 'vue'

const showNotificationModal = ref(false)

setTimeout(() => {
  showNotificationModal.value = true
  setTimeout(() => {
    showNotificationModal.value = false
  }, 6000)
}, 3000)

const closeNotificationModal = () => {
  showNotificationModal.value = false
}
</script>

<template>
  <Transition>
    <div
      v-if="showNotificationModal"
      class="bubble absolute right-12 md:right-16 bottom-11 border border-black bg-light-yellow rounded-lg text-xs whitespace-nowrap py-1.5 pr-9 pb-2.5 pl-2.5 text-black"
    >
      <button @click="closeNotificationModal" class="modal-close cursor-pointer"></button>
      <div class="flex items-center">
        <img class="w-3.5 h-3.5" src="/img/icons/info-icon.webp" alt="risk" />
        <span class="ml-2">{{ $t('modale.fullscreenTitle') }}</span>
      </div>
      <p>{{ $t('modale.fullscreenFirstText') }}</p>
      <p>{{ $t('modale.fullscreenSecondText') }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.modal-close {
  outline: none;
  position: absolute;
  right: 4px;
  top: 4px;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: transparent;
}

.modal-close::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  transform: rotate(45deg);
  height: 8px;
  width: 2px;
  background-color: rgba(170, 170, 170);
}

.modal-close:hover {
  background-color: #ffa90c;
  border-color: white;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
}

.modal-close:hover::before,
.modal-close:hover::after {
  background-color: white;
}

.modal-close::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  transform: rotate(-45deg);
  height: 8px;
  width: 2px;
  background-color: rgba(170, 170, 170);
}

.bubble::after {
  content: '';
  position: absolute;
  display: block;
  bottom: -17px;
  right: 15px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 18px 18px 0px;
  border-color: transparent rgb(255, 255, 225) transparent transparent;
}

.bubble::before {
  content: '';
  position: absolute;
  display: block;
  bottom: -19px;
  right: 14px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 19px 19px 0px;
  border-color: transparent black transparent transparent;
}
</style>
