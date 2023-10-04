
<script setup>
import ContentCenter from '../layouts/ContentCenter.vue'
import LoadingBar from '../components/LoadingBar.vue'
import Transition  from '../components/Transition.vue'


// Icons
import ShutdownIcon from '../components/icons/ShutdownIcon.vue'
</script>

<template>
        <Transition v-if="showContent" name="fade" appear>
            <ContentCenter class="bg-black">
                <template #center>
                    <div class="md:w-4/12 w-64 ml-5">
                        <img src="src/assets/img/logo-portfolio.svg" alt="logo démarrage">
                    </div>
                </template>
    
                <template #bottom-center>
                    <LoadingBar />
                </template>
    
                <template #bottom>
                    <div class="app-container absolute bottom-0 my-16">
                            <div>
                                <div class="flex justify-between items-center gap-8 text-white ">
                                    <div>
                                        <h1 class="md:text-xl text-sm">
                                            Bienvenu sur mon ordinateur.
                                        </h1>
                                    </div>
                                    <div>
                                        <h2 class="md:text-2xl text-md logo-font">
                                            UnMugViolet
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                </template>
            </ContentCenter>
        </Transition>


        <ContentCenter v-if="!showContent" class="bg-color-load-blue">


            <template #top>
                <div class="absolute bg-color-load-header-blue w-full h-32 top-0 down-stroke-white-2 ">

                </div>
            </template>

            <template #center>
                <div class="md:w-4/12 w-64 ml-5">
                        <img src="src/assets/img/Logo-portfolio-black.svg" alt="logo démarrage">
                    </div>
            </template>

            <template #bottom>
                <div class="absolute bg-color-load-header-blue w-full h-48 bottom-0 up-stroke-green-2 ">
                    <div class="flex justify-center items-center h-full">
                        <div class="app-container">
                            <div class="flex justify-between items-center gap-8">
                                <div class="flex items-center gap-4 text-white text-lg ">
                                    <div>
                                        <ShutdownIcon />
                                    </div>
                                    <div>
                                        <h2>Arrêter la session</h2>
                                    </div>
                                </div>
                                <div class="flex text-white text-sm font-bold mr-10">
                                    <h4>
                                        Après avoir ouvert ma session, vous pourrez visiter mes projets <br/>
                                        réalisés dans les dossiers de l’ordinateur.<br/>
                                        Allez sur le bureau et cliquez sur le dossier projet. 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ContentCenter>

</template>


<script>
    export default {
        data() {
            return {
            showContent: true,
            };
        },
        mounted() {
            // Hide the content after 6 seconds
            setTimeout(() => {
            this.showContent = false;
            }, 6000); // 6000 milliseconds = 6 seconds
        },
    };
</script>


<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
