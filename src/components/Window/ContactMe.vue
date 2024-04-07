<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import WindowSideMenu from '@/components/Window/WindowSideMenu.vue'

const props = defineProps({
    subMenuItems: Array,
});

const userName = ref('');
const userEmail = ref('');
const userMessage = ref('');

// Get variables from .env
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

const sendEmail = () => {
    emailjs.send(serviceId, templateId, {
        from_name: userName.value,
        message: userMessage.value,
        reply_to: userEmail.value,
    }, publicKey)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
</script>

<template>
    <div class="relative right-0 h-content-window flex">
        <WindowSideMenu :subMenuItems="props.subMenuItems"/>

        <!-- Main content -->
        <form class="flex flex-col w-full h-full bg-white overflow-auto p-2 gap-2">
            <input v-model="userName" type="text" class="w-full h-8 border border-blue-400 p-2 text-xs" placeholder="Name">
            <input v-model="userEmail" type="email" class="w-full h-8 border border-blue-400 p-2 text-xs" placeholder="Email">
            <textarea v-model="userMessage" class="w-full h-32 border border-blue-400 p-2 text-xs" placeholder="Message"></textarea>
            <button 
                @click.prevent="sendEmail"
                class="w-fit h-8 border border-gray-100 text-xs">
                Envoyer
            </button>
        </form>
    </div>  
</template>