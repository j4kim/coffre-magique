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
    <div>
      <bottle
        v-for="(bottle, index) in $store.state.editable.bottles"
        :key="index"
        :bottle="bottle"
      />
    </div>
  </div>
</template>

<script>
import Bottle from "./Bottle"

export default {
  components: { Bottle }
}
</script>