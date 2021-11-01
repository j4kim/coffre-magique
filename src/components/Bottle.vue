<template>
  <div
    class="bottle"
    :style="{
      border: `1px solid ${this.selected ? '#a866cb' : '#eee'}`,
      borderRadius: '4px'
    }"
    @click="$store.commit('selectBottle', index)"
  >
    <vue-bottle
      v-model="ratio"
      :size="10 * Math.sqrt(this.bottle.volume)"
      :speed="0.02"
    />
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