<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    <div class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5 relative">
      <div class="m-2">
        <section v-if="!isAboutVisible && !isLegalVisible">
          <div class="flex gap-2">
            <div 
              class="flex flex-col gap-1"
            >
              <img src="/img/icons/txt-icon.webp" alt="Office icon" class="w-10 h-10" />
              <p></p>
            </div>
          </div>
        </section>
        <section v-else-if="isAboutVisible">          
          <div class="flex justify-between">
            <h1 class="font-semibold">{{ $t('windows.about.title') }}</h1>
            <img src="/img/windows-xp-badges.webp" alt="Windows XP badges" class="w-auto h-6" />
          </div>
          <hr class="mt-2 mb-2 border-t-1 border-black" />
          <div class="flex flex-col gap-1.5 text-xs font-medium my-2">
            <p>{{ $t('windows.about.contextFirstParagraph') }}</p>
            <p>{{ $t('windows.about.contextSecondParagraph') }}</p>
            <p>{{ $t('windows.about.contextThirdParagraph') }}</p>
            <p>{{ $t('windows.about.contextFourthParagraph') }}</p>
            <p>{{ $t('windows.about.contextFifthParagraph') }}</p>
            <p>{{ $t('windows.about.contextSixthParagraph') }}</p>
            <p>{{ $t('windows.about.contextSeventhParagraph') }}</p>
          </div>
          <h1 class="font-semibold">{{ $t('windows.about.secondTitle') }}</h1>
          <hr class="mt-2 mb-2 border-t-1 border-black" />
          <ul class="flex flex-col gap-1.5 text-xs font-medium my-2 list-disc pl-3">
            <li>{{ $t('windows.about.helpFirst') }}</li>
            <li>{{ $t('windows.about.helpSecond') }}</li>
            <li>{{ $t('windows.about.helpThird') }}</li>
            <li>{{ $t('windows.about.helpFourth') }}</li>
            <li>{{ $t('windows.about.helpFifth') }}</li>
          </ul>
        </section>
        <section v-if="isLegalVisible">
          Legal
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import  { ref } from 'vue'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'

const props = defineProps({
  leftMenuType: String,
})

const pages = {}

let isAboutVisible = ref(false)
let isLegalVisible = ref(false)

const toggleAbout = () => {
  if (isLegalVisible.value) {
    isLegalVisible.value = false
  }
  isAboutVisible.value = !isAboutVisible.value
}

const toggleLegal = () => {
  if (isAboutVisible.value) {
    isAboutVisible.value = false
  }
  isLegalVisible.value = !isLegalVisible.value
}
</script>
