<template>
    <div class="relative top-0 w-full h-9 bg-window-white border-top-grey overflow-hidden">
        <div class="flex items-center h-full min-w-max">
            <div class="flex items-center px-1">
                <div class="flex items-center mr-2">
                    <img src="@/assets/img/icons/right-arrow-green-icon.png" alt="précédent" class="w-7 h-7 flex-shrink-0"/>
                    <p class="small-p mr-2 cursor-default">Retour</p>
                    <div class="block border-solid down-arrow"></div>
                </div>
                <div class="flex items-center mr-1">
                    <img src="@/assets/img/icons/left-arrow-green-icon.png" alt="suivant" class="w-7 h-7 flex-shrink-0"/>
                    <div class="block border-solid down-arrow ml-px"></div>
                </div>
            </div>
            <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-1">
                <img src="@/assets/img/icons/folder-opening-icon.png" alt="projects-icon" class="w-6 h-6 flex-shrink-0"/>
            </div>
            <div class="h-5/6 w-px bg-black bg-opacity-20 mx-0.5"></div>
            <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-0.5">
                <img src="@/assets/img/icons/magnifier-icon.png" alt="projects-icon" class="w-auto h-5 flex-shrink-0"/>
                <p class="small-p px-1 cursor-default">Rechercher</p>
            </div>
            <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-0.5">
                <img src="@/assets/img/icons/folder-open-icon.png" alt="projects-icon" class="w-auto h-6 flex-shrink-0"/>
                <p class="small-p px-1 cursor-default">Fichiers</p>
            </div>
            <div class="h-5/6 w-px bg-black bg-opacity-20 mx-0.5"></div>
            <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-1">
                <img src="@/assets/img/icons/projects-icon-sm.png" alt="projects-icon" class="w-6 h-6 flex-shrink-0"/>
                <div class="block border-solid down-arrow ml-2"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.down-arrow {
    content: "";
    border-width: 3px 3px 0px;
    border-color: rgb(0, 0, 0) transparent;
}
</style>
