
<script setup>
import { ref, onMounted  } from 'vue'

// Components
import Step1Loading from '../components/Loading/Step1Loading.vue'
import Step2Loading from '../components/Loading/Step2Loading.vue'
import Step3Loading from '../components/Loading/Step3Loading.vue'
import Login from '../components/Loading/Login.vue'

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
        <Step1Loading v-if="showStep1"/>
        <Step2Loading v-if="showStep2"/>
        <Step3Loading v-if="showStep3"/>
        <Login v-if="showStep4"/>
    </div>
</template>
