<template>
  <button
    class="close-button relative button-window-global-layout border border-white h-full active:brightness-90 hover:brightness-125 after:h-4 after:top-0.5 after:mt-px after:absolute after:bg-white after:rotate-45 after:w-0.5 after:left-2 after:ml-px before:h-4 before:top-0.5 before:mt-px before:absolute before:bg-white before:rotate-45 before:w-0.5 before:left-2 before:ml-px cursor-pointer"
  ></button>
</template>

<style scoped>
.close-button {
  box-shadow: rgb(218, 70, 0) 0px -1px 2px 1px inset;
  background-image: radial-gradient(circle at 90% 90%, rgb(204, 70, 0) 0%, rgb(220, 101, 39) 55%, rgb(205, 117, 70) 70%, rgb(255, 204, 178) 90%, white 100%);
}

.close-button::before {
  content: '';
}

.close-button::after {
  content: '';
  transform: rotate(-45deg);
}
</style>
