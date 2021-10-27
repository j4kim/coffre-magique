<template>
  <div id="app" class="container mx-auto p-4">
    <router-view/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-3xl font-bold;
  }
}
</style>