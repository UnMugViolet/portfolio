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
          <button @click="resetGame"
            class="w-7 h-7 flex items-center justify-center rounded-sm bg-gray-192 border-2 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 outline-none active:border-transparent">
            <img :src="emojiSrc(emoji)" :alt="emoji + ' emoji'"
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
      <div @click="startGame" class="w-[188px] h-[188px] grid border-4 border-solid border-l-gray-128 border-t-gray-128 border-b-gray-245 border-r-gray-245" 
        :style="{ gridTemplateColumns: `repeat(${cols}, 20px)`, gridTemplateRows: `repeat(${rows}, 20px)` }">
        <div @mousedown="switchEmoji" @mouseup="uncoverCell(index)" v-for="(cell, index) in cells" :key="index"
          class="relative w-full h-full">
          <div v-if="!cell.uncovered"
            class="absolute w-full h-full border-3 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 bg-silver">
          </div>
          <div v-else class="absolute w-full h-full border-t-2 border-l-2 border-gray-128">
          </div>
          <img :src="'/img/icons/minesweeper/open' + 1 + '.png'" alt="empty" class="w-full h-full p-0.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

let timer = ref(0)
const rows = 9
const cols = 9
const amountMines = ref(10)
const gameRunning = ref(false)
let timerInterval = null
let emoji = ref('smile')
const cells = ref(Array.from({ length: rows * cols }, () => ({ uncovered: false })));

const uncoverCell = (index) => {
  cells.value[index].uncovered = true;
};

onMounted(() => {
  document.addEventListener('mouseup', resetEmoji)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', resetEmoji)
})

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
  emoji.value = 'smile'
  cells.value = Array.from({ length: rows * cols }, () => ({ uncovered: false }));
}

// Function to get the image source for a digit
const emojiSrc = (emoji) => `/img/icons/minesweeper/${emoji}.png`

const switchEmoji = (e) => {
  if (e.button === 0) {
    emoji.value = emoji.value === 'smile' ? 'surprise' : 'smile'
  }
}

const resetEmoji = () => {
  emoji.value = 'smile'
}

// Function to get the image source for a digit
const digitSrc = (digit) => `/img/icons/minesweeper/digit${digit}.png`

const timerDigits = computed(() => numberConverter(timer.value))
const minesDigits = computed(() => numberConverter(amountMines.value))

const numberConverter = (num) => {
  const clampedNum = Math.max(0, Math.min(num, 999))
  return {
    hundreds: Math.floor(clampedNum / 100),
    tens: Math.floor((clampedNum % 100) / 10),
    units: clampedNum % 10
  }
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