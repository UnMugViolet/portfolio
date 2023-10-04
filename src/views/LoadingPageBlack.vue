
<script setup>
import ContentCenter from '../layouts/ContentCenter.vue'
import LoadingBar from '../components/LoadingBar.vue'
</script>

<template>
    <ContentCenter class="bg-black">
        <template #center>
            <div class="md:w-2/5 w-64 ml-5">
                <img src="src/assets/img/logo-portfolio-dark.svg" alt="logo démarrage">
            </div>
        </template>

        <template #bottom-center>
            <LoadingBar />
        </template>

        <template #bottom>
            <div class="app-container absolute bottom-0 my-16">
                    <div>
                        <div class="flex justify-between items-center gap-8">
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