<template>
    <header class="header-component">
        <div class="absolute left-0 bg-color-blue-window-header header-radius overflow-hidden bottom-0 mb-8 modal-size z-10">
            <div class="w-full h-full relative overflow-hidden">
                <div class="h-16 flex items-center px-2 header-top-component-shadow header-top-component">
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
                                        <img src="src/assets/img/icons/explorer-icon.png" alt="A propos">
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
                <div class="absolute bottom-0 h-12 w-full bg-color-blue-window-header">
    
                </div>
            </div>

        </div>
    </header>
</template>

<script setup>
    import ProfilePicture from '../ProfilePicture.vue';
    import LeftFeatureLayout from './LeftFeatureLayout.vue';
    import RightFeatureLayout from './RightFeatureLayout.vue';
    import { defineEmits } from 'vue';

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



