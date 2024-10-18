<template>
  <button
    class="minimize-button relative button-window-global-layout border border-white h-full w-6 before:bottom-1 before:left-1 before:absolute active:brightness-90 before:bg-white before:w-2 hover:brightness-125 cursor-pointer"
  ></button>
</template>

<style scoped>
.minimize-button {
  box-shadow: rgb(70, 70, 255) 0px -1px 2px 1px inset;
  background-image: radial-gradient(circle at 90% 90%, rgb(0, 84, 233) 0%, rgb(34, 99, 213) 55%, rgb(68, 121, 228) 70%, rgb(163, 187, 236) 90%, white 100%);
}

.minimize-button::before {
  content: '';
  height: 3px;
}
</style>
