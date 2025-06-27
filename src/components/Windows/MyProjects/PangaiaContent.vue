<template>
  <div class="text-xs">
    <div class="flex w-full items-center justify-center md:justify-start flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vuejs.svg" :alt="$t('common.icon') + ' vuejs'" class="w-9 h-9 p-px" />
        <p class="font-bold mt-px">Vue.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/laravel.svg" :alt="$t('common.icon') + ' laravel'" class="w-9 h-9" />
        <p class="font-bold mt-px">Laravel</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/tailwind.svg" :alt="$t('common.icon') + ' tailwind'" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/gnu.svg" :alt="$t('common.icon') + ' gnu'" class="w-9 h-9" />
        <p class="font-bold mt-px">Makefile</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/mariadb.svg" :alt="$t('common.icon') + ' mariadb'" class="w-9 h-9" />
        <p class="font-bold mt-px">Maria DB</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/swagger.svg" :alt="$t('common.icon') + ' swagger'" class="w-9 h-9" />
        <p class="font-bold mt-px">Swagger</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/postman.svg" :alt="$t('common.icon') + ' postman'" class="w-9 h-9" />
        <p class="font-bold mt-0.5">Postman</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/workbench.svg" :alt="$t('common.icon') + ' workbench'" class="w-9 h-9" />
        <p class="font-bold">Workbench</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/looping.svg" :alt="$t('common.icon') + ' looping'" class="w-10 h-10" />
        <p class="font-bold">Looping</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/docker.svg" :alt="$t('common.icon') + ' docker'" class="w-9 h-9" />
        <p class="font-bold">Docker</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>{{ $t('project.pangaia.contextFirstParagraph') }}</p>
    <p>{{ $t('project.pangaia.contextSecondParagraph') }}</p>
    <p>{{ $t('project.pangaia.contextThirdParagraph') }}</p>
    <p>{{ $t('project.pangaia.contextFourthParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.pangaia.goalFirst') }}</li>
      <li>{{ $t('project.pangaia.goalSecond') }}</li>
      <li>{{ $t('project.pangaia.goalThird') }}</li>
      <li>{{ $t('project.pangaia.goalFourth') }}</li>
      <li>{{ $t('project.pangaia.goalFifth') }}</li>
      <li>{{ $t('project.pangaia.goalSixth') }}</li>
    </ul>
    <h3 class="mt-5 mb-2">{{ $t('common.tasksDone') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.pangaia.tasksDoneFirst') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneSecond') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneThird') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneFourth') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneFifth') }}</li>
      <li>{{ $t('project.pangaia.tasksDoneSixth') }}</li>
    </ul>
    <div class="w-full justify-center mt-5 mb-2 flex flex-row items-center gap-0.5 cursor-pointer transition-all hover:underline hover:text-heroic-blue">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 364.000000 364.000000"
        preserveAspectRatio="xMidYMid meet"
        class="fill-current"
      >
        <g transform="translate(0.000000,364.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M94 3625 c-12 -30 7 -45 126 -105 286 -143 484 -281 660 -459 124 -124 186 -210 255 -349 76 -155 107 -272 165 -630 47 -283 82 -441 140 -610 149 -442 404 -811 731 -1057 293 -220 616 -348 1013 -400 129 -17 152 -14 161 16 10 30 -9 45 -88 69 -105 32 -227 91 -341 167 -126 83 -324 279 -416 411 -184 262 -314 580 -376 917 -27 143 -27 513 -1 635 65 301 231 495 454 529 81 13 119 6 228 -40 50 -20 111 -41 138 -44 33 -5 53 -15 67 -32 19 -24 37 -89 28 -98 -10 -10 -122 27 -190 62 -40 21 -77 40 -83 42 -22 8 76 -86 165 -159 117 -96 251 -233 314 -322 26 -38 52 -68 57 -68 14 0 11 76 -6 173 -17 100 -64 235 -100 289 -41 62 -47 85 -30 118 18 36 19 112 1 163 -22 60 -77 144 -138 212 -32 35 -58 65 -58 68 0 19 210 93 445 157 194 52 197 53 193 88 l-3 27 -100 -3 c-210 -5 -585 -55 -733 -98 l-83 -24 -47 24 c-103 52 -188 71 -322 70 -136 0 -203 -14 -323 -65 -142 -60 -311 -196 -393 -315 l-39 -56 -20 28 c-33 46 -114 134 -166 179 -141 126 -350 229 -684 339 -166 54 -557 166 -580 166 -8 0 -18 -7 -21 -15z"
          />
          <path
            d="M256 2846 c-76 -32 -122 -69 -168 -137 -118 -171 -69 -404 109 -517 139 -88 319 -70 442 44 85 78 116 151 116 269 0 82 -3 97 -32 156 -39 79 -102 140 -181 177 -83 39 -204 42 -286 8z"
          />
          <path d="M743 1860 c-87 -20 -171 -98 -199 -184 -21 -63 -15 -166 14 -222 86 -168 321 -204 455 -70 84 84 107 220 54 322 -63 122 -195 185 -324 154z" />
          <path
            d="M3294 1110 c-37 -12 -101 -78 -110 -115 -11 -45 2 -121 26 -155 46 -64 146 -88 220 -50 56 28 83 72 88 141 5 68 -19 121 -72 157 -37 25 -107 35 -152 22z"
          />
          <path d="M1108 1000 c-132 -40 -192 -188 -124 -304 46 -79 145 -120 230 -96 91 25 156 109 156 200 0 134 -136 238 -262 200z" />
          <path d="M3163 579 c-94 -60 -76 -203 31 -244 119 -46 230 81 171 196 -35 66 -136 90 -202 48z" />
        </g>
      </svg>
      <a rel="noopener" href="https://framagit.org/gardeners/pangaia-server" target="_blank" class="cursor-pointer">{{ $t('buttons.linkRepository') }}</a>
    </div>
    <div class="w-full flex items-center flex-col">
      <div class="w-full">
        <h3 class="mt-5 mb-2">{{ $t('common.design') }}</h3>
      </div>
      <iframe height="450" width="100%" class="p-2" :title="$t('common.design') + ' Pangaia'" :src="iframeSrc" allowfullscreen />
    </div>
    <div class="mb-2">
      <h3 class="mt-5">{{ $t('common.CDM') }}</h3>
      <p class="italic text-gray-500 text-xxs mb-px">
        {{ $t('project.pangaia.CDMText') }}
      </p>
      <img src="/img/projects/pangaia/pangaia-database-MCD.webp " alt="Modèle conceptuel de données - Pangaia" class="w-full max-w-[750px]" />
    </div>
    <div>
      <h3 class="mt-5">{{ $t('common.PDM') }}</h3>
      <p class="italic text-gray-500 text-xxs">
        {{ $t('project.pangaia.PDMText') }}
      </p>
      <img src="/img/projects/pangaia/MPD-Pangaia.svg" alt="Modèle conceptuel de données - Pangaia" class="w-full" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://pangaia.app"
    target="_blank"
    class="absolute flex items-center justify-center bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked"
  >
    <img src="/img/icons/projects/tools/web.svg" :alt="$t('buttons.linkWebSite') + ' ' +  ProjectName" class="w-3 h-3 mr-0.5"/>
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const iframeSrc = ref('')
let ProjectName = 'Pangaia';


onMounted(() => {
  iframeSrc.value = `https://www.figma.com/embed?embed_host=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &embed_origin=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &url=https://www.figma.com/design/33VqWpR9IdeCFCb0WRM7XM/Pangaia-V2?node-id=0-1&t=hOyOj8Jinrqt1ZkM-1`
})
</script>
