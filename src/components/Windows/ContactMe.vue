<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import emailjs from 'emailjs-com'
import Button from '../Buttons/Button.vue'

const { t } = useI18n()
const userEmail = ref('')
const emailSubject = ref('')
const userMessage = ref('')
const errorMessage = ref('')
const emailSent = ref(false)
const isLoading = ref(false)
const isFormComplete = ref(false)

// Get variables from .env
const adminName = import.meta.env.VITE_APP_ADMIN_NAME
const adminEmailAddress = import.meta.env.VITE_APP_ADMIN_EMAIL_ADDRESS
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID

const sendEmail = async () => {
  if (!userEmail.value || !userMessage.value || !emailSubject.value) {
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
        subject: emailSubject.value,
        message: userMessage.value,
        reply_to: userEmail.value
      },
      publicKey
    )

    // Reset form and error message
    errorMessage.value = ''
    userEmail.value = ''
    emailSubject.value = ''
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
  userEmail,
  userMessage,
  emailSubject,
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

watch([userEmail, userMessage, emailSubject], ([newUserEmail, newUserMessage, newEmailSubject]) => {
	if (newUserEmail && newUserMessage && newEmailSubject) {
		isFormComplete.value = true
	} else {
		isFormComplete.value = false
	}
})
</script>

<template>
  <form class="relative right-0 h-full flex flex-col h-content-headless-toolbox">
    <!-- Header tools -->
    <div class="bg-window-white border-window-header-bot w-full h-12 py-1 flex items-center px-1 text-xxs gap-0.5">
      <button 
        :disabled="isLoading || !isFormComplete"
        @click="sendEmail"
        :isLoading="isLoading"
        class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
        <img 
			src="/img/icons/contact/send-icon.webp" 
			:alt="$t('windows.contact.send')"
			:class="[ isFormComplete ? 'w-8' : 'filter grayscale w-8']"/>
        <p>{{ $t('windows.contact.send') }}</p>
      </button>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex gap-px">
        <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
          <img src="/img/icons/contact/cut-icon.webp" :alt="$t('windows.contact.cut')" class="w-4 filter grayscale"/>
          <p>{{ $t('windows.contact.cut') }}</p>
        </div>
        <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
          <img src="/img/icons/contact/copy-icon.webp" :alt="$t('windows.contact.copy')" class="w-4 filter grayscale"/>
          <p>{{ $t('windows.contact.copy') }}</p>
        </div>
        <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
          <img src="/img/icons/contact/paste-icon.webp" :alt="$t('windows.contact.paste')" class="w-4 filter grayscale"/>
          <p>{{ $t('windows.contact.paste') }}</p>
        </div>
        <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
          <img src="/img/icons/contact/undo-icon.webp" :alt="$t('windows.contact.undo')" class="w-4 filter grayscale"/>
          <p>{{ $t('windows.contact.undo') }}</p>
        </div>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
        <img src="/img/icons/contact/check-icon.webp" :alt="$t('windows.contact.check')" class="w-6"/>
        <p>{{ $t('windows.contact.check') }}</p>
      </div>
      <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
        <img src="/img/icons/contact/spelling-icon.webp" :alt="$t('windows.contact.spelling')" class="w-5"/>
        <p>{{ $t('windows.contact.spelling') }}</p>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex items-center rounded-sm justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
        <img src="/img/icons/contact/attach-icon.webp" :alt="$t('windows.contact.attach')" class="w-5"/>
        <p>{{ $t('windows.contact.attach') }}</p>
      </div>
      <div class="flex justify-center items-center rounded-sm px-1 py-1 hover:border-gray-300 hover:shadow-header-tools">
        <div class="flex items-center justify-center cursor-pointer flex-col">
          <img src="/img/icons/contact/priority-icon.webp" :alt="$t('windows.contact.priority')" class="w-5"/>
          <p>{{ $t('windows.contact.priority') }}</p>
        </div>
        <div class="block border-solid down-arrow ml-3"></div>
      </div>
      <div class="h-full w-px bg-gray-192 mx-1 md:mx-0.5"/>
      <div class="flex items-center justify-center px-2 py-1 cursor-pointer flex-col hover:border-gray-300 hover:shadow-header-tools">
        <img src="/img/icons/contact/sign-icon.webp" :alt="$t('windows.contact.sign')" class="w-6"/>
        <p>{{ $t('windows.contact.sign') }}</p>
      </div>
    </div>
    <!-- Header content -->
    <div class="bg-window-white border-window-header-bot w-full h-18 flex items-center flex-col p-2 text-xxs gap-2 ">
      <label class="w-full flex gap-2 font-trebuchet-pixel">
        <div class="flex gap-1 w-14 items-center cursor-default">
          <img src="/img/icons/contact/mailto-icon.webp" :alt="$t('windows.contact.to')" class="w-4 h-4" />
          <p class="font-trebuchet-pixel">{{ $t('windows.contact.to') }}</p>
		</div>
        <input type="text" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none placeholder:text-black" placeholder="jaguinpaul@gmail.com" readonly="readonly"/>
      </label>
      <label class="w-full flex gap-2">
        <div class="flex gap-1 w-14 items-center cursor-default">
          <img src="/img/icons/contact/mailto-icon.webp" :alt="$t('windows.contact.from')" class="w-4 h-4" />
          <p class="font-trebuchet-pixel">{{ $t('windows.contact.from') }}</p>
        </div>
        <input v-model="userEmail" type="email" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none font-trebuchet-pixel" placeholder="jean_doe@wanadoo.com"/>
      </label>
      <label class="w-full flex gap-2">
        <div class="flex gap-1 w-14 items-center justify-center font-trebuchet-pixel cursor-default">
          {{ $t('windows.contact.subject') }}
        </div>
        <input type="text" v-model="emailSubject" class="w-full h-5 border border-input-blue p-1.5 text-xs outline-none font-trebuchet-pixel"/>
      </label>
    </div>
    <!-- Main content -->
    <div class="flex flex-col w-full h-content-contact bg-white overflow-auto gap-2 font-trebuchet-pixel">
      <div class="m-2">
		  <div class="max-w-prose">
			  <textarea v-model="userMessage" class="w-full h-40 border border-input-blue p-2 text-xs outline-none" :placeholder="$t('windows.contact.msgPlaceholder')"></textarea>
			</div>
			<p class="text-xs font-trebuchet-pixel italic mb-2">
				{{ $t('windows.contact.description') }}
			</p>
			<div class="flex gap-2 items-center">
				<p class="text-xs text-green-600 font-medium" v-show="emailSent">
					{{ $t('windows.contact.success') }}
				</p>
				<p class="text-xs text-red font-medium" v-show="errorMessage">{{ errorMessage }}</p>
			</div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.down-arrow {
  content: '';
  border-width: 3px 3px 0px;
  border-color: rgb(0, 0, 0) transparent;
}
</style>
