<template>
    <section class="absolute radius-window overflow-hidden" 
        :class="active ? 'bg-window-blue-deactivated' : 'bg-window-blue-active'"
        :style="windowStyle"
    >
        <div class="absolute top-0 left-0 linear-header-window h-7 w-full z-40 flex justify-between items-center px-1"
            @mousedown="startDrag">
            <div class="h-5/6 text-white font-semibold flex items-center gap-1 select-none flex-1 overflow-hidden pr-1">
                <img :src="iconSrc" alt="icon" class="w-4 h-4"/>
                <div class="flex items-center overflow-hidden">
                    <h4 class="text-header truncate">{{ title }}</h4>
                </div>
            </div>
            <div class="h-5/6 mt-px flex items-center gap-px">
                <WindowMinimize />
                <WindowMaximize @click="toggleMaximize" />
                <WindowClose @click="closeWindow" />
            </div>
        </div>
        <div class="absolute w-full h-full overflow-hidden p-0.75">
            <WindowHeaderDropdown :dropdownItems="['Fichier', 'Édition', 'Affichage', 'Outils']"/>
            <WindowHeaderTools />
            <WindowHeaderSearch :title="title" :iconSrc="iconSrc"/>

            <slot></slot>         
        </div>
        <!-- Resize handlers -->
        <div class="absolute bg-transparent top-0 right-0 w-2 h-full cursor-ew-resize" @mousedown="startResize" data-direction="right" :style="{ cursor: maximized ? 'default' : 'ew-resize' }"></div>
        <div class="absolute bg-transparent bottom-0 left-0 h-2 w-full cursor-ns-resize" @mousedown="startResize" data-direction="bottom" :style="{ cursor: maximized ? 'default' : 'ns-resize' }"></div>
        <div class="absolute bg-transparent bottom-0 right-0 w-2.5 h-2.5 cursor-nwse-resize" @mousedown="startResize" data-direction="corner" :style="{ cursor: maximized ? 'default' : 'nwse-resize' }"></div>
      </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import WindowMinimize from '../components/Buttons/WindowMinimize.vue';
import WindowMaximize from '../components/Buttons/WindowMaximize.vue';
import WindowClose from '../components/Buttons/WindowClose.vue';
import WindowHeaderTools from '../components/Window/WindowHeaderTools.vue';
import WindowHeaderSearch from '../components/Window/WindowHeaderSearch.vue';
import WindowHeaderDropdown from '../components/Window/WindowHeaderDropdown.vue';

const appHeight = window.innerHeight - 32;
const appWidth = window.innerWidth;

const { title, iconSrc, initPositionX, initPositionY } = defineProps(['title', 'iconSrc', 'initPositionX', 'initPositionY']);

const windowSize = { width: 660, height: 500 };
const windowPosition = ref({ x: initPositionX, y: initPositionY });
const isDragging = ref(false);
const initialMouseX = ref(0);
const initialMouseY = ref(0);

const throttleDelay = 16; // Update every 16ms (60 FPS)
let lastUpdateTimestamp = 0;

const maximized = ref(false);

const emit = defineEmits();

const windowWidth = ref(windowSize.width);
const windowHeight = ref(windowSize.height);
const windowTransform = ref(`translate(${windowPosition.value.x}px, ${windowPosition.value.y}px)`);

const windowStyle = computed(() => {
    const sizeStyle = maximized.value
      ? {
          width: `${window.innerWidth}px`,
          height: `${window.innerHeight - 32}px`,
          top: '0',
          left: '0',
      }
      : {
          width: `${windowWidth.value}px`,
          height: `${windowHeight.value}px`,
          transform: windowTransform.value,
      };
    return {
      ...sizeStyle,
    };
  });

const toggleMaximize = () => {
    maximized.value = !maximized.value;
}

const closeWindow = () => {
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

const dragWindow = (event) => {
    if (isDragging.value && !resizing.value) {
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

            // Update the transform property
            windowTransform.value = `translate(${windowPosition.value.x}px, ${windowPosition.value.y}px)`;

            initialMouseX.value = event.clientX;
            initialMouseY.value = event.clientY;
            lastUpdateTimestamp = currentTime;
        }
    }
};


const resizing = ref(false);
const initialWindowSize = ref({ width: 0, height: 0 });
const resizeDirection = ref('');

const startResize = (event) => {
    resizing.value = true;
    initialMouseX.value = event.clientX;
    initialMouseY.value = event.clientY;
    resizeDirection.value = event.target.dataset.direction;

    // Set the initial window size based on the current size
    initialWindowSize.value = { width: windowWidth.value, height: windowHeight.value };

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('mousemove', resizeWindow);

    // Disable user selection
    document.body.style.userSelect = 'none';
};

const stopResize = () => {
    resizing.value = false;

    document.removeEventListener('mouseup', stopResize);
    document.removeEventListener('mousemove', resizeWindow);

    // Enable user selection
    document.body.style.userSelect = '';
};

const resizeWindow = (event) => {
    if (resizing.value) {
        const deltaX = event.clientX - initialMouseX.value;
        const deltaY = event.clientY - initialMouseY.value;

        if (resizeDirection.value === 'right') {
            let newWidth = initialWindowSize.value.width + deltaX;
            newWidth = Math.min(newWidth, appWidth);
            windowWidth.value = newWidth < 200 ? 200 : newWidth;
        } else if (resizeDirection.value === 'bottom') {
            let newHeight = initialWindowSize.value.height + deltaY;
            newHeight = Math.min(newHeight, appHeight);
            windowHeight.value = newHeight < 110 ? 110 : newHeight;
        } else if (resizeDirection.value === 'corner') {
            let newWidth = initialWindowSize.value.width + deltaX;
            let newHeight = initialWindowSize.value.height + deltaY;
            newWidth = Math.min(newWidth, appWidth);
            newHeight = Math.min(newHeight, appHeight);
            windowWidth.value = newWidth < 200 ? 200 : newWidth;
            windowHeight.value = newHeight < 110 ? 110 : newHeight;
        }

        // Update the transform property
        windowTransform.value = `translate(${windowPosition.value.x}px, ${windowPosition.value.y}px)`;
    }
};

</script>

<style scoped>
.radius-window {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.header-window {
  background: linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);
}

.header-window-disabled {
  background: linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%);
}

.linear-header-window {
    background: linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);
}

.text-header {
    font-size: 0.85rem;
    text-shadow: 1px 1px 0px #09177F;
}
</style>