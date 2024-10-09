<script setup>
import { ref, watch } from 'vue';
import emailjs from 'emailjs-com';
import WindowSideMenu from '@/components/Windows/WindowSideMenu.vue'
import Button from '../Buttons/Button.vue';

const props = defineProps({
  subMenuItems: {
    type: Array,
    required: false,
    default: () => []
  }
});

const userName = ref('');
const userEmail = ref('');
const userMessage = ref('');
const errorMessage = ref('');
const emailSent = ref(false);
const isLoading = ref(false);


// Get variables from .env
const adminName = import.meta.env.VITE_APP_ADMIN_NAME;
const adminEmailAddress = import.meta.env.VITE_APP_ADMIN_EMAIL_ADDRESS;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

const sendEmail = async () => {
    if (!userName.value || !userEmail.value || !userMessage.value) {
        emailSent.value = false;
        errorMessage.value = 'Veuillez remplir tous les champs avant d\'envoyer votre message'; 
        return;
    }

    // Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail.value)) {
        emailSent.value = false;
        errorMessage.value = userEmail.value + " n'est pas une adresse e-mail valide";
        return;
    }

    isLoading.value = true;

    try {
        const result = await emailjs.send(serviceId, templateId, {
            to_name: adminName,
            from_name: userName.value,
            message: userMessage.value,
            reply_to: userEmail.value,
        }, publicKey);


        // Reset form and error message
        errorMessage.value = ''; 
        userName.value = ''; 
        userEmail.value = ''; 
        userMessage.value = ''; 
        emailSent.value = true;
        isLoading.value = false;
    } catch (error) {
        console.log(error.text);
        emailSent.value = false;
        errorMessage.value = "Le message n'a pas pu être envoyé. Vous pouvez me contacter directement à l'adresse email suivante: " + adminEmailAddress;
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
});

// Change cursor to wait when loading
watch(isLoading, (newValue) => {
    if (newValue) {
        document.body.classList.add('cursor-wait');
    } else {
        document.body.classList.remove('cursor-wait');
    }
});
</script>

<template>
    <div class="relative right-0 h-content-window flex">
        <WindowSideMenu :subMenuItems="props.subMenuItems"/>

        <!-- Main content -->
        <form class="flex flex-col w-full h-full bg-white overflow-auto p-2 gap-2 font-trebuchet-pixel">
            <h1 class="font-semibold">Me contacter</h1>
            <p class="text-xs font-medium">Envie de parler d'un projet, ou de simplement papoter, laissez moi un message, je reviendrai vers vous dans les plus brefs délais ! </p>
            <div class="max-w-prose">
                <label class="text-xs">Nom</label>
                <input v-model="userName" type="text" class="w-full h-6 border border-input-blue p-2 text-xs outline-none" placeholder="Jean Doe">
            </div>
            <div class="max-w-prose">    
                <label class="text-xs">Email</label>
                <input v-model="userEmail" type="email" class="w-full h-6 border border-input-blue p-2 text-xs outline-none" placeholder="jean_doe@wanadoo.com">
            </div>
            <div class="max-w-prose">
                <label class="text-xs">Message</label>
                <textarea v-model="userMessage" class="w-full h-28 border border-input-blue p-2 text-xs outline-none" placeholder="Message"></textarea>
            </div>
            <div class="flex gap-2 items-center">
                <Button 
                    @submit="sendEmail"
                    :isLoading="isLoading">
                    Envoyer
                </Button>
                <p class="text-xs text-green-500 font-medium" v-show="emailSent">Votre message a été envoyé avec succès</p>
                <p class="text-xs text-red-500 font-medium" v-show="errorMessage">{{ errorMessage }} </p>
            </div>
        </form>
    </div>  
</template>