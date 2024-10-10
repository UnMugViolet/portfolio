<script setup>
import { ref, onMounted } from 'vue'

const iframeSrc = ref('')

onMounted(() => {
  iframeSrc.value = `https://www.figma.com/embed?embed_host=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &embed_origin=${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}
    &url=https://www.figma.com/file/JtNcrLNPgleQ1bsaPgb9nb/Clench`
})
</script>

<template>
  <div class="text-xs">
    <div
      class="flex w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1"
    >
      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z"
          />
        </svg>
        <p class="font-bold mt-px">Vue.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"
          />
        </svg>
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
          />
        </svg>
        <p class="font-bold mt-px">shadcn/ui</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">Contexte</h3>
    <p>
      Un exercice dans le cadre d'un cours de Framework CSS & Maquettage à MyDigitalSchool Rennes.
    </p>
    <p>
      Le but, faire l'interface graphique d'une application web en une semaine. Pas de backend donc,
      mais toute la conception graphique
    </p>
    <p>
      Un site web sur le thème du campus, faire un support fictif sur lequel le BDE puisse
      communiquer.
    </p>
    <p>
      Avec l'aide de Baptiste Marie, étudiant également, nous avons donc créée l'identité graphique
      et développer ce site web.
    </p>
    <h3 class="mt-5 mb-2">Objectifs</h3>
    <ul class="list-disc ml-3">
      <li>Maquetter un site web et un wireframe en se basant sur un cahier des charges</li>
      <li>Développer une identité graphique simple</li>
      <li>Développer le front de l'application en utilisant un Framework CSS</li>
      <li>Mettre en production</li>
      <li>Travailler en équipe</li>
      <li>Tenir le délai d'une semaine</li>
    </ul>
    <div
      class="w-full justify-center mt-5 mb-2 flex flex-row items-center gap-0.5 cursor-pointer transition-all hover:underline hover:text-heroic-blue hover:fill-heroic-blue"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        class="fill-current"
      >
        <path
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
      <a
        rel="noopener"
        href="https://github.com/UnMugViolet/clench-fakeapp"
        target="_blank"
        class="cursor-pointer"
        >Voir le projet</a
      >
    </div>
    <div class="w-full flex items-center flex-col">
      <div class="w-full">
        <h3 class="mt-5 mb-2">Maquette</h3>
      </div>
      <iframe
        height="450"
        width="100%"
        class="p-2"
        title="Clench maquette"
        :src="iframeSrc"
        allowfullscreen
      />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://clench-fakeapp.vercel.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked"
    >Lien vers le site
  </a>
</template>
