<template>
  <button class="flex w-full h-10 items-center gap-1.5 px-0.5 component-style hover:text-white">
    <div class="w-9 h-9">
      <slot name="img" />
    </div>
    <div class="text-left">
      <h3 class="font-verdana font-semibold text-xs">
        <slot name="title" />
      </h3>
      <p class="small-p text-gray-400">
        <slot name="subtitle" />
      </p>
    </div>
  </button>
</template>

<style scoped>
.component-style:hover {
  background: #2f71cd;
}

.component-style:hover .small-p {
  color: white;
}
</style>
