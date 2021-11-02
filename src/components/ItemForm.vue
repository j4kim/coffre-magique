<template>
  <div class="item-form">
    <router-link to="/">Retour</router-link>
    <h1>{{ title }}</h1>
    <div class="field">
      <label>Nom</label>
      <input
        type="text"
        v-model="$store.state.editable.name"
      >
    </div>
    <div class="field">
      <label>Degré</label>
      <input
        type="number"
        min="0"
        max="100"
        v-model="$store.state.editable.degree"
      > %
    </div>
    <div class="field">
      <label>Type</label>
      <type-input v-model="$store.state.editable.type"/>
    </div>
    <hr>
    <h3>Stock</h3>
    <stock/>
    <hr>
    <p>
      <button type="submit" v-text="title" @click="submit"/>
    </p>
  </div>
</template>

<script>
import TypeInput from './TypeInput'
import Stock from './Stock'

export default {
  components: { TypeInput, Stock },

  props: {
    title: String,
    attribute: String
  },

  methods: {
    submit() {
      this.$emit('submit')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.field {
  margin-bottom: 12px;
  label {
    font-size: 0.8em;
    display: block;
  }
}
</style>