<template>
  <form class="new">
    <h1>Ajouter une gnôle</h1>
    <p>
      <input
        type="text"
        placeholder="Nom"
        v-model="$store.state.newItem.name"
      >
    </p>
    <p>
      <input
        type="text"
        placeholder="Type"
        v-model="$store.state.newItem.type"
      >
    </p>
    <p>
      <button type="submit" @click="add">Ajouter</button>
    </p>
  </form>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.dispatch('addNewItem')
      this.$router.push('/')
    }
  }
}
</script>
