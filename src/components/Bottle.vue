<template>
  <div>
    Bouteille
    <input
      type="number"
      min="0"
      :max="bottle.volume"
      v-model="bottle.remains"
    > cl 
    /
    <input
      type="number"
      :min="bottle.remains"
      max="200"
      v-model="bottle.volume"
    > cl 
  </div>
</template>

<script>
export default {
  props: ['bottle'],
}
</script>