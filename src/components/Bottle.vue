<template>
  <div>
    <strong v-if="selected">Bouteille</strong>
    <span v-else @click="$store.commit('selectBottle', index)">Bouteille</span>
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
  props: ['bottle', 'index'],

  computed: {
    selected () {
      let index = this.$store.state.editable.selectedBottleIndex || 0
      return index == this.index
    }
  }
}
</script>