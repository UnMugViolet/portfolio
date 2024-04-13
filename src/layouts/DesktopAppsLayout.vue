<template>
  <section class="absolute top-0 left-0">
    <div class="grid grid-cols-2 gap-5 pt-6 pl-6">
      <button
        v-for="(entity) in localEntities"
        :key="entity.id"
        class="flex flex-col gap-2 items-center w-full cursor-pointer"
        @click="toggleEffect(entity)"
        @dblclick="removeFilterAndToggle(entity)"
        :class="{ 'active': entity.isActive }"
      >
        <img
          class="w-11 h-11"
          :style="{
            ...entity.imageStyle,
            opacity: entity.isActive ? 0.5 : 1
          }"
          :src="entity.imgSrc"
          :alt="entity.title"
        />
        <p
          class="text-white text-xs font-normal py-px px-1"
          :style="{
            ...entity.textStyle,
            backgroundColor: entity.isActive ? 'rgb(11, 97, 255)' : 'transparent',
            textShadow: entity.isActive
              ? 'none'
              : '0px 1px 1px rgba(1, 1, 1, 1), 0px 0px 4px #000'
          }"
        >
          {{ entity.title }}
        </p>
      </button>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue';
  const emit = defineEmits();

  const props = defineProps({
    entities: {
      type: Array,
      required: true
    }
  });

  const localEntities = ref([]);

  watchEffect(() => {
    localEntities.value = [...props.entities];
  });

  const toggleEffect = (selectedEntity) => {
    localEntities.value.forEach((entity) => {
      entity.isActive = entity.id === selectedEntity.id;
    });
  };

  const removeFilterAndToggle = (entity) => {
    localEntities.value.forEach((e) => {
      e.isActive = false;
    });
    emit('toggle-' + entity.id); // Emit on double click.
  };

  onMounted(() => {
    const clickOutsideHandler = (event) => {
      if (!event.target.closest('.active')) {
        localEntities.value.forEach((entity) => {
          entity.isActive = false;
        });
      }
    };

    document.body.addEventListener('click', clickOutsideHandler);
    onBeforeUnmount(() => {
      document.body.removeEventListener('click', clickOutsideHandler);
    });
  });
</script>

<style scoped>
  .active {
    filter: drop-shadow(blue 0px 0px);
  }
</style>
