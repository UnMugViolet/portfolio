<template>
  <section>
    <h1 class="font-semibold">{{ $t('windows.documents.legal.title') }}</h1>
    <hr class="mt-2 mb-2 border-t-1 border-black" />
    <p class="small-p mb-3">{{ $t('windows.documents.legal.firstParagraph') }}</p>

    <h2>{{ $t('windows.documents.legal.edit') }}</h2>
    <hr class="mt-1 mb-2 border-t-1 border-gray-400" />
    <p class="small-p">{{ $t('windows.documents.legal.secondParagraph') }}</p>
    <p class="small-p mb-3">{{ $t('windows.documents.legal.thirdParagraph') }}</p>

    <h2>{{ $t('windows.documents.legal.hosting') }}</h2>
    <hr class="mt-1 mb-2 border-t-1 border-gray-400" />
    <p class="small-p mb-3">{{ $t('windows.documents.legal.fourthParagraph') }}</p>

    <h2>{{ $t('windows.documents.legal.dirPublication') }}</h2>
    <hr class="mt-1 mb-2 border-t-1 border-gray-400" />
    <p class="small-p mb-3">{{ $t('windows.documents.legal.fifthParagraph') }}</p>

    <h2>{{ $t('windows.documents.legal.contact') }}</h2>
    <hr class="mt-1 mb-2 border-t-1 border-gray-400" />
    <p class="small-p">{{ $t('windows.documents.legal.sixthParagraph') }}</p>
    <p class="small-p mb-3">contact@pauljaguin.com</p>

    <h2>{{ $t('windows.documents.legal.tracking') }}</h2>
    <hr class="mt-1 mb-2 border-t-1 border-gray-400" />
    <div id="matomo-opt-out" class="small-p"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://matomo.rocketegg.systems/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1'
  script.async = true
  document.getElementById('matomo-opt-out').appendChild(script)
})
</script>