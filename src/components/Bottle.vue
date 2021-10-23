<template>
  <div>
    Bouteille
    <input
      type="number"
      min="0"
      :max="$store.state.editable.bottles[index].volume"
      v-model="$store.state.editable.bottles[index].remains"
    > cl 
    /
    <input
      type="number"
      :min="$store.state.editable.bottles[index].remains"
      max="200"
      v-model="$store.state.editable.bottles[index].volume"
    > cl 
  </div>
</template>

<script>
export default {
  props: ['index'],
}
</script>