<template>
    <button class="flex w-full h-10 items-center gap-1.5 px-0.5 component-style" @click="toggleButton">
        <div class="w-7 h-7">
            <slot name="img" />
        </div>

        <h3 class="header-font text-xs">
            <slot name="text" />
        </h3>
    </button>
</template>

<script>
    export default {
    methods: {
        toggleButton() {
        this.$emit('toggle-button', this.buttonName); // Pass the buttonName to the parent component
        }
    },
    props: {
        buttonName: String // Add a prop to receive the button name
    }
    };
</script>

<style scoped>
    .component-style{
        color: #00136b;
    }
    .component-style:hover{
        background: #2F71CD;
        color: white;

    }

</style>