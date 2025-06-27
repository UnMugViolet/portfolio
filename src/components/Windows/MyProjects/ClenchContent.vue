<template>
  <div class="text-xs">
    <div class="flex w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vuejs.svg" :alt="$t('common.icon') + ' vuejs'" class="w-9 h-9 p-px" />
        <p class="font-bold mt-px">Vue.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/tailwind.svg" :alt="$t('common.icon') + ' tailwind'" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/shadcn.svg" :alt="$t('common.icon') + ' shadcn'" class="w-6 h-9" />
        <p class="font-bold mt-px">shadcn/ui</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>{{ $t('project.clench.contextFirstParagraph') }}</p>
    <p>{{ $t('project.clench.contextSecondParagraph') }}</p>
    <p>{{ $t('project.clench.contextThirdParagraph') }}</p>
    <p>{{ $t('project.clench.contextFourthParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.clench.goalFirst') }}</li>
      <li>{{ $t('project.clench.goalSecond') }}</li>
      <li>{{ $t('project.clench.goalThird') }}</li>
      <li>{{ $t('project.clench.goalFourth') }}</li>
      <li>{{ $t('project.clench.goalFifth') }}</li>
      <li>{{ $t('project.clench.goalSixth') }}</li>
    </ul>
    <div
      class="w-full justify-center mt-5 mb-2 flex flex-row items-center gap-0.5 cursor-pointer transition-all hover:underline hover:text-heroic-blue hover:fill-heroic-blue"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="fill-current">
        <path
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
      <a rel="noopener" href="https://github.com/UnMugViolet/clench-fakeapp" target="_blank" class="cursor-pointer">{{ $t('buttons.linkRepository') }}</a>
    </div>
    <div class="w-full flex items-center flex-col">
      <div class="w-full">
        <h3 class="mt-5 mb-2">{{ $t('common.design') }}</h3>
      </div>
      <iframe height="450" width="100%" class="p-2" :title="$t('common.design') + ' clench'" :src="iframeSrc" allowfullscreen />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://clench-fakeapp.vercel.app"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" :alt="$t('buttons.linkWebSite') + ' ' +  ProjectName" class="w-3 h-3 mr-0.5"/>
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const iframeSrc = ref('')
let ProjectName = 'Clench'

onMounted(() => {
  iframeSrc.value = `https://www.figma.com/embed?embed_host=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &embed_origin=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &url=https://www.figma.com/file/JtNcrLNPgleQ1bsaPgb9nb/Clench`
})
</script>
