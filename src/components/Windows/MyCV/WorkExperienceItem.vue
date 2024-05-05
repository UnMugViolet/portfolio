<template>
  <div>
    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">{{ workExperience.jobTitle }}</h4>
    <p class="font-trebuchet-pixel font-medium text-xs"> {{ workExperience.company }} | {{ workExperience.year }}</p>
    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
      <li v-for="(responsibility, index) in workExperience.responsibilities" :key="index">
        {{ responsibility }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  workExperience: Object,
});
</script>