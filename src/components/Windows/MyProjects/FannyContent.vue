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
        <img src="/img/icons/projects/tools/vscode.svg" :alt="$t('common.icon') + ' Visual Studio Code'"
          class="w-9 h-9" />
        <p class="font-bold mt-px">VsCode</p>
      </div>

    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      {{ $t('project.fanny-portfolio.contextFirstParagraph') }}
    </p>
    <br />
    <p>
      {{ $t('project.fanny-portfolio.contextSecondParagraph') }}
    </p>
    <br />
        <p>
      {{ $t('project.fanny-portfolio.contextThirdParagraph') }}
    </p>
    <br />
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.fanny-portfolio.goalFirst') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalSecond') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalThird') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalFourth') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalFifth') }}</li>
      <li>{{ $t('project.fanny-portfolio.goalSixth') }}</li>
    </ul>
    <div
      class="w-full justify-center mt-5 mb-2 flex flex-row items-center gap-0.5 cursor-pointer transition-all hover:underline hover:text-heroic-blue hover:fill-heroic-blue">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="fill-current">
        <path
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
      </svg>
      <a rel="noopener" href="https://github.com/UnMugViolet/Fanny_portfolio" target="_blank" class="cursor-pointer">
        {{$t('buttons.linkRepository') }}
      </a>
    </div>
  </section>
  <a rel="noopener" :href="ProjectLink" target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center">
    <img src="/img/icons/projects/tools/web.svg" :alt="'View website ' + ProjectName" class="w-3 h-3 mr-0.5" />
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
let ProjectName = 'Portfolio Fanny';
let ProjectLink = 'https://fanny-seraudie.fr';
</script>

