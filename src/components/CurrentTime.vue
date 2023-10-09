<template>
    <div>
      <h4 class="mx-px text-xs cursor-default">{{ formattedTime }}</h4>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CurrentTime',
    data() {
      return {
        formattedTime: this.getCurrentTime()
      };
    },
    methods: {
      getCurrentTime(){
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour format
        const minutes = now.getMinutes();
        const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
      },
      updateTime() {
      this.formattedTime = this.getCurrentTime();
    }
    },
    mounted() {
      // Update the currentTime data property every minutes
      this.interval = setInterval(() => {
        this.updateTime();
      }, 60000);
    },
    beforeDestroy() {
      // Clear the interval to stop updating when the component is destroyed
      clearInterval(this.interval);
    }
  };
  </script>