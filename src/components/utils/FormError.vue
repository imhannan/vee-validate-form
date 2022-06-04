<script setup lang="ts">
defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="flex flex-col space-y-2 px-4">
    <li v-for="error in errors" :key="error" class="text-red-500">
      {{ error }}
    </li>
  </ul>
</template>

<style scoped></style>
