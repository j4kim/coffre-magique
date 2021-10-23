<template>
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
    <div>
      <bottle
        v-for="(bottle, index) in $store.state.editable.bottles"
        :key="index"
        :bottle="bottle"
        :index="index"
      />
    </div>
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