<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()
const formattedTime = ref('')
let interval

function getCurrentTime() {
  const now = new Date()
  if (localeStore.currentLocale === 'fr') {
    return getFrenchTime(now)
  } else {
    return getEnglishTime(now)
  }
}

const getFrenchTime = (now) => {
  const hours = now.getHours()
  const minutes = now.getMinutes()

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const getEnglishTime = (now) => {
  const hours = now.getHours() % 12 || 12 // Convert 0 to 12 for 12-hour format
  const minutes = now.getMinutes()
  const amPm = now.getHours() >= 12 ? 'PM' : 'AM'

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`
}

function updateTime() {
  formattedTime.value = getCurrentTime()
}

onMounted(() => {
  // Update the formattedTime property immediately
  updateTime()
  // Update the formattedTime property every 2 seconds
  interval = setInterval(updateTime, 2000)
})

onBeforeUnmount(() => {
  // Clear the interval to stop updating when the component is unmounted
  clearInterval(interval)
})

// Watch for changes in the locale and update the time immediately
watch(
  () => localeStore.currentLocale,
  () => {
    updateTime()
  }
)
</script>

<template>
  <div class="flex flex-row">
    <h4 class="mx-px text-xxs md:text-xs cursor-default">{{ formattedTime }}</h4>
  </div>
</template>
