
<script setup>
// Vue
import { ref, onMounted  } from 'vue'

// Components
import ContentCenter from '../layouts/ContentCenter.vue'
import LoadingBar from '../components/LoadingBar.vue'
import Transition  from '../components/Transition.vue'
import ProfilePicture from '../components/ProfilePicture.vue'

// Icons
import ShutdownIcon from '../components/icons/ShutdownIcon.vue'

const showStep1 = ref(true);
const showStep2 = ref(false);
const showStep3 = ref(false);
const showStep4 = ref(false);

const startLoading = () => {
  // Step 1: Show bg black
  showStep1.value = true;
  setTimeout(() => {
    // Step 2: Show loading bar
    showStep1.value = false;
    showStep2.value = true;
    setTimeout(() => {
      // Step 3: Show loading blue
      showStep2.value = false;
      showStep3.value = true;
      setTimeout(() => {
        // Step 4: Show connection lobby
        showStep3.value = false;
        showStep4.value = true;
      }, 2000);
    }, 8000);
  }, 2000);
};

onMounted(() => {
  // Start the loading process
  startLoading();
});


</script>

<template>
    <div>
        <!-- Step 1 -->
        <ContentCenter v-if="showStep1" class="bg-black"/>

        <!-- Step 2 -->
        <Transition v-if="showStep2" name="fade" mode="out-in">
            <ContentCenter class="bg-black">
                <template #center>
                    <div class="md:w-4/12 w-64 ml-5">
                        <img src="src/assets/img/logo-portfolio-white.svg" alt="logo démarrage">
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

        <!-- Step 3 -->
        <ContentCenter v-if="showStep3" class="bg-color-load-blue radial-gradient-loading">


            <template #top>
                <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2 ">

                </div>
            </template>

            <template #center>
                <div class="md:w-4/12 w-64 ml-5 mb-10">
                        <img src="src/assets/img/Logo-portfolio-black.svg" alt="logo démarrage">
                    </div>
            </template>

            <template #bottom>
                <div class="absolute bg-color-load-header-blue w-full md:h-48 h-28 bottom-0 up-stroke-green-2 ">
                    <div class="flex justify-center items-center h-full">
                    </div>
                </div>
            </template>
        </ContentCenter>

        <!-- Step 4 -->
        <ContentCenter v-if="showStep4" class="bg-color-load-blue radial-gradient-loading">
            <template #top>
                <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2 ">

                </div>
            </template>

            <template #center>
                <div class="flex w-full">
                    <div class="flex justify-end w-1/2">
                        <div>
                            <div class="flex justify-end w-full">
                                <div class="w-2/3">
                                    <img src="src/assets/img/logo-portfolio-white.svg" alt="logo portfolio paul jaguin" class="mb-3">
                                </div>
                            </div>
                            <div class="w-full flex justify-end">
                                <div class="w-10/12 mr-12">
                                    <h2 class="text-white text-lg text-right ">Pour commencer, cliquez sur mon nom d’utilisateur</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-px h-full line-loading-gradient mx-3"></div>
                    
                    <div class="flex items-center w-1/2">
                        <div class="h-28 w-80 ">
                            <div class="h-full w-full rounded-xl bg-color-login-blue flex items-center py-2.5 px-6 stroke-white-1">
                                <div class="w-full flex items-center">
                                    <ProfilePicture class="w-16 h-16 stroke-yellow-2"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>

            <template #bottom>
                <div class="absolute bg-color-load-header-blue w-full md:h-48 h-1/5 bottom-0 up-stroke-green-2 ">
                    <div class="flex justify-center items-center h-full">
                        <div class="app-container">
                            <div class="flex justify-between items-center md:gap-8 gap-3">
                                <div class="flex items-center md:gap-4 gap-1 cursor-pointer">
                                    <div class="md:w-9 w-11">
                                        <ShutdownIcon />
                                    </div>
                                    <div class="text-white md:text-xl text-xs">
                                        <h2>Arrêter la session</h2>
                                    </div>
                                </div>
                                <div class="flex text-white md:text-sm text-xs font-bold md:mr-10 md:w-2/6">
                                    <h4>
                                        Après avoir ouvert ma session, vous pourrez visiter mes projets
                                        réalisés dans les dossiers de l’ordinateur.
                                        Allez sur le bureau et cliquez sur le dossier projet. 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ContentCenter>
    </div>

        

</template>


<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
