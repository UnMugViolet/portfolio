<template>
  <ContentCenter class="bg-color-load-blue radial-gradient-loading">
    <template #top>
      <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2" />
    </template>

    <template #center>
      <div class="flex w-full">
        <div class="md:flex hidden justify-end items-center w-1/2">
          <div>
            <div class="flex justify-end w-full">
              <div class="w-2/3">
                <img src="/img/logo-portfolio-white.webp" :alt="$t('alt.logoLogin')" class="mb-3" />
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
      <div class="absolute bg-color-load-header-blue w-full md:h-48 h-1/5 bottom-0 up-stroke-green-2">
        <div class="flex justify-center items-center h-full">
          <div class="app-container">
            <div class="flex justify-between items-center md:gap-8 gap-8">
              <div class="relative inline-block text-left text-white md:text-xl text-sm">
                <div @click="toggleDropdown" class="flex items-center md:gap-3 gap-2 cursor-pointer">
                  <img :src="flagSrc" :alt="$t('alt.currLang') + ' ' + localeNames[currentLocale]" class="md:w-12 w-9" />
                  <button class="inline-flex justify-center items-center w-full focus:outline-none font-franklin">
                    {{ localeNames[currentLocale] }}
                    <svg class="mr-1 md:ml-2 md:h-5 md:w-5 h-3 w-3 ml-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div v-if="dropdownOpen" class="origin-top-right absolute md:-right-14 -right-9 w-full">
                  <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a
                      v-for="locale in filteredLocales"
                      :key="locale"
                      @click="changeLocale(locale)"
                      class="block md:py-2 py-1.5 md:text-base md:ml-0 ml-0.5 text-xs cursor-pointer"
                    >
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

// Initialize currentLocale from localStorage if it exists, otherwise use the default locale
const storedLocale = localStorage.getItem('currentLocale')
const currentLocale = ref(storedLocale || locale.value)

// Set the initial locale value
locale.value = currentLocale.value

// Watch for changes in currentLocale and update localStorage and locale.value
watch(currentLocale, (newLocale) => {
  localStorage.setItem('currentLocale', newLocale)
  locale.value = newLocale
})

const flagSrc = computed(() => {
  return `/img/icons/langs/flag-${currentLocale.value}.webp`
})

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const changeLocale = (newLocale) => {
  currentLocale.value = newLocale
  dropdownOpen.value = false
}

const filteredLocales = computed(() => {
  return locales.filter((l) => l !== currentLocale.value)
})
</script>
