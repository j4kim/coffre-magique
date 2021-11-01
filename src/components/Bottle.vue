<template>
  <div>
    <strong v-if="selected">Bouteille</strong>
    <span v-else @click="$store.commit('selectBottle', index)">Bouteille</span>
    <vue-bottle size="100" v-model="ratio"/>
    <small>
      {{ Math.round(bottle.remains) }} / {{ bottle.volume }} cl
    </small>
  </div>
</template>

<script>
import VueBottle from 'vue-bottle'

export default {
  components: { VueBottle },

  props: ['bottle', 'index'],

  computed: {
    selected () {
      let index = this.$store.state.editable.selectedBottleIndex || 0
      return index == this.index
    },
    ratio: {
      get () {
        return this.bottle.remains / this.bottle.volume
      },
      set (ratio) {
        this.bottle.remains = this.bottle.volume * ratio
      }
    }
  }
}
</script>