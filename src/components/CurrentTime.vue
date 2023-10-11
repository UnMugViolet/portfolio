<template>
  <div>
    <h4 class="mx-px text-xs cursor-default">{{ formattedTime }}</h4>
  </div>
</template>

<script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  export default {
    name: 'CurrentTime',
    setup() {
      const formattedTime = ref(getCurrentTime());
      let interval;

      function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour format
        const minutes = now.getMinutes();
        const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
      }

      function updateTime() {
        formattedTime.value = getCurrentTime();
      }

      onMounted(() => {
        // Update the formattedTime property every 2 seconds
        interval = setInterval(updateTime, 2000);
      });

      onBeforeUnmount(() => {
        // Clear the interval to stop updating when the component is unmounted
        clearInterval(interval);
      });

      return {
        formattedTime,
      };
    },
  };
</script>
