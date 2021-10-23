<template>
  <div>
    <button>Boire</button>
    <input
      type="number"
      placeholder="Dose"
      min="2"
      max="20"
      step="2"
      v-model="$store.state.editable.dose"
    > cl
  </div>
</template>