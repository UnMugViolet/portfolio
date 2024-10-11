<template>
  <header class="header-component select-none">
    <div
      class="absolute left-0 header-radius overflow-hidden bottom-0 mb-8 modal-size z-max bg-color-blue-window"
    >
      <div class="w-full h-full relative overflow-hidden">
        <div class="h-16 flex items-center px-2 header-top-background">
          <ProfilePicture class="w-11 h-11 stroke-white-1 header-profile-shadow" />
          <h2 class="text-lg ml-2 text-white text-shadow-header">Paul Jaguin</h2>
        </div>
        <section class="relative w-full h-full px-0.5">
          <hr class="absolute top-0 left-0 right-0 bg-orange-hr block" />
          <div class="w-full h-full flex">
            <div class="w-7/12 h-full bg-white px-1 py-1">
              <div v-for="entity in localEntities" :key="entity.id">
                <div v-if="entity.subtitle" class="flex flex-col gap-3 py-2">
                  <HeaderLeftButton
                    @toggle-button="toggleWindow"
                    :buttonName="entity.id"
                  >
                    <template #img>
                      <img :src="entity.imgSrc" :alt="entity.title" />
                    </template>
                    <template #title>
                      {{ entity.title }}
                    </template>
                    <template #subtitle>
                      {{ entity.subtitle }}
                    </template>
                  </HeaderLeftButton>
                </div>
              </div>
            </div>
            <div class="w-1/2 h-full bg-color-blue-header-left left-blue-header-1 px-1 py-1">
              <div class="py-2">
                <HeaderRightButton @click="toggleWindow('about')" class="cursor-pointer">
                  <template #img>
                    <img src="/img/icons/folder-docs-icon.png" alt="A propos" />
                  </template>
                  <template #text> A propos </template>
                </HeaderRightButton>
                <HeaderRightButton @click="toggleWindow('pictures')" class="cursor-pointer">
                  <template #img>
                    <img src="/img/icons/folder-images-icon-sm.png" alt="Mes photos" />
                  </template>
                  <template #text> Mes images </template>
                </HeaderRightButton>
                <HeaderRightButton @click="toggleWindow('music')" class="cursor-pointer">
                  <template #img>
                    <img src="/img/icons/folder-music-icon.png" alt="Mes musiques" />
                  </template>
                  <template #text> Mes musiques </template>
                </HeaderRightButton>
                <HeaderRightButton @click="turnOffHeader" class="cursor-pointer">
                  <template #img>
                    <img src="/img/icons/calendar-icon-sm.png" alt="A propos" />
                  </template>
                  <template #text> Calendrier </template>
                </HeaderRightButton>
                <HeaderRightButton @click="turnOffHeader" class="cursor-pointer">
                  <template #img>
                    <img src="/img/icons/play-icon-sm.png" alt="A propos" />
                  </template>
                  <template #text> Jouer </template>
                </HeaderRightButton>
              </div>
            </div>
          </div>
        </section>
        <div class="absolute bottom-0 h-12 w-full">
          <div class="header-bot-background h-full flex justify-end items-center">
            <div class="flex h-5/6 gap-3 mr-2">
              <HeaderDisconnect @click="turnOffHeader" class="cursor-pointer" />
              <HeaderShutdown @click="shutdown" class="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useVolumeStore } from '@/stores/volumeStore.js'
import ProfilePicture from '@/components/ProfilePicture.vue'
import HeaderLeftButton from '@/components/Buttons/HeaderLeftButton.vue'
import HeaderRightButton from '@/components/Buttons/HeaderRightButton.vue'
import HeaderShutdown from '@/components/Buttons/HeaderShutdown.vue'
import HeaderDisconnect from '@/components/Buttons/HeaderDisconnect.vue'

const emit = defineEmits()
const volumeStore = useVolumeStore()

const props = defineProps({
  entities: {
    type: Array,
    required: true
  }
})

const localEntities = ref([...props.entities])

watchEffect(() => {
  localEntities.value = [...props.entities]
})


const turnOffHeader = () => {
  emit('toggle-header')
}

const toggleWindow = (buttonName) => {
  // Close the header and open the window
  turnOffHeader();
  emit('toggle-' + buttonName)
}

const shutdown = () => {
  volumeStore.playAudio(['/sounds/shutdown-windows.mp3'])
  volumeStore.unmuteAudio()
}
</script>

<style scoped>
.header-radius {
  border-radius: 5px 5px 0px 0px;
}

.modal-size {
  width: 430px;
  height: 530px;
}

@media (max-width: 768px) {
  .modal-size {
    width: 300px;
    height: 410px;
  }
}

@media (min-height: 750px) and (max-width: 768px) {
  .modal-size {
    width: 320px;
    height: 450px;
  }
}
</style>
