<template>
    <div class="relative right-0 h-content-window overflow-hidden">
        <div class="w-full h-full bg-white overflow-auto p-2">
            <div class="w-[284px]">
                <div class="grid grid-flow-col auto-cols-max gap-2">
                    <img src="@/assets/img/paul-jaguin-photo-cv.webp" alt="Photo de mon cv" class="w-20 h-20">
                    <div class="flex justify-center flex-col">
                        <h1 class="font-trebuchet-pixel">Paul Jaguin</h1>
                        <h2 class="font-trebuchet-pixel">{{ age }} ans</h2>
                    </div>
                    <div class="flex items-center ml-10">
                        <h2 class="font-trebuchet-pixel py-1">Développeur Web</h2>
                    </div>
                </div>
                <div class="mt-5">
                    <h2 class="font-trebuchet-pixel underline">Formations</h2>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-2">BACCALAURÉAT ÉCONOMIQUE ET SOCIAL</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">Lycée Raymond Queneau | 2015 - 2018</p>
                    <p class="font-trebuchet-pixel font-medium text-xs">Section Économique et Social, spécialisation Économie Approfondie</p>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">DUT TECHNIQUES DE COMMERCIALISATION </h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">IUT du Havre, site caucriauville | 2018 - 2020</p>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">LICENCE ÉCONOMIE-GESTION PARCOURS MARKETING</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">Université de Varsovie, Faculté de Management | 2020 - 2021</p>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">BACHELOR DÉVELOPPEMENT WEB</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">MyDigitalSchool Rennes | 2022 - 2024</p>
                </div>
                <div class="mt-3">
                    <h2 class="font-trebuchet-pixel mt-5 underline">Expériences Professionnelles</h2>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">VENDEUR</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">La Mie Câline, Elbeuf (76) | Juin - Août 2017</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Encaissement</li>
                        <li>Cuisson et préparation des commandes</li>
                        <li>Gestion des stocks et contrôle des livraisons</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">STAGIAIRE EVENEMENTIEL</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">Iut site Caucriauville, Le Havre (76) | Avril 2019</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Création d'une plaquette</li>
                        <li>Prospection de restaurants partenaires</li>
                        <li>Accueil et accompagnement des participants</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">PROJET TUTEURÉ - SKI</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">Iut site Caucriauville, Le Havre (76) | 2019 - 2020</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Actions commerciales pour financer le projet</li>
                        <li>Organisation d'un séjour au ski pour 130 participants</li>
                        <li>Négociation du contrat pour l'année suivante</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">STAGIAIRE COMMERCIAL</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">ACLP, Le Havre (76) | Avril - Juin 2020</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Développement commercial</li>
                        <li>Campagne de mailing</li>
                        <li>Création d'un site web</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">OPÉRATEUR DE SAISIE</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">Tessi, Rennes (35) | Décembre - Juin 2021 - 2022</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Saisies bancaires pour le compte des finances publiques</li>
                        <li>Ouverture de compte bancaire</li>
                        <li>Participation à la démarche qualité</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-trebuchet-pixel uppercase text-xs mt-5">ALTERNANT DÉVELOPPEUR WEB</h4>
                    <p class="font-trebuchet-pixel font-medium text-xs">SCREENUP, Rennes (35) | Octobre - Juin 2024</p>
                    <ul class="font-trebuchet-pixel list-disc pl-5 text-xs">
                        <li>Conception et création de site</li>
                        <li>Mise en Production</li>
                        <li>Développement opérationnel sur serveur</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
</template>

<script setup>
import { ref } from 'vue';
    const birthdate = new Date(1999, 9, 23);
    const age = ref(Math.floor((new Date() - birthdate) / 31536000000));
</script>
