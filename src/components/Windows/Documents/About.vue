<template>
  <section>
    <div class="flex justify-between">
      <h1 class="font-semibold">{{ $t('windows.documents.about.title') }}</h1>
      <img src="/img/windows-xp-badges.webp" alt="Windows XP badges" class="w-auto h-6" />
    </div>
    <hr class="mt-2 mb-2 border-t-1 border-black" />
    <div class="flex flex-col gap-1.5 text-xs font-medium my-2">
      <p>{{ $t('windows.documents.about.contextFirstParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextSecondParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextThirdParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextFourthParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextFifthParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextSixthParagraph') }}</p>
      <p>{{ $t('windows.documents.about.contextSeventhParagraph') }}</p>
    </div>
    <h1 class="font-semibold">{{ $t('windows.documents.about.secondTitle') }}</h1>
    <hr class="mt-2 mb-2 border-t-1 border-black" />
    <ul class="flex flex-col gap-1.5 text-xs font-medium my-2 list-disc pl-3">
      <li>{{ $t('windows.documents.about.helpFirst') }}</li>
      <li>{{ $t('windows.documents.about.helpSecond') }}</li>
      <li>{{ $t('windows.documents.about.helpThird') }}</li>
      <li>{{ $t('windows.documents.about.helpFourth') }}</li>
      <li>{{ $t('windows.documents.about.helpFifth') }}</li>
    </ul>
  </section>
</template>
