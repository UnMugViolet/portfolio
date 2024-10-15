<script setup>
import { ref } from 'vue'
import ProfileHeader from './ProfileHeader.vue'
import EducationItem from './EducationItem.vue'
import cvData from '@/data/cv-data.json'
import WorkExperienceItem from './WorkExperienceItem.vue'

const birthdate = new Date(1999, 8, 23)
const today = new Date()
let age = ref(today.getFullYear() - birthdate.getFullYear())

// Adjust age if the current date has not passed the birthdate in the current year
if (
  today.getMonth() < birthdate.getMonth() ||
  (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
) {
  age.value--
}

let educationData = ref(cvData.education)
let experienceData = ref(cvData.workExperience)
</script>

<template>
  <div class="relative right-0 h-content-window overflow-hidden">
    <div class="w-full h-full bg-white overflow-auto p-2">
      <div>
        <ProfileHeader :age="age" />
        <section class="mt-5">
          <h2 class="font-trebuchet-pixel underline">Formations</h2>
          <EducationItem
            v-for="education in educationData"
            :key="education.id"
            :education="education"
          />
        </section>
        <div class="mt-3">
          <h2 class="font-trebuchet-pixel mt-5 underline">Expériences Professionnelles</h2>
          <WorkExperienceItem
            v-for="(workExperience, index) in experienceData"
            :key="index"
            :workExperience="workExperience"
          />
        </div>
      </div>
    </div>
  </div>
  <a
    rel="noopener"
    href="pdf/Cv Paul Jaguin.pdf"
    download="Cv Paul Jaguin.pdf"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked"
  >
    {{ $t('buttons.downloadCV') }}
  </a>
</template>
