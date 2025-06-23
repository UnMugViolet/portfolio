<template>
  <div class="text-xs">
    <div class="flex w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/laravel.svg" :alt="$t('common.icon') + ' laravel'" class="w-9 h-9" />
        <p class="font-bold mt-px">Laravel</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vuejs.svg" :alt="$t('common.icon') + ' vue.js'" class="w-9 h-9" />
        <p class="font-bold mt-px">Vue.js</p>
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
        <img src="/img/icons/projects/tools/workbench.svg" :alt="$t('common.icon') + ' MySQL Workbench'" class="w-9 h-9" />
        <p class="font-bold">Workbench</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vscode.svg" :alt="$t('common.icon') + ' Visual Studio Code'" class="w-9 h-9" />
        <p class="font-bold mt-px">VsCode</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/jenkins.svg" :alt="$t('common.icon') + ' jenkins'" class="w-9 h-9" />
        <p class="font-bold mt-px">Jenkins</p>
      </div>
        <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/sonarqube.svg" :alt="$t('common.icon') + ' sonarqube'" class="w-7 h-7" />
        <p class="font-bold mt-px">Sonarqube</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2 text-lg">{{ $t('common.context') }}</h3>
    <p class="mb-2">{{ $t('project.emc2.contextFirstParagraph') }}</p>
    <p class="mb-2">{{ $t('project.emc2.contextSecondParagraph') }}</p>
    <p class="mb-2">{{ $t('project.emc2.contextThirdParagraph') }}</p>
    <p class="mb-2">{{ $t('project.emc2.contextFourthParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.emc2.goalFirst') }}</li>
      <li>{{ $t('project.emc2.goalSecond') }}</li>
      <li>{{ $t('project.emc2.goalThird') }}</li>
      <li>{{ $t('project.emc2.goalFourth') }}</li>
      <li>{{ $t('project.emc2.goalFifth') }}</li>
      <li>{{ $t('project.emc2.goalSixth') }}</li>
    </ul>
  </div>
  <a
    rel="noopener"
    href="https://www.elevage-canin-vosges.fr"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" :alt="'View website ' + ProjectName" class="w-3 h-3 mr-0.5"/>
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
let ProjectName = 'Les terres d\'Aidella';
</script>
