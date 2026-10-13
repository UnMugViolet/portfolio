<template>
  <section class="text-xs md:text-header-window">
    <div class="flex w-full text-xs items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/laravel.svg" :alt="$t('common.icon') + ' laravel'" class="w-9 h-9" />
        <p class="font-bold mt-px">Laravel</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vuejs.svg" :alt="$t('common.icon') + ' vue.js'" class="w-9 h-9 p-px" />
        <p class="font-bold mt-px">Vue.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/orchid.svg" :alt="$t('common.icon') + ' vue.js'" class="w-9 h-9 p-0.75" />
        <p class="font-bold mt-px">Orchid</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/tailwind.svg" :alt="$t('common.icon') + ' tailwind'" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/gnu.svg" :alt="$t('common.icon') + ' GNU'" class="w-9 h-9" />
        <p class="font-bold mt-px">Makefile</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/workbench.svg" :alt="$t('common.icon') + ' MySQL Workbench'"
          class="w-9 h-9" />
        <p class="font-bold">Workbench</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vscode.svg" :alt="$t('common.icon') + ' Visual Studio Code'"
          class="w-9 h-9" />
        <p class="font-bold mt-px">VsCode</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/jenkins.svg" :alt="$t('common.icon') + ' jenkins'"
          class="w-9 h-auto p-px" />
        <p class="font-bold mt-px">CD</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/sonarqube.svg" :alt="$t('common.icon') + ' sonarqube'" class="w-7 h-7" />
        <p class="font-bold mt-px">Sonarqube</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2 text-md">{{ $t('common.context') }}</h3>
    <p class="mb-2">{{ $t('project.aidella.contextFirstParagraph') }}</p>
    <p class="mb-2">{{ $t('project.aidella.contextSecondParagraph') }}</p>
    <p class="mb-2">{{ $t('project.aidella.contextThirdParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.aidella.goalFirst') }}</li>
      <li>{{ $t('project.aidella.goalSecond') }}</li>
      <li>{{ $t('project.aidella.goalThird') }}</li>
      <li>{{ $t('project.aidella.goalFourth') }}</li>
      <li>{{ $t('project.aidella.goalFifth') }}</li>
      <li>{{ $t('project.aidella.goalSixth') }}</li>
    </ul>
    <h3 class="mt-5 mb-2">{{ $t('common.tasksDone') }}</h3>
    <div>
      <p class="font-semibold italic text-gray-500 mb-2">{{ $t('project.aidella.tasksDoneFirst') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneFirstDetails') }}</p>
      <img src="/img/projects/aidella/database-modelisation-aidella.webp"
        :alt="$t('common.PDM') + ' - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
    </div>
    <div class="mt-5 mb-2">
      <p class="font-semibold italic text-gray-500 mb-2">{{ $t('project.aidella.tasksDoneSecond') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneSecondDetails') }}</p>
    </div>
    <div class="mt-5 mb-2">
      <p class="font-semibold italic text-gray-500 mb-2">{{ $t('project.aidella.tasksDoneThird') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneThirdDetails') }}</p>
    </div>
    <div class="mt-5 mb-2">
      <p class="font-semibold italic text-gray-500 mb-2">{{ $t('project.aidella.tasksDoneFourth') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneFourthDetails') }}</p>
      <div>
        <p class="text-xs md:text-sm font-semibold">Dashboard</p>
        <img src="/img/projects/aidella/dashboard-aidella.webp"
          :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
        <p class="text-xs md:text-sm font-semibold">{{ $t('common.list') }}</p>
        <img src="/img/projects/aidella/list-race-dog-aidella.webp"
          :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
        <p class="text-xs md:text-sm font-semibold">{{ $t('common.modifications') }}</p>
        <img src="/img/projects/aidella/main-content-dog-aidella.webp"
          :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
        <img src="/img/projects/aidella/modify-content-dog-aidella.webp"
          :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
        <img src="/img/projects/aidella/seo-dog-post-aidella.webp"
          :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
      </div>
    </div>
    <div class="mt-5 mb-2">
      <p class="font-semibold italic text-gray-500 mb-2">{{ $t('project.aidella.tasksDoneFifth') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneFifthDetails') }}</p>
      <p class="mb-2">{{ $t('project.aidella.tasksDoneFifthDetailsSecond') }}</p>
        <img src="/img/projects/aidella/jenkins-pipeline-aidella.webp"
         :alt="'Back-office - ' + ProjectName" class="w-full max-w-[750px] mb-2" />
    </div>  
  </section>
</template>

<script setup>
let ProjectName = 'Les terres d\'Aidella';
</script>
