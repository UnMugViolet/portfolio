import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLocale: localStorage.getItem('currentLocale') || 'fr'
  }),
  actions: {
    setLocale(newLocale) {
      this.currentLocale = newLocale
      localStorage.setItem('currentLocale', newLocale)
      const { locale } = useI18n()
      locale.value = newLocale
    }
  }
})
