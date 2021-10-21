<template>
<div>
  <select v-model="type" @change="select">
    <option
      v-for="(_, type) in $store.getters.types"
      :key="type"
      :value="type"
    >
      {{ type }}
    </option>
    <option value="__other__">Autre</option>
  </select>
  <input
    v-if="type === '__other__'"
    type="text"
    v-model="other"
    @input="$emit('input', other)"
  >
</div>
</template>

<script>
export default {
  props: {
    value: String
  },

  data: () => ({
    type: '',
    other: ''
  }),

  created () {
    this.type = this.value
  },

  methods: {
    select () {
      if (this.type !== '__other__') {
        this.$emit('input', this.type)
      }
    }
  }
}
</script>