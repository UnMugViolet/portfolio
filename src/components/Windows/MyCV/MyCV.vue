<template>
    <div class="relative right-0 h-content-window overflow-hidden">
        <div class="w-full h-full bg-white overflow-auto p-2">
            <div>
                <ProfileHeader :age="age"/>
                <section class="mt-5">
                    <h2 class="font-trebuchet-pixel underline">Formations</h2>
                    <EducationItem v-for="education in educationData" :key="education.id" :education="education" />
                </section>
                <div class="mt-3">
                    <h2 class="font-trebuchet-pixel mt-5 underline">Expériences Professionnelles</h2>
                    <WorkExperienceItem v-for="(workExperience, index) in experienceData" :key="index" :workExperience="workExperience"/>                
                </div>
            </div>
        </div>
    </div>  
</template>

<script setup>
import { ref } from 'vue';
import ProfileHeader from './ProfileHeader.vue';
import EducationItem from './EducationItem.vue';
import cvData from '@/data/cv-data.json';
import WorkExperienceItem from './WorkExperienceItem.vue';

const birthdate = new Date(1999, 9, 23);
const age = ref(Math.floor((new Date() - birthdate) / 31536000000));

let educationData = ref(cvData.education);
let experienceData = ref(cvData.workExperience);
</script>
