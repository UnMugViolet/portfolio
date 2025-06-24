<template>
  <div class="text-xs">
    <div class="w-full">
      <div class="flex w-42 md:w-96 md:gap-0 gap-3 items-center md:justify-between justify-center flex-wrap">
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/truenas.svg" :alt="$t('common.icon') + ' truenas'" class="w-9 h-9" />
          <p class="font-bold">TrueNas Scale</p>
        </div>
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/kubernetes.svg" :alt="$t('common.icon') + ' kubernetes'" class="w-9 h-9" />
          <p class="font-bold">Kubernetes</p>
        </div>
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/docker.svg" :alt="$t('common.icon') + ' docker'" class="w-9 h-9" />
          <p class="font-bold mb-px">Docker</p>
        </div>
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/bash.svg" :alt="$t('common.icon') + ' bash'" class="w-9 h-9" />
          <p class="font-bold">Bash</p>
        </div>
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/cpu.svg" :alt="$t('common.icon') + ' cpu'" class="w-9 h-9" />
          <p class="font-bold">Hardware</p>
        </div>
        <div class="flex flex-col items-center flex-wrap">
          <img src="/img/icons/projects/tools/jenkins.svg" :alt="$t('common.icon') + ' jenkins'" class="w-9 h-9" />
          <p class="font-bold mt-px">CI / CD</p>
        </div>
      </div>
    </div>
    <video controls autoplay muted loop width="400" class="mt-5">
      <source src="/videos/montage-serveur.mp4" type="video/mp4" />
      {{ $t('common.errorVideo') }}
    </video>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>{{ $t('project.homeserver.contextFirstParagraph') }}</p>
    <p>{{ $t('project.homeserver.contextSecondParagraph') }}</p>
    <h3 class="mt-5 mb-1">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.homeserver.goalFirst') }}</li>
      <li>{{ $t('project.homeserver.goalSecond') }}</li>
      <li>{{ $t('project.homeserver.goalThird') }}</li>
      <li>{{ $t('project.homeserver.goalFourth') }}</li>
      <li>{{ $t('project.homeserver.goalFifth') }}</li>
      <li>{{ $t('project.homeserver.goalSixth') }}</li>
      <li>{{ $t('project.homeserver.goalSeventh') }}</li>
      <li>{{ $t('project.homeserver.goalEighth') }}</li>
      <li>{{ $t('project.homeserver.goalNinth') }}</li>
    </ul>
    <h3 class="mt-5 mb-1">{{ $t('common.techInfo') }}</h3>
    <p class="mb-5 text-xs underline">{{ $t('common.componentsDot') }}</p>
    <div class="grid grid-cols-3 border border-black">
      <div class="bg-gray-200 border border-black p-2">{{ $t('common.components') }}</div>
      <div class="bg-gray-200 border border-black p-2">{{ $t('common.models') }}</div>
      <div class="bg-gray-200 border border-black p-2">{{ $t('common.links') }}</div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.motherboard') }}</div>
      <div class="border border-black p-2">N5105 NAS motherboard</div>
      <div class="border border-black p-2">
        <a target="_blank" rel="noopener" class="text-purple-600" href="https://a.aliexpress.com/_m0yUkVg">{{ $t('common.viewModel') }}</a>
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.ram') }}</div>
      <div class="border border-black p-2">Crucial 2x16GO 3200</div>
      <div class="border border-black p-2">
        <a
          target="_blank"
          rel="noopener"
          class="text-purple-600"
          href="https://www.crucial.fr/memory/ddr4/ct2k8g4sfra32a?gclid=Cj0KCQjwrMKmBhCJARIsAHuEAPQP187xpSTlz_M-v5aYKLolkmkNTscRdHhrceKPLJMdY2Wvd2xeHVYaAsAvEALw_wcB&amp;ef_id=Cj0KCQjwrMKmBhCJARIsAHuEAPQP187xpSTlz_M-v5aYKLolkmkNTscRdHhrceKPLJMdY2Wvd2xeHVYaAsAvEALw_wcB:G:s&amp;gclsrc=aw.ds"
          >{{ $t('common.viewModel') }}</a
        >
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.case') }}</div>
      <div class="border border-black p-2">Node 804 fractal</div>
      <div class="border border-black p-2">
        <a
          target="_blank"
          rel="noopener"
          class="text-purple-600"
          href="https://www.amazon.fr/Fractal-Design-Node-804-Black/dp/B00JBBH93K/ref=asc_df_B00JBBH93K/?tag=googshopfr-21&amp;linkCode=df0&amp;hvadid=194891673251&amp;hvpos=&amp;hvnetw=g&amp;hvrand=12214467104878387699&amp;hvpone=&amp;hvptwo=&amp;hvqmt=&amp;hvdev=m&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=9055664&amp;hvtargid=pla-81991589846&amp;psc=1"
          >{{ $t('common.viewModel') }}</a
        >
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.powerSupply') }}</div>
      <div class="border border-black p-2">Be quiet 12 M 550w 80+ gold</div>
      <div class="border border-black p-2">
        <a target="_blank" rel="noopener" class="text-purple-600" href="https://www.ldlc.com/fiche/PB00540382.html">{{ $t('common.viewModel') }}</a>
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.ssdBoot') }}</div>
      <div class="border border-black p-2">Silicon Power PCIe M.2</div>
      <div class="border border-black p-2">
        <a
          target="_blank"
          rel="noopener"
          class="text-purple-600"
          href="https://www.amazon.fr/Silicon-Power-256GB-Gen3x4-Internal/dp/B07ZH6QR8Q/ref=mp_s_a_1_3?adgrpid=69841264517&amp;hvadid=602376801544&amp;hvdev=m&amp;hvlocphy=9055664&amp;hvnetw=g&amp;hvqmt=b&amp;hvrand=11304459242616836538&amp;hvtargid=kwd-393755839186&amp;hydadcr=4014_2189719&amp;keywords=ssd+256+go+nvme&amp;qid=1691417251&amp;sr=8-3"
          >{{ $t('common.viewModel') }}</a
        >
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.ssdNas') }}</div>
      <div class="border border-black p-2">Nvme Red - 2to</div>
      <div class="border border-black p-2">
        <a
          target="_blank"
          rel="noopener"
          class="text-purple-600"
          href="https://shop.sandisk.com/fr-fr/products/ssd/internal-ssd/wd-red-sn700-nvme-ssd?sku=WDS200T1R0C-68BDK0"
          >{{ $t('common.viewModel') }}</a
        >
      </div>

      <div class="border border-black p-2">{{ $t('project.homeserver.specs.splitter') }}</div>
      <div class="border border-black p-2">Cable SATA répartiteur x6</div>
      <div class="border border-black p-2">
        <a target="_blank" rel="noopener" class="text-purple-600" href="https://a.aliexpress.com/_mr1DWz0">{{ $t('common.viewModel') }}</a>
      </div>
    </div>
  </div>
  <p class="mb-2 mt-5 text-xs underline">HDD :</p>
  <div class="grid grid-cols-4 border border-black mt-5 text-xs">
    <div class="bg-gray-200 border border-black p-2">{{ $t('common.disks') }}</div>
    <div class="bg-gray-200 border border-black p-2">{{ $t('common.model') }}</div>
    <div class="bg-gray-200 border border-black p-2">{{ $t('common.quantity') }}</div>
    <div class="bg-gray-200 border border-black p-2">{{ $t('common.link') }}</div>

    <div class="border border-black p-2">{{ $t('project.homeserver.specs.hddSpecs') }}</div>
    <div class="border border-black p-2">WD Red Plus - 6 To</div>
    <div class="border border-black p-2">4</div>
    <div class="border border-black p-2">
      <a
        rel="noopener"
        target="_blank"
        class="text-purple-600"
        href="https://www.westerndigital.com/fr-fr/products/internal-drives/wd-red-plus-sata-3-5-hdd?sku=WD60EFPX"
        >{{ $t('common.viewModel') }}</a
      >
    </div>
  </div>
  <a
    rel="noopener"
    href="https://homepage.rocketegg.systems"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" :alt="$t('buttons.linkWebSite') + ' ' +  ProjectName" class="w-3 h-3 mr-0.5"/>
    {{ $t('buttons.linkWebSite') }}
  </a>
</template>

<script setup>
let ProjectName = 'Homeserver';
</script>
