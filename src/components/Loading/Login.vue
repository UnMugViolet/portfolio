<script setup>
    import ContentCenter from '../../layouts/ContentCenter.vue'
    import LoginForm from './LoginForm.vue'

    // Icons
    import ShutdownIcon from '../icons/ShutdownIcon.vue'
</script>

<template>
    <ContentCenter class="bg-color-load-blue radial-gradient-loading">
        <template #top>
            <div class="absolute bg-color-load-header-blue w-full md:h-32 h-1/6 top-0 down-stroke-white-2">

            </div>
        </template>

        <template #center>
            <div class="flex w-full">
                <div class="md:flex hidden justify-end items-center w-1/2 ">
                    <div>
                        <div class="flex justify-end w-full">
                            <div class="w-2/3">
                                <img src="src/assets/img/logo-portfolio-white.webp" alt="logo portfolio paul jaguin" class="mb-3">
                            </div>
                        </div>
                        <div class="w-full flex justify-end">
                            <div class="w-10/12 mr-12">
                                <h2 class="text-white text-lg text-right ">Pour commencer, cliquez sur mon nom d’utilisateur</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-px h-96 line-loading-gradient mx-3 md:flex hidden"></div>
                <LoginForm />
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
</template>
