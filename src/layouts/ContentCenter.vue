<script setup></script>

<template>
  <section class="h-svh w-screen overflow-hidden">
    <div class="flex items-center justify-center h-full w-full">
      <slot name="top"></slot>
      <div class="app-container relative">
        <div class="flex flex-col items-center justify-center w-full h-full">
          <slot name="center"></slot>

          <slot name="bottom-center"></slot>
        </div>
      </div>
      <slot name="bottom"></slot>
    </div>
  </section>
</template>
