<template>
  <button
    class="maximize-button relative button-window-global-layout border border-white h-full hover:brightness-125 active:brightness-90 before:absolute before:block before:left-1 before:top-1 cursor-pointer"
    @click="toggleButton"
    :class="{ clicked: isClicked }"
  ></button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isClicked = ref(false)

    const toggleButton = () => {
      isClicked.value = !isClicked.value
    }

    return {
      isClicked,
      toggleButton
    }
  }
}
</script>

<style scoped>
.maximize-button {
  box-shadow: rgb(70, 70, 255) 0px -1px 2px 1px inset;
  background-image: radial-gradient(circle at 90% 90%, rgb(0, 84, 233) 0%, rgb(34, 99, 213) 55%, rgb(68, 121, 228) 70%, rgb(163, 187, 236) 90%, white 100%);
}

.maximize-button::before {
  content: '';
  box-shadow:
    white 0px 3px inset,
    white 0px 0px 0px 1px inset;
  height: 13px;
  width: 13px;
}

.maximize-button.clicked::after {
  content: '';
  position: absolute;
  display: block;
  left: 4px;
  top: 8px;
  box-shadow:
    white 0px 2px inset,
    white 0px 0px 0px 1px inset,
    rgb(19, 109, 255) 1px -1px;
  height: 8px;
  width: 8px;
  background-color: rgb(19, 109, 255);
}

.maximize-button.clicked::before {
  content: '';
  position: absolute;
  display: block;
  left: 8px;
  top: 5px;
  box-shadow:
    white 0px 2px inset,
    white 0px 0px 0px 1px inset;
  height: 8px;
  width: 8px;
}
</style>
