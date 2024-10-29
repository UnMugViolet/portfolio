<template>
  <div class="relative right-0 h-full flex">
    <div class="w-full h-content-headless-toolbox bg-silver border-l-3 border-t-3 border-white py-1.5 px-1">
      <!-- Score and time -->
      <div class="flex items-center border-2 border-b-white border-r-white border-l-gray-128 border-t-gray-128 mb-2 justify-between h-16 md:h-10 px-1 p-1">
        <div class="flex h-full border-b border-r border-white">
          <img :src="digitSrc(minesDigits.hundreds)" alt="0" class="h-full" />
          <img :src="digitSrc(minesDigits.tens)" alt="1" class="h-full" />
          <img :src="digitSrc(minesDigits.units)" alt="0" class="h-full" />
        </div>
        <div class="border-l border-t border-gray-128 active:rounded-sm active:border-l-2 active:border-t-2 active:border-b active:border-r">
          <button
            @click="resetGame"
            class="w-10 h-10 md:w-7 md:h-7 flex items-center justify-center rounded-sm bg-gray-192 border-2 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 outline-none active:border-transparent"
          >
            <img :src="emojiSrc(emoji)" :alt="emoji + ' emoji'" class="w-8 h-8 md:w-5 md:h-5 active:translate-x-px active:translate-y-px" />
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
        class="grid border-4 border-solid border-l-gray-128 border-t-gray-128 border-b-gray-245 border-r-gray-245"
        :style="{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
        }"
      >
        <div
          @mousedown="handleMouseDown($event, index)"
          @mouseup="handleMouseUp($event, index)"
          @contextmenu="handleRightClick($event, index)"
          v-for="(cell, index) in cells"
          :key="index"
          :data-index="index"
          class="relative w-full aspect-square"
        >
          <div
            v-if="!cell.uncovered && pressedCellIndex !== index"
            class="absolute w-full h-full border-3 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 bg-silver"
          ></div>
          <div v-else class="absolute w-full h-full border-t-2 border-l-2 border-gray-128"></div>
          <img v-if="cell.uncovered && !cell.mine" :src="'/img/icons/minesweeper/open' + cell.neighborMines + '.webp'" alt="empty" class="w-full h-full p-0.5" />
          <img v-if="cell.uncovered && cell.mine && cell.isClickedMine" src="/img/icons/minesweeper/mine-death.webp" alt="mine" class="w-full h-full p-0.5 bg-red" />
          <img v-if="cell.uncovered && cell.mine && !cell.isClickedMine" src="/img/icons/minesweeper/mine-ceil.webp" alt="mine" class="w-full h-full p-0.5" />
          <img v-if="!cell.uncovered && cell.flagged" src="/img/icons/minesweeper/flag.webp" alt="flag" class="relative z-10 w-full h-full p-0.5" />
          <img v-if="!cell.uncovered && cell.questioned" src="/img/icons/minesweeper/question.webp" alt="question" class="relative z-10 w-full h-full p-0.5" />
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
const minesLeft = ref(amountMines.value)
const gameRunning = ref(false)
let timerInterval = null
let emoji = ref('smile')
const cells = ref([])
const firstClick = ref(true)
const pressedCellIndex = ref(null)
const isMouseDown = ref(false)

const uncoverCell = (index) => {
  const cell = cells.value[index]

  // Prevent uncovering cells if the game is not running or if the cell is flagged or questioned
  if (!gameRunning.value || cell.uncovered || cell.flagged || cell.questioned) return

  if (cell.mine) {
    // Game over - clicked on a mine
    cell.uncovered = true
    emoji.value = 'dead'
    cell.isClickedMine = true
    revealMines()
    clearInterval(timerInterval)
    gameRunning.value = false
  } else {
    cell.uncovered = true
    if (cell.neighborMines === 0) {
      // Uncover all neighboring cells if the cell has no mines around it
      const neighbors = getNeighbors(index)
      neighbors.forEach(uncoverCell)
    }

    if (checkWin()) {
      emoji.value = 'win'
      revealMines()
      clearInterval(timerInterval)
      gameRunning.value = false
    }
  }
}

const handleMouseDown = (event, index) => {
  if (event.button === 0) {
    // Left mouse button
    const cell = cells.value[index]
    if (!cell.flagged && !cell.questioned && emoji.value !== 'dead') {
      switchEmoji(event)
      if (firstClick.value) {
        firstClick.value = false
        startGame()
      }
      isMouseDown.value = true
      pressedCellIndex.value = index
    }
  }
}

const handleMouseUp = (event, index) => {
  if (event.button === 0 && isMouseDown.value) {
    // Left mouse button
    resetEmoji()
    uncoverCell(index)
    isMouseDown.value = false
    pressedCellIndex.value = null
  }
}

const handleMouseMove = (event) => {
  if (isMouseDown.value) {
    const cellElement = event.target.closest('.cell')
    if (cellElement) {
      const index = parseInt(cellElement.dataset.index, 10)
      pressedCellIndex.value = index
    }
  }
}

const handleGlobalMouseUp = () => {
  isMouseDown.value = false
  pressedCellIndex.value = null
}

const handleRightClick = (event, index) => {
  event.preventDefault()
  const cell = cells.value[index]
  if (emoji.value === 'dead' || emoji.value === 'win') return

  if (!cell.uncovered) {
    if (!cell.flagged && !cell.questioned) {
      cell.flagged = true
      minesLeft.value--
    } else if (cell.flagged) {
      cell.flagged = false
      minesLeft.value++
      cell.questioned = true
    } else if (cell.questioned) {
      cell.questioned = false
    }
  }
}

const checkWin = () => {
  return cells.value.every((cell) => cell.mine || cell.uncovered)
}

const revealMines = () => {
  cells.value.forEach((cell) => {
    if (cell.mine) {
      cell.uncovered = true
    }
  })
}

onMounted(() => {
  document.addEventListener('mouseup', handleGlobalMouseUp)
  document.addEventListener('mousemove', handleMouseMove)
  resetGame()
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleGlobalMouseUp)
  document.removeEventListener('mousemove', handleMouseMove)
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
  minesLeft.value = amountMines.value
  resetTimer()
  emoji.value = 'smile'
  firstClick.value = true
  clearBoard()
  placeMines()
  calculateNeighbors()
}

// Set object is as a batch of unique values so we can add mines until we reach the desired amount
const placeMines = () => {
  const mineIndices = new Set()
  while (mineIndices.size < amountMines.value) {
    mineIndices.add(Math.floor(Math.random() * rows * cols))
  }
  mineIndices.forEach((index) => {
    cells.value[index].mine = true
  })
}

// Calculate the number of mines in the neighboring cells
const calculateNeighbors = () => {
  cells.value.forEach((cell, index) => {
    if (cell.mine) return
    const neighbors = getNeighbors(index)
    let mineCount = 0
    neighbors.forEach((i) => {
      if (cells.value[i].mine) mineCount++
    })
    cell.neighborMines = mineCount
  })
}

// Look at surrounding cells and return the indices of the neighbors
const getNeighbors = (index) => {
  const neighbors = []
  const row = Math.floor(index / cols)
  const col = index % cols

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      // Check if the cell is within the bounds of the board and not the current cell
      if (r >= 0 && r < rows && c >= 0 && c < cols && (r !== row || c !== col)) {
        neighbors.push(r * cols + c)
      }
    }
  }

  return neighbors
}

// Function to get the image source for a digit
const emojiSrc = (emoji) => `/img/icons/minesweeper/${emoji}.webp`

const switchEmoji = (e) => {
  if (e.button === 0 && emoji.value !== 'dead' && emoji.value !== 'win') {
    emoji.value = emoji.value === 'smile' ? 'surprise' : 'smile'
  }
}

const resetEmoji = () => {
  if (firstClick.value || gameRunning.value) {
    emoji.value = 'smile'
  }
}

const clearBoard = () => {
  cells.value = Array.from({ length: rows * cols }, () => ({
    uncovered: false,
    flagged: false,
    questioned: false
  }))
}

// Function to get the image source for a digit
const digitSrc = (digit) => `/img/icons/minesweeper/digit${digit}.webp`

const timerDigits = computed(() => numberConverter(timer.value))
const minesDigits = computed(() => numberConverter(minesLeft.value))

const numberConverter = (num) => {
  const clampedNum = Math.max(-99, Math.min(num, 999))
  if (clampedNum < 0) {
    return {
      hundreds: '-',
      tens: Math.floor(Math.abs(clampedNum) / 10),
      units: Math.abs(clampedNum) % 10
    }
  } else {
    return {
      hundreds: Math.floor(clampedNum / 100),
      tens: Math.floor((clampedNum % 100) / 10),
      units: clampedNum % 10
    }
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
