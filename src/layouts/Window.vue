<template>
    <section class="absolute radius-window overflow-hidden window-size inset-36 bg-window-blue z-30 ">
        <div class="absolute top-0 left-0 linear-header-window h-7 w-full z-40 flex justify-between items-center px-1">
            <div class="h-5/6 text-white font-semibold flex items-center gap-1">
                <img src="src/assets/img/icons/projects-icon.png" alt="projects-icon" class="w-4 h-4 "/>
                <h4 class="text-header">Mes projets</h4>
            </div>
            <div class="h-5/6 mt-px flex items-center gap-px">
                <WindowMinimize/>
                <WindowMaximize/>
            </div>
        </div>
        <div class="absolute w-full h-full overflow-hidden p-0.5">
            <div class="relative top-0 w-full h-6 mt-6 linear-background-functions">
    
            </div>
            <div class="relative top-0 w-full h-9 linear-background-functions">
    
            </div>

        </div>

    </section>
</template>

<script setup>
import WindowMinimize from '../components/Buttons/WindowMinimize.vue';
import WindowMaximize from '../components/Buttons/WindowMaximize.vue';
</script>

<style scoped>
    .radius-window{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .bg-window-blue{
    background-color: #0831D9;
    }

    .window-size{
        width: 660px;
        height: 500px;
    }

    /* .bg-window-blue:hover{ */
    /* background-color: #6582F5; */
    /* } */

    .linear-header-window{
       background: linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);
    }

    .linear-background-functions{
        background: linear-gradient(to right, rgb(237, 237, 229) 0%, rgb(237, 232, 205) 100%);
    }

    .text-header{
        font-size: 0.85rem;
        text-shadow: 1px 1px 0px #09177F;
    }
</style>