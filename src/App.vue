<script setup lang="ts">
import Home from "./components/Home.vue";
</script>

<template>
  <header class="bg-blue-700 p-4 text-white flex justify-between items-center">
    <div class="text-2xl font-bold">Vee Validate</div>
    <div class="flex space-x-2 md:space-x-4">
      <button class="btn">Login</button>
      <button class="btn">Register</button>
    </div>
  </header>

  <main class="py-10">
    <home></home>
  </main>
</template>

<style>
@import "@/app.css";

.btn {
  @apply bg-blue-700 text-white p-4 rounded-md border duration-300 hover:bg-blue-800;
}

.form-group {
  @apply flex flex-col space-y-2;
}

.form-control {
  @apply border-2 border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-700 rounded-md py-2 px-4;
}
</style>
