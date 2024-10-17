<template>
  <div class="relative right-0 h-full flex">
    <div class="w-full h-content-head-cut bg-silver border-l-3 border-t-3 border-white py-1.5 px-1">
      <!-- Score and time -->
      <div
        class="flex items-center border-2 border-b-white border-r-white border-l-gray-128 border-t-gray-128 mb-2 justify-between h-10 px-1 p-1">
        <div class="flex h-full border-b border-r border-white">
          <img :src="digitSrc(minesDigits.hundreds)" alt="0" class="h-full" />
          <img :src="digitSrc(minesDigits.tens)" alt="1" class="h-full" />
          <img :src="digitSrc(minesDigits.units)" alt="0" class="h-full" />
        </div>
        <div
          class="border-l border-t border-gray-128 active:rounded-sm active:border-l-2 active:border-t-2 active:border-b active:border-r">
          <button
            @click="resetGame"
            class="w-7 h-7 flex items-center justify-center rounded-sm bg-gray-192 border-2 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 outline-none active:border-transparent">
            <img src="/img/icons/minesweeper/smile.png" alt="face"
              class="w-5 h-5 active:translate-x-px active:translate-y-px" />
          </button>
        </div>
        <div class="flex h-full">
          <img :src="digitSrc(timerDigits.hundreds)" alt="score" class="h-full" />
          <img :src="digitSrc(timerDigits.tens)" alt="score" class="h-full" />
          <img :src="digitSrc(timerDigits.units)" alt="score" class="h-full" />
        </div>
      </div>
      <!-- Minesweeper content -->
      <div
        @click="startGame"
        class="grid border-4 border-solid border-t-gray-128 border-l-gray-128 border-r-gray-245 border-b-gray-245"
        :style="{ gridTemplateColumns: `repeat(${cols}, 20px)`, gridTemplateRows: `repeat(${rows}, 20px)` }">
        <div v-for="(cell, index) in rows * cols" :key="index" class="w-4.25 h-4.25 border-3 border-t-gray-245 border-l-gray-245 border-r-gray-128 border-b-gray-128"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let timer = ref(0)
const rows = 9
const cols = 9
const amountMines = ref(10)
const gameRunning = ref(false)
let timerInterval = null

// Function to get the image source for a digit
const digitSrc = (digit) => `/img/icons/minesweeper/digit${digit}.png`

const numberConverter = (num) => {
  return {
    hundreds: Math.floor(num / 100),
    tens: Math.floor((num % 100) / 10),
    units: num % 10
  }
}

const timerDigits = computed(() => numberConverter(timer.value))
const minesDigits = computed(() => numberConverter(amountMines.value))

const startGame = () => {
  if (!gameRunning.value) {
    gameRunning.value = true
    resetTimer()
    startTimer()
  }
}

const resetGame = () => {
  gameRunning.value = false
  resetTimer()
}

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timer.value < 999) {
      timer.value++
    } else {
      timer.value = 0
    }
  }, 1000)
}

const resetTimer = () => {
  clearInterval(timerInterval)
  timer.value = 0
}



</script>