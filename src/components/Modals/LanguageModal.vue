<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const localeNames = {
  en: 'English',
  fr: 'Français'
}

const props = defineProps({
  currentLocale: {
    type: String,
    default: 'fr'
  },
})

// Function to get the flag source based on the locale
const getFlagSrc = (locale) => {
  return `/img/icons/langs/flag-${locale}.webp`
}

// Compute the opposite locale
const oppositeLocale = computed(() => {
  return props.currentLocale === 'en' ? 'fr' : 'en'
})

const handleLanguageSwitch = () => {
  const newLocale = props.currentLocale === 'en' ? 'fr' : 'en'
  localStorage.setItem('currentLocale', newLocale)
  locale.value = newLocale
  location.reload()
}
</script>

<template>
  <section class=" absolute bottom-10 right-5 md:right-12 w-21 rounded-t-md overflow-hidden bg-window-blue-deactivated p-0.5">
    <div class="absolute top-0 left-0 h-7 w-full z-10 flex items-center px-1.5 bg-header-window-active">
      <img :src="getFlagSrc(props.currentLocale)" :alt="$t('common.icon') + ' volume'" class="w-4 h-3 mr-1" />
      <h4 class="text-header-window text-header-shadow truncate">{{ $t('common.language') }}</h4>
    </div>
    <div class="bg-light-yellow h-12 mt-3 pr-1" >
      <div class="h-full w-full flex items-center px-2 pt-3">
		<div @click="handleLanguageSwitch" class="flex items-center cursor-pointer">
			<img :src="getFlagSrc(oppositeLocale)" :alt="$t('common.icon') + ' volume'" class="w-5 h-4 mr-1 cursor-pointer"/>
			<label class="text-black text-xs font-trebuchet-pixel pr-4 cursor-pointer" for="language">{{ localeNames[oppositeLocale] }}</label>
		</div>
      </div>
    </div>
  </section>
</template>
