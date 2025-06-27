<template>
  <div class="text-xs md:text-header-window">
    <div class="flex w-full text-xxs md:text-xs  items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/wordpress.svg" :alt="$t('common.icon') + ' Wordpress'" class="w-9 h-9" />
        <p class="font-bold mt-px">Wordpress</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/acf.svg" :alt="$t('common.icon') + ' Visual Studio Code'" class="w-9 h-9" />
        <p class="font-bold mt-px">ACF</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vscode.svg" :alt="$t('common.icon') + ' Visual Studio Code'" class="w-9 h-9" />
        <p class="font-bold mt-px">VsCode</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/ssh.svg" :alt="$t('common.icon') + ' Visual Studio Code'" class="w-9 h-9 p-0.5" />
        <p class="font-bold mt-px">SSH</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
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
    href="https://www.lemc2.com/agenda"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" :alt="$t('buttons.linkWebSite') + ' ' +  ProjectName" class="w-3 h-3 mr-0.5"/>
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
let ProjectName = 'Emc2';
</script>
