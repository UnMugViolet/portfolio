<script setup>

</script>

<template>
    <section class="h-screen w-screen">
        <div class="flex items-center justify-center h-full w-full">
            <div class="app-container">
                <div class="flex flex-col items-center justify-center w-full h-full">
                    <slot name="top"></slot> 
                    <slot name="center"></slot> 

                    <slot name="bottom-center"></slot> 
                </div>
                <slot name="bottom"></slot> 
            </div>
        </div>
    </section>
</template>