<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <!-- Content of project -->
    <div class="w-full h-full bg-pictures-blue overflow-auto overflow-x-hidden">
      <div class="w-full h-full justify-center item-center">
        <!-- Carroussel -->
        <div class="flex flex-col justify-center items-center w-full h-9/12  gap-1">
          <img v-if="currentPicture" :src="currentPicture.url" :alt="currentPicture.title" class="w-3/4 h-5/6 mt-1 border border-black" />
          <p v-else>Loading...</p>
          <div class="flex py-2">
            <div class="flex gap-1.5">
              <button class=" flex items-center w-7 h-7 cursor-pointer rounded-sm hover:border border border-pictures-blue hover:border-gray-300 hover:shadow-header-tools p-1" @click="previousPicture">
                <img src="/img/icons/pictures/previous-icon.svg" :alt="$t('windows.pictures.previous')" />
              </button>
              <button class=" flex items-center w-7 h-7 cursor-pointer rounded-sm hover:border border border-pictures-blue hover:border-gray-300 hover:shadow-header-tools p-1" @click="previousPicture">
                <img src="/img/icons/pictures/next-icon.svg" :alt="$t('windows.pictures.next')" />
              </button>
            </div>
            <hr class="w-px mx-2 h-full bg-moon-mist" />
            <div class="flex">
              <button class=" flex items-center w-7 h-7 cursor-pointer rounded-sm hover:border border border-pictures-blue hover:border-gray-300 hover:shadow-header-tools p-1" @click="previousPicture">
                <img src="/img/icons/pictures/left.svg" :alt="$t('windows.pictures.rotateLeft')" />
              </button>
              <button class=" flex items-center w-7 h-7 cursor-pointer rounded-sm hover:border border border-pictures-blue hover:border-gray-300 hover:shadow-header-tools p-1" @click="previousPicture">
                <img src="/img/icons/pictures/right.svg" :alt="$t('windows.pictures.rotateRight')" />
              </button>
            </div>
          </div>
        </div>
        <!-- Footer preview image -->
        <div class="w-full h-3/12 bottom-0 right-0 bg-white">
          <div class="flex w-full h-full items-center bg-no-repeat bg-32 bg-bottom-right-picture-menu bg-window-picture px-2 py-5 gap-4">
            <div v-for="picture in pictures" :key="picture.id" class="w-full h-full">
              <img :src="picture.url" :alt="picture.title" class="w-full h-full border border-gray-300" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'
import picturesData from '@/data/pictures-data.json'

const props = defineProps({
  leftMenuType: String,
})

let currentPicture = ref(null)
const pictures = picturesData.pictures

onMounted(() => {
  currentPicture.value = picturesData.pictures[0]
})

</script>
