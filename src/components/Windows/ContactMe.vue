<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import emailjs from 'emailjs-com'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'
import Button from '../Buttons/Button.vue'

const { t } = useI18n()
const userName = ref('')
const userEmail = ref('')
const userMessage = ref('')
const errorMessage = ref('')
const emailSent = ref(false)
const isLoading = ref(false)

// Get variables from .env
const adminName = import.meta.env.VITE_APP_ADMIN_NAME
const adminEmailAddress = import.meta.env.VITE_APP_ADMIN_EMAIL_ADDRESS
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID

const sendEmail = async () => {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    emailSent.value = false
    errorMessage.value = t('windows.contact.error.empty')
    return
  }

  // Check if the email is in a valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(userEmail.value)) {
    emailSent.value = false
    errorMessage.value = userEmail.value + t('windows.contact.error.email')
    return
  }

  isLoading.value = true

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        to_name: adminName,
        from_name: userName.value,
        message: userMessage.value,
        reply_to: userEmail.value
      },
      publicKey
    )

    // Reset form and error message
    errorMessage.value = ''
    userName.value = ''
    userEmail.value = ''
    userMessage.value = ''
    emailSent.value = true
    isLoading.value = false
  } catch (error) {
    console.log(error.text)
    emailSent.value = false
    isLoading.value = false
    errorMessage.value = t('windows.contact.error.unknown') + adminEmailAddress
  }
}

// Expose variables to the template
defineExpose({
  userName,
  userEmail,
  userMessage,
  errorMessage,
  emailSent,
  sendEmail
})

// Change cursor to wait when loading
watch(isLoading, (newValue) => {
  if (newValue) {
    document.body.classList.add('cursor-wait')
  } else {
    document.body.classList.remove('cursor-wait')
  }
})
</script>

<template>
  <div class="relative right-0 h-full flex flex-col">
    <div class="bg-window-white border-window-header-bot w-full h-12 flex items-center p-2 text-xxs gap-2">
      <div class="flex justify-center">
        <p>Send</p>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex justify-center flex-col">
        <p>Cut</p>
      </div>
      <div class="flex justify-center flex-col">
        <p>Copy</p>
      </div>
      <div class="flex justify-center flex-col">
        <p>Paste</p>
      </div>
      <div class="flex justify-center flex-col">
        <p>Undo</p>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex justify-center flex-col">
        <p>Check</p>
      </div>
      <div class="flex justify-center flex-col">
        <p>Spelling</p>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex justify-center flex-col">
        <p>Attach</p>
      </div>
      <div class="flex justify-center items-center">
        <p>Priority</p>
        <div class="block border-solid down-arrow ml-3"></div>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex justify-center flex-col">
        <p>Sign</p>
      </div>
    </div>
    <div class="bg-window-white border-window-header-bot w-full h-18 flex items-center flex-col p-2 text-xxs gap-2 ">
      <div class="w-full flex gap-2 font-trebuchet-pixel">
        <div class="flex gap-1 w-14 items-center">
          <img src="/img/icons/contact/mailto.webp" alt="Refresh" class="w-4 h-4" />
          <p class="font-trebuchet-pixel">To :</p>
        </div>
        <input type="text" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none placeholder:text-black" placeholder="jaguinpaul@gmail.com" readonly="readonly"/>
      </div>
      <div class="w-full flex gap-2">
        <div class="flex gap-1 w-14 items-center">
          <img src="/img/icons/contact/mailto.webp" alt="Refresh" class="w-4 h-4" />
          <p class="font-trebuchet-pixel">From :</p>
        </div>
        <input type="text" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none font-trebuchet-pixel" placeholder="jean_doe@wanadoo.com" />
      </div>
      <div class="w-full flex gap-2">
        <div class="flex gap-1 w-14 items-center justify-center">
          <p class="font-trebuchet-pixel">Subject :</p>
        </div>
        <input type="text" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none font-trebuchet-pixel"/>
      </div>
    </div>
    <!-- Main content -->
    <form class="flex flex-col w-full h-content-window  bg-white overflow-auto gap-2 font-trebuchet-pixel">
      <div class="m-2">
        <h1 class="font-semibold">{{ $t('windows.contact.title') }}</h1>
        <p class="text-xs font-medium">
          {{ $t('windows.contact.description') }}
        </p>
        <div class="max-w-prose">
          <label class="text-xs"
            >{{ $t('windows.contact.name') }}
            <input v-model="userName" type="text" class="w-full h-6 border border-input-blue p-2 text-xs outline-none" placeholder="Jean Doe" />
          </label>
        </div>
        <div class="max-w-prose">
          <label class="text-xs"
            >{{ $t('windows.contact.email') }}
            <input v-model="userEmail" type="email" class="w-full h-6 border border-input-blue p-2 text-xs outline-none" placeholder="jean_doe@wanadoo.com" />
          </label>
        </div>
        <div class="max-w-prose">
          <label class="text-xs"
            >{{ $t('windows.contact.message') }}
            <textarea v-model="userMessage" class="w-full h-28 border border-input-blue p-2 text-xs outline-none" :placeholder="$t('windows.contact.message')"></textarea>
          </label>
        </div>
        <div class="flex gap-2 items-center">
          <Button :disabled="isLoading" @submit="sendEmail" :isLoading="isLoading">
            {{ $t('buttons.send') }}
          </Button>
          <p class="text-xs text-green-500 font-medium" v-show="emailSent">
            {{ $t('windows.contact.success') }}
          </p>
          <p class="text-xs text-red-500 font-medium" v-show="errorMessage">{{ errorMessage }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.down-arrow {
  content: '';
  border-width: 3px 3px 0px;
  border-color: rgb(0, 0, 0) transparent;
}
</style>