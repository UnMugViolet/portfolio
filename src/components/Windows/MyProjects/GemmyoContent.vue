<template>
    <section class="text-xs md:text-header-window">
        <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start flex-wrap gap-4 md:min-w-80 md:ml-1">
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/symfony.svg" :alt="$t('common.icon') + ' symfony'"
                    class="w-9 h-9" />
                <p class="font-bold mt-px">Symfony</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/twig.svg" :alt="$t('common.icon') + ' twig'"
                    class="w-9 h-9 p-px" />
                <p class="font-bold mt-px">Twig</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/javascript.svg" :alt="$t('common.icon') + ' javascript'" class="w-9 h-9" />
                <p class="font-bold">Javascript</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/scss.svg" :alt="$t('common.icon') + ' scss'"
                    class="w-9 h-9 p-px" />
                <p class="font-bold mt-px">Scss</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/mariadb.svg" :alt="$t('common.icon') + ' mariadb'" class="w-9 h-9" />
                <p class="font-bold mt-px">Maria DB</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/docker.svg" :alt="$t('common.icon') + ' docker'" class="w-9 h-9" />
                <p class="font-bold">Docker</p>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <img src="/img/icons/projects/tools/vscode.svg" :alt="$t('common.icon') + ' Visual Studio Code'"
                    class="w-9 h-9" />
                <p class="font-bold mt-px">VsCode</p>
            </div>
        </div>
        <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
        <p>{{ $t('project.gemmyo.contextFirstParagraph') }}</p>
        <p>{{ $t('project.gemmyo.contextSecondParagraph') }}</p>
        <h3 class="mt-5 mb-2">{{ $t('common.tasksDone') }}</h3>
        <ul class="list-disc ml-3">
            <li>{{ $t('project.gemmyo.tasksDoneFirst') }}</li>
                <video class="mt-5 w-full max-w-5xl pb-5" autoplay controls loop muted>
                    <source src="/img/projects/gemmyo/gemmyo-stones-video.webm" type="video/webm" />
                    <source src="/img/projects/gemmyo/gemmyo-stones-video.mp4" type="video/mp4" />
                    {{ $t('common.videoNotSupported') }}    
                </video>
            <li>{{ $t('project.gemmyo.tasksDoneSecond') }}</li>
            <video class="mt-5 w-full max-w-5xl pb-5" autoplay controls loop muted>
                <source src="/img/projects/gemmyo/gemmyo-chains-video.webm" type="video/webm" />
                <source src="/img/projects/gemmyo/gemmyo-chains-video.mp4" type="video/mp4" />
                {{ $t('common.videoNotSupported') }}
            </video>
            <li class="mt-1">{{ $t('project.gemmyo.tasksDoneThird') }}</li>
            <li class="mt-1">{{ $t('project.gemmyo.tasksDoneFourth') }}</li>
            <li class="mt-1">{{ $t('project.gemmyo.tasksDoneFifth') }}</li>
            <li class="mt-1">{{ $t('project.gemmyo.tasksDoneSixth') }}</li>
        </ul>

    </section>
    <a
        rel="noopener"
        href="https://gemmyo.com"
        target="_blank"
        class="absolute flex items-center justify-center bottom-2 right-1 md:right-6 h-6 text-xs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked"
    >
        <img src="/img/icons/projects/tools/web.svg" :alt="$t('buttons.linkWebSite') + ' ' +  ProjectName" class="w-3 h-3 mr-0.5"/>
        {{ $t('buttons.linkWebSite') }}
    </a>
</template>

<script setup>
let ProjectName = 'Gemmyo';
</script>
