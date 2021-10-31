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
  button {
    @apply 
      px-4 py-1 font-medium text-lg
      flex items-center justify-center
      rounded-md bg-black text-white;
  }
}
</style>