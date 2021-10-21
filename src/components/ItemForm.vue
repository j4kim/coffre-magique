<template>
  <form class="item-form" @submit.prevent="submit">
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
        type="text"
        placeholder="Type"
        v-model="$store.state.editable.type"
      >
    </p>
    <p>
      <button type="submit" v-text="title"/>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    title: String,
    action: String,
    attribute: String
  },

  methods: {
    submit() {
      this.$store.dispatch(this.action)
      this.$router.push('/')
    }
  }
}
</script>
