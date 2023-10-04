<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ContentCenter from './layouts/ContentCenter.vue'

import Loading from './components/Loading.vue'
</script>

<template>
    <ContentCenter class="bg-black">
        <template #center>
            <div class="md:w-1/3 w-48 ml-5">
                <img src="src/assets/img/logo-portfolio-dark.svg" alt="logo démarrage">
            </div>
        </template>

        <template #bottom-center>
            <Loading />
        </template>

        <template #bottom>
            <div class="app-container absolute bottom-0 my-16">
                    <div>
                        <div class="flex justify-between gap-1.5">
                            <div>
                                <h1 class="text-white md:text-xl text-sm">
                                    Bienvenu sur mon ordinateur.
                                </h1>
                            </div>
                            <div>
                                <h2 class="text-white md:text-2xl text-md logo-font">
                                    UnMugViolet
                                </h2>
                            </div>
                        </div>
                    </div>


                </div>
        </template>

    </ContentCenter>
</template>