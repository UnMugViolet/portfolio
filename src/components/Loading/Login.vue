<template>
  <ContentCenter class="bg-color-load-blue radial-gradient-loading">
    <template #top>
      <div
        class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2"
      />
    </template>

    <template #center>
      <div class="flex w-full">
        <div class="md:flex hidden justify-end items-center w-1/2">
          <div>
            <div class="flex justify-end w-full">
              <div class="w-2/3">
                <img
                  src="/img/logo-portfolio-white.webp"
                  alt="logo portfolio paul jaguin"
                  class="mb-3"
                />
              </div>
            </div>
            <div class="w-full flex justify-end">
              <div class="w-10/12 mr-12">
                <h2 class="text-white text-lg text-right">
                  {{ $t('message.toBegin') }}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-px h-96 line-loading-gradient mx-3 md:flex hidden"></div>
        <LoginForm />
      </div>
    </template>

    <template #bottom>
      <div
        class="absolute bg-color-load-header-blue w-full md:h-48 h-1/5 bottom-0 up-stroke-green-2"
      >
        <div class="flex justify-center items-center h-full">
          <div class="app-container">
            <div class="flex justify-between items-center md:gap-8 gap-3">
              <div class="relative inline-block text-left text-white md:text-xl text-xs">
                <div class="flex items-center md:gap-4 gap-1 cursor-pointer">
                  <img :src="flagSrc" alt="langue" class="md:w-9 w-11 mr-2" />
                  <button @click="toggleDropdown" class="inline-flex justify-center items-center w-full focus:outline-none font-franklin">
                    {{ localeNames[currentLocale] }}
                    <svg class="mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div v-if="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-full ring-opacity-5">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a v-for="locale in filteredLocales" :key="locale" @click="changeLocale(locale)" class="block py-2 text-sm cursor-pointer">
                      {{ localeNames[locale] }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex text-white md:text-sm text-xs font-bold md:mr-10 md:w-2/6">
                <h4>
                  {{ $t('message.explainer') }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContentCenter>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import LoginForm from '@/components/Loading/LoginForm.vue'
import ContentCenter from '@/layouts/ContentCenter.vue'

const { locale } = useI18n()
const dropdownOpen = ref(false)
const locales = ['en', 'fr']
const localeNames = {
  en: 'English',
  fr: 'Français'
}
const currentLocale = ref(locale.value)

const flagSrc = computed(() => {
  return `/img/icons/langs/flag-${locale.value}.png`
})

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const changeLocale = (newLocale) => {
  locale.value = newLocale
  currentLocale.value = newLocale
  dropdownOpen.value = false
}

const filteredLocales = computed(() => {
  return locales.filter(l => l !== currentLocale.value)
})
</script>

