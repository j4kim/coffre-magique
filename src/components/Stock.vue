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
    <div class="add">
      <button
        class="btn"
        @click="$store.commit('addBottle')"
      >
        Ajouter une bouteille
      </button>
    </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
    &.bottle {
      min-width: 80px;
      svg {
        margin: 4px;
      }
    }
    &.add {
      width: 110px;
    }
  }
}
</style>