<template>
  <div class="item-form">
    <router-link to="/">Retour</router-link>
    <h1>{{ title }}</h1>
    <p>
      <input
        type="text"
        placeholder="Nom"
        v-model="$store.state.editable.name"
      >
    </p>
    <p>
      <input
        type="number"
        placeholder="Degré"
        min="0"
        max="100"
        v-model="$store.state.editable.degree"
      > %
    </p>
    <p>
      Type:
      <type-input v-model="$store.state.editable.type"/>
    </p>
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
