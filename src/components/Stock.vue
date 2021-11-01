<template>
  <div class="stock">
    <div>
      <button
        @click="$store.commit('drink')"
      >Boire</button>
      <input
        type="number"
        placeholder="Dose"
        min="2"
        max="20"
        step="2"
        v-model="$store.state.editable.dose"
      > cl
    </div>
    <bottle
      v-for="(bottle, index) in $store.state.editable.bottles"
      :key="index"
      :bottle="bottle"
      :index="index"
    />
    <button
      @click="$store.commit('addBottle')"
    >Ajouter une bouteille</button>
  </div>
</template>

<script>
import Bottle from "./Bottle"

export default {
  components: { Bottle }
}
</script>

<style lang="scss">
.stock {
  display: flex;
  overflow-x: auto;
  padding-bottom: 12px;
  margin: 0 -8px;
  > * {
    margin: 8px;
    flex-shrink: 0;
    &.bottle {
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px;
      svg {
        margin: 4px;
      }
    }
  }
}
</style>