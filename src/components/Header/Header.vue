<template>
    <header class="header-component">
        <div class="absolute left-0 header-radius overflow-hidden bottom-0 mb-8 modal-size z-10 bg-color-blue-window">
            <div class="w-full h-full relative overflow-hidden">
                <div class="h-16 flex items-center px-2 header-top-background">
                    <ProfilePicture class="w-11 h-11 stroke-white-1 header-profile-shadow"/>
                    <h2 class="text-lg ml-2 text-white text-shadow-header">Paul Jaguin</h2>
                </div>
                <section class="relative w-full h-full px-0.5">
                    <hr class="absolute top-0 left-0 right-0 bg-orange-hr block"/>
                    <div class="w-full h-full flex">
                        <div class="w-7/12 h-full bg-white px-1 py-1"> 
                            <div class="py-2 flex flex-col gap-3">
                                <RightFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/projects-icon.png" alt="A propos">
                                    </template>
                                    <template #title>
                                        Mes projets
                                    </template>
                                    <template #subtitle>
                                        Voir tous mes projets
                                    </template>
                                </RightFeatureLayout>
                                <RightFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/email-icon.png" alt="A propos">
                                    </template>
                                    <template #title>
                                        E-mail
                                    </template>
                                    <template #subtitle>
                                        Me contacter
                                    </template>
                                </RightFeatureLayout>
                                <RightFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/cv-icon.png" alt="A propos">
                                    </template>
                                    <template #title>
                                        Mon CV
                                    </template>
                                    <template #subtitle>
                                        Voir toutes mes expériences
                                    </template>
                                </RightFeatureLayout>
                            </div>
                        </div>
                        <div class="w-1/2 h-full bg-color-blue-header-left left-component px-1 py-1">
                            <div class="py-2">
                                <LeftFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/docs-icon.png" alt="A propos">
                                    </template>
                                    <template #text>
                                        A propos
                                    </template>
                                </LeftFeatureLayout>
                                <LeftFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/images-icon.png" alt="A propos">
                                    </template>
                                    <template #text>
                                        Mes images
                                    </template>
                                </LeftFeatureLayout>
                                <LeftFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/musiques-icon.png" alt="A propos">
                                    </template>
                                    <template #text>
                                        Mes musiques
                                    </template>
                                </LeftFeatureLayout>
                                <LeftFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/calendar-icon.png" alt="A propos">
                                    </template>
                                    <template #text>
                                        Calendrier
                                    </template>
                                </LeftFeatureLayout>
                                <LeftFeatureLayout @click="turnOffHeader">
                                    <template #img>
                                        <img src="src/assets/img/icons/play-icon.png" alt="A propos">
                                    </template>
                                    <template #text>
                                        Jouer
                                    </template>
                                </LeftFeatureLayout>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="bg absolute bottom-0 h-12 w-full ">
                    <div class="header-bot-background h-full flex justify-end items-center">
                        <div class="flex h-5/6 gap-3 mr-2">
                            <button class="flex text-white text-xs h-full items-center buttons-header-bottom px-1 full-screen" @click="turnOffHeader">
                                <img src="src/assets/img/icons/key-log-icon.png" alt="Se déconnecter" class="w-fit h-4/6 mr-0.5"/>
                                <p class="small-p">Se Déconnecter</p>
                            </button>
                            <button class="flex text-white text-xs h-full items-center buttons-header-bottom px-1 full-screen" @click="turnOffHeader" >
                                <img src="src/assets/img/icons/shutdown-icon.png" alt="Éteindre l'ordinateur" class="w-fit h-4/6 mr-0.5"/>
                                <p class="small-p">Éteindre L'ordinateur</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import ProfilePicture from '../ProfilePicture.vue';
    import LeftFeatureLayout from './LeftFeatureLayout.vue';
    import RightFeatureLayout from './RightFeatureLayout.vue';

    const emit = defineEmits();

    const turnOffHeader = () => {
        emit('toggle-header');
    };
</script>


<style scoped>
.header-radius{
    border-radius: 5px 5px 0px 0px;
}

.modal-size{
    width: 430px;
    height: 530px;
}

.left-component{
    border-left: 1px solid rgba(58, 58, 255, 0.37);
}
</style>



