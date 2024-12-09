import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Paul Jaguin - Développeur Web',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://pauljaguin.com'
          },
          {
            name: 'title',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            name: 'description',
            content:
              "Découvrez le portfolio de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'portfolio, paul jaguin, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Paul Jaguin'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:description',
            content:
              "Découvrez le portfolio de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            property: 'og:description',
            content:
              "Découvrez le portfolio de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Paul Jaguin - Développeur Web'
          },
          {
            property: 'og:url',
            content: 'https://pauljaguin.com'
          },
          {
            property: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:locale',
            content: 'fr_FR'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Bureau | Paul Jaguin - Développeur Web',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://pauljaguin.com/office'
          },
          {
            name: 'title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'bureau, paul jaguin, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Paul Jaguin'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'application-name',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'og:description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'og:site_name',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'og:url',
            content: 'https://pauljaguin.com/office'
          },
          {
            name: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:locale',
            content: 'fr_FR'
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
