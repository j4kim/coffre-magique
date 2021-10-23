<template>
  <form class="item-form" @submit.prevent="submit">
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
    <p>
      <button type="submit" v-text="title"/>
    </p>
  </form>
</template>

<script>
import TypeInput from './TypeInput'

export default {
  components: { TypeInput },

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
