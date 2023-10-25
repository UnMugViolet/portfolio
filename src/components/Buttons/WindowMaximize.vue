<template>
    <button class="maximize-button relative button-window-global-layout border border-white h-full w-6 hover:brightness-125">

    </button>
</template>

<style scoped>
    .maximize-button{
        box-shadow: rgb(70, 70, 255) 0px -1px 2px 1px inset;
        background-image: radial-gradient(circle at 90% 90%, rgb(0, 84, 233) 0%, rgb(34, 99, 213) 55%, rgb(68, 121, 228) 70%, rgb(163, 187, 236) 90%, white 100%);
    }

    .maximize-button::before{
        content: "";
        position: absolute;
        display: block;
        left: 4px;
        top: 4px;
        box-shadow: white 0px 3px inset, white 0px 0px 0px 1px inset;
        height: 12px;
        width: 12px;
    }

</style>