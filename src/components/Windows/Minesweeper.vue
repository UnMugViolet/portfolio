<template>
  <div class="relative right-0 h-full flex">
    <div class="w-full h-content-head-cut bg-silver border-l-3 border-t-3 border-white py-1.5 px-1">
      <!-- Score and time -->
      <div class="flex items-center border-2 border-b-white border-r-white border-l-gray border-t-gray mb-5 justify-between h-10 px-1 p-1">
        <div class="flex h-full border-b border-r border-white">
          <img src="/img/icons/minesweeper/digit0.png" alt="0" class="h-full">
          <img src="/img/icons/minesweeper/digit1.png" alt="1" class="h-full">
          <img src="/img/icons/minesweeper/digit0.png" alt="0" class="h-full">
        </div>
        <div class="border-l border-t border-gray-128 active:border-l-2 active:border-t-2 active:border-b active:border-r">
          <button class="w-7 h-7 flex items-center justify-center bg-gray-192 border-2 border-t-gray-245 border-l-gray-245 border-b-gray-128 border-r-gray-128 outline-none active:border-transparent">
            <img src="/img/icons/minesweeper/smile.png" alt="face" class="w-5 h-5 active:translate-x-px active:translate-y-px">
          </button>
        </div>
        <div class="flex h-full">
          <img src="/img/icons/minesweeper/digit0.png" alt="score" class="h-full">
          <img src="/img/icons/minesweeper/digit0.png" alt="score" class="h-full">
          <img src="/img/icons/minesweeper/digit0.png" alt="score" class="h-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timer = ref(0); 
const rows = 9;
const cols = 9;
const amountMines = ref(10); 

const createBoard = () => {

}

const startGame = () => {
  startTimer();

  // Repart all the bombs at coordinates on the grid

}

const startTimer = () => {
  timer++; 

  // Increment the timer each seconds

}
</script>


