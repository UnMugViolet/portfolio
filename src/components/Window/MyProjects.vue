<script setup>
import WindowSideMenu from '@/components/Window/WindowSideMenu.vue'

const props = defineProps({
    subMenuItems: Array,
});

</script>

<template>
    <div class="relative right-0 h-content-window flex">
        <WindowSideMenu :subMenuItems="props.subMenuItems"/>
        <!-- Content window -->
        <div class="flex flex-col w-full h-full bg-white overflow-auto pt-0.5">
            <div class="relative group mb-3">
                <h1 class="text-xs font-semibold px-3">Sites web</h1>
                <div class="absolute left-[-12px] top-5 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>
            </div>
            <!-- Content for the websites projects -->
            <div class="flex flex-wrap gap-2 md:pt-2 pb-5 w-full ">
                <div class="flex items-center px-4 gap-2.5">
                    <img src="@/assets/img/icons/folder-open-icon.png" alt="website" class="w-10 h-10"/>
                    <p class="text-xs font-tahoma font-medium">
                        Logma Production
                    </p>
                </div>
                <div class="flex items-center px-4 gap-2.5">
                    <img src="@/assets/img/icons/folder-open-icon.png" alt="website" class="w-10 h-10"/>
                    <p class="text-xs font-tahoma font-medium">
                        Pangaia
                    </p>
                </div>
                <div class="flex items-center px-4 gap-2.5">
                    <img src="@/assets/img/icons/folder-open-icon.png" alt="website" class="w-10 h-10"/>
                    <p class="text-xs font-tahoma font-medium">
                        Clench
                    </p>
                </div>
            </div>
            <div class="relative group mb-3">
                <h1 class="text-xs font-semibold px-3">Serveurs</h1>
                <div class="absolute left-[-12px] top-5 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>
            </div>

            <!-- Content for the servers projects -->
            <div class="flex flex-wrap gap-2 md:pt-2 pb-5 w-full ">
                <div class="flex items-center px-4 gap-2.5">
                    <img src="@/assets/img/icons/homeserver-icon.png" alt="website" class="w-10 h-10"/>
                    <p class="text-xs font-tahoma font-medium">
                        Homeserver
                    </p>
                </div>
            </div>
        </div>
    </div>  
</template>
