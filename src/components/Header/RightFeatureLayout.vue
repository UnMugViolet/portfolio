<template>
    <button class="flex w-full h-10 items-center gap-1.5 px-0.5 component-style">
        <div class="w-9 h-9">
            <slot name="img" />
        </div>
        <div class="text-left">
            <h3 class="header-font text-xs">
                <slot name="title" />
            </h3>
            <p class="subtitle">
                <slot name="subtitle" />
            </p>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'RightFeatureLayout'
    };
</script>

<style scoped>
    .component-style:hover {
        background: #2F71CD;
        color: white;
    }
    
    .component-style:hover .subtitle {
        color: white;
    }

    .subtitle {
        font-size: 11px;
        font-weight: 400;
        color: #868686;
    }
</style>
