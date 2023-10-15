<template>
    <div class="bg absolute bottom-0 h-12 w-full ">
        <div class="header-bot-background h-full flex justify-end items-center">
            <div class="flex h-5/6 gap-3 mr-2">
                <button class="flex text-white text-xs h-full items-center buttons-header-bottom px-1">
                    <img src="src/assets/img/icons/key-log-icon.png" alt="Se déconnecter" class="w-fit h-4/6 mr-0.5"/>
                    <p class="small-p">Se Déconnecter</p>
                </button>
                <button class="flex text-white text-xs h-full items-center buttons-header-bottom px-1">
                    <img src="src/assets/img/icons/shutdown-icon.png" alt="Éteindre l'ordinateur" class="w-fit h-4/6 mr-0.5"/>
                    <p class="small-p">Éteindre L'ordinateur</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .buttons-header-bottom:hover{
        background-color: rgba(60, 80, 210, 0.5);
    }

</style>