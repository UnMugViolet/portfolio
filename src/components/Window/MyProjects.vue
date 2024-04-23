<script setup>
import projectData from '@/data/projects-data.json';
import WindowSideMenu from '@/components/Window/WindowSideMenu.vue'

const props = defineProps({
    subMenuItems: Array,
});

const categories = projectData.categories;

const activateProject = (project) => {
    project.isActive = !project.isActive;
};

</script>

<template>
    <div class="relative right-0 h-content-window flex">
        <WindowSideMenu :subMenuItems="props.subMenuItems"/>
        <!-- Content window Foreach categories and projects -->
        <div class="flex flex-col w-full h-full bg-white overflow-auto pt-0.5">
            <div v-for="category in categories" :key="category.name" class="relative group mb-3">
                <h1 class="text-xs font-semibold px-3">{{ category.name }}</h1>
                <div class="absolute left-[-12px] top-5 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>

                <!-- Content for the projects -->
                <div class="flex flex-wrap gap-2 pt-2 md:pt-3 pb-5 w-full cursor-pointer">
                    <div 
                        v-for="project in category.projects" :key="project.name" 
                        @click="activateProject(project)"
                        class="flex items-center px-4 gap-2.5"
                        :class="{ active: project.isActive }"
                        :style="{
                            backgroundColor: project.isActive ? 'rgb(11, 97, 255)' : 'transparent',
                        }">
                        <img :src="'src/assets/img/icons/' + project.icon" alt="project" class="w-10 h-10" :style="{opacity: project.isActive ? 0.5 : 1}"/>
                        <p class="text-xs font-tahoma font-medium">
                            {{ project.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<style scoped>
  .active {
    filter: drop-shadow(blue 0px 0px);
  }
</style>