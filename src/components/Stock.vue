<template>
  <div class="stock">
    <div>
      <div class="dose" @click="adaptDose">
        <glass :volume="$store.state.editable.dose" />
        <small>{{ $store.state.editable.dose }} cl</small>
      </div>
      <button
        @click="$store.commit('drink')"
        class="btn purple"
      >Boire</button>
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
import Glass from "./Glass"

export default {
  components: {
    Bottle,
    Glass,
  },

  methods: {
    adaptDose () {
      let dose = prompt("Quelle dose en cl ?", this.$store.state.editable.dose)
      if (dose > 0) {
        this.$store.state.editable.dose = dose
      }
    }
  }
}
</script>

<style lang="scss">
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.stock {
  display: flex;
  overflow-x: auto;
  padding-bottom: 12px;
  margin: 0 -8px;
  > * {
    @extend .flex-center;
    margin: 12px;
    padding: 4px;
    .dose {
      margin-bottom: 8px;
      @extend .flex-center;
    }
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