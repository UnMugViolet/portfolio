<template>
    <div class="relative right-0 h-content-window overflow-hidden">
        <div class="w-full h-full bg-white overflow-auto p-2">
            <div class="grid grid-flow-col auto-cols-max gap-2">
                <img src="@/assets/img/paul-jaguin-photo-cv.webp" alt="Photo de mon cv" class="w-20 h-20">
                <div class="flex justify-center flex-col">
                    <h1 class="font-trebuchet-pixel">Paul Jaguin</h1>
                    <h2 class="font-trebuchet-pixel">{{ age }} ans</h2>
                </div>
                <div class="flex items-center ml-10">
                    <h2 class="font-trebuchet-pixel py-1">Développeur Web</h2>
                </div>
            </div>
            <div class="">
            </div>
            <div class="mt-3">
                <h2 class="font-trebuchet-pixel">Formations</h2>
                <div class="absolute left-[-12px] top-32 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>
            </div>
        </div>
    </div>  
</template>

<script setup>
import { ref } from 'vue';
    const birthdate = new Date(1999, 9, 23);
    const age = ref(Math.floor((new Date() - birthdate) / 31536000000));
</script>
