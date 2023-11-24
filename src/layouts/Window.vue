<template>
    <section class="absolute radius-window overflow-hidden window-size bg-window-blue z-10" :style="windowStyle">
        <div class="absolute top-0 left-0 linear-header-window h-7 w-full z-40 flex justify-between items-center px-1"
            @mousedown="startDrag" @dblclick="toggleMaximize">
            <div class="h-5/6 text-white font-semibold flex items-center gap-1 select-none">
                <img src="src/assets/img/icons/projects-icon.png" alt="projects-icon" class="w-4 h-4"/>
                <h4 class="text-header">Mes projets</h4>
            </div>
            <div class="h-5/6 mt-px flex items-center gap-px">
                <WindowMinimize />
                <WindowMaximize @click="toggleMaximize" />
                <WindowClose @click="closeWindow" />
            </div>
        </div>
        <div class="absolute w-full h-full overflow-hidden p-0.5">
            <div class="relative top-0 w-full h-6 mt-6 linear-background-functions flex justify-between">
                <div class="w-full h-full px-0.5 pt-1 flex items-center border-window-header-right border-window-header-bot">
                    <WindowDropdown>
                        <template #text>
                            Fichier
                        </template>
                    </WindowDropdown>
                    <WindowDropdown>
                        <template #text>
                            Édition
                        </template>
                    </WindowDropdown>
                    <WindowDropdown>
                        <template #text>
                            Affichage
                        </template>
                    </WindowDropdown>
                    <WindowDropdown>
                        <template #text>
                            Outils
                        </template>
                    </WindowDropdown>
                </div>
                <div class="flex items-center h-6 w-10">
                    <img src="src/assets/img/icons/windows-header-window-icon.png" alt="icone mes projets" class="h-full pt-0.5 border-window-header-bot"/>
                </div>
            </div>
            <div class="relative top-0 w-full h-9 linear-background-functions border-top-grey">
                <div class="flex items-center h-full">
                    <div class="flex items-center px-1">
                        <div class="flex items-center">
                            <img src="/src/assets/img/icons/right-arrow-green-icon.png" alt="précédent" class="w-7 h-7"/>
                            <p class="small-p mr-2 cursor-default">Retour</p>
                            <div class="block border-solid down-arrow"></div>
                        </div>
                        <div class="flex items-center">
                            <img src="/src/assets/img/icons/left-arrow-green-icon.png" alt="suivant" class="w-7 h-7"/>
                            <div class="block border-solid down-arrow ml-px"></div>
                        </div>
                    </div>
                    <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-1">
                        <img src="/src/assets/img/icons/folder-open-icon.png" alt="projects-icon" class="w-6 h-6"/>
                    </div>
                    <div class="h-5/6 w-px bg-black bg-opacity-20 mx-0.5"></div>
                    <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 ml-1 mr-1">
                        <img src="/src/assets/img/icons/magnifier-icon.png" alt="projects-icon" class="w-auto h-5"/>
                        <p class="small-p px-1 cursor-default">Rechercher</p>
                    </div>
                    <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8">
                        <img src="/src/assets/img/icons/folder-opening-icon.png" alt="projects-icon" class="w-auto h-6"/>
                        <p class="small-p px-1 cursor-default">Fichiers</p>
                    </div>
                    <div class="h-5/6 w-px bg-black bg-opacity-20 mx-0.5"></div>
                    <div class="rounded-sm border hover:border-gray-300 box-shadow-header-window flex items-center h-8 px-1">
                        <img src="/src/assets/img/icons/project-folder-icon.png" alt="projects-icon" class="w-6 h-6"/>
                        <div class="block border-solid down-arrow ml-2"></div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div class="flex items-center top-0 w-full h-5 px-0.5 linear-background-functions border-top-grey shadow-header-window">
                <div>
                    <p class="small-p text-gray-500 px-1.5 cursor-default">
                        Adresse
                    </p>
                </div>
                <div class="w-full h-full bg-white border border-blue-400 pl-1 flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="src/assets/img/icons/projects-icon.png" alt="projects-icon" class="w-3.5 h-3.5"/>
                        <p class="px-1 small-p cursor-default">Mes projets</p>
                    </div>
                    <div class="m-px hover:brightness-110">
                        <img src="src/assets/img/icons/down-icon.png" alt="voir" class="w-3.5 h-3.5"/>
                    </div>
                </div>
                <div class="flex items-center px-2 gap-1 w-20">
                    <img src="src/assets/img/icons/right-green-arrow-icon.png" alt="Aller" class="w-3.5 h-3.5"/>
                    <p class="small-p cursor-default">Aller</p>
                </div>
            </div>
        </div>
      </section>
</template>

<script setup>
import WindowMinimize from '../components/Buttons/WindowMinimize.vue';
import WindowMaximize from '../components/Buttons/WindowMaximize.vue';
import WindowClose from '../components/Buttons/WindowClose.vue';
import WindowDropdown from '../components/Buttons/WindowDropdown.vue';
import { ref, computed } from 'vue';


const windowPosition = ref({ x: 180, y: 100 });
const isDragging = ref(false);
const initialMouseX = ref(0);
const initialMouseY = ref(0);

const throttleDelay = 16; // Update roughly every 16ms (60 FPS)
let lastUpdateTimestamp = 0;

const maximized = ref(false);

const emit = defineEmits();

const windowStyle = computed(() => {
    const sizeStyle = maximized.value
        ? {
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
        }
        : {
            width: `${windowSize.width}px`,
            height: `${windowSize.height}px`,
            transform: `translate(${windowPosition.value.x}px, ${windowPosition.value.y}px)`,
        }
    return {
        ...sizeStyle,
    };
});

const toggleMaximize = () => {
    maximized.value = !maximized.value;
}

const closeWindow = () => {
    // Emit the custom event to the parent component along with the identifier
    emit('close-window');
};


const startDrag = (event) => {
    isDragging.value = true;
    initialMouseX.value = event.clientX;
    initialMouseY.value = event.clientY;

    // Add mouseup event listener to the whole document to stop dragging
    document.addEventListener('mouseup', stopDrag);
    // Add mousemove event listener to the whole document for smoother dragging
    document.addEventListener('mousemove', dragWindow);
};

const stopDrag = () => {
    isDragging.value = false;

    // Remove mouseup and mousemove event listeners when dragging stops
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('mousemove', dragWindow);
};


const windowSize = { width: 660, height: 500 };

const dragWindow = (event) => {
    if (isDragging.value) {
        const currentTime = performance.now();
        if (currentTime - lastUpdateTimestamp > throttleDelay) {
            const deltaX = event.clientX - initialMouseX.value;
            const deltaY = event.clientY - initialMouseY.value;

            // Calculate the new window position
            const newX = windowPosition.value.x + deltaX;
            const newY = windowPosition.value.y + deltaY;

            // Define the boundaries
            const minX = 0; // Minimum X position
            const minY = 0; // Minimum Y position
            const maxX = window.innerWidth - windowSize.width / 10; // Maximum X position
            const maxY = window.innerHeight - windowSize.height / 10; // Maximum Y position

            // Ensure the window stays within the boundaries
            windowPosition.value.x = Math.min(Math.max(newX, minX), maxX);
            windowPosition.value.y = Math.min(Math.max(newY, minY), maxY);

            initialMouseX.value = event.clientX;
            initialMouseY.value = event.clientY;
            lastUpdateTimestamp = currentTime;
        }
    }
};
</script>

<style scoped>
.radius-window {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.bg-window-blue {
    background-color: #0831D9;
}

.window-size {
    width: 660px;
    height: 500px;
}

.linear-header-window {
    background: linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);
}

.linear-background-functions {
    background: linear-gradient(to right, rgb(237, 237, 229) 0%, rgb(237, 232, 205) 100%);
}

.text-header {
    font-size: 0.85rem;
    text-shadow: 1px 1px 0px #09177F;
}

.down-arrow {
    content: "";
    border-width: 3px 3px 0px;
    border-color: rgb(0, 0, 0) transparent;
}
</style>