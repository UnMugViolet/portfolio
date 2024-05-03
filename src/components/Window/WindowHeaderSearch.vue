<template>
    <div class="flex items-center top-0 w-full h-5 px-0.5 bg-window-white border-top-grey shadow-header-window">
        <div>
            <p class="small-p text-gray-500 px-1.5 cursor-default">
                Adresse
            </p>
        </div>
        <div class="w-full h-full bg-white border border-blue-400 pl-1 flex items-center justify-between">
            <div class="flex items-center overflow-hidden">
                <img :src="iconSrc" alt="projects-icon" class="w-3.5 h-3.5"/>
                <p class="px-1 small-p cursor-default truncate mt-px">
                    {{ title }}
                </p>
            </div>
            <div class="mr-0.5 hover:brightness-110">
                <img src="@/assets/img/icons/down-icon.png" alt="voir" class="w-3.5 h-3.5"/>
            </div>
        </div>
        <div class="flex items-center px-2 gap-1 w-20">
            <img src="@/assets/img/icons/right-green-arrow-icon.png" alt="Aller" class="w-3.5 h-3.5"/>
            <p class="small-p cursor-default">Aller</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: String,
    title: String,
    iconSrc: String,
    activeProjectName: String,
});

const title = computed(() => {
    if(props.id === 'myProjects') {        
        let formattedProjectName = props.activeProjectName 
            ? props.activeProjectName.toLowerCase().replace(/ /g, '-')
            : '';
        return formattedProjectName ? `${props.title}/${formattedProjectName}` : props.title;
    }
    return props.title;

});
</script>