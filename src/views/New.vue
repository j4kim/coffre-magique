<template>
  <item-form
    title="Ajouter"
    @submit="$store.dispatch('addNewItem')"
  />
</template>

<script>
import ItemForm from "@/components/ItemForm"

export default {
  components: { ItemForm },

  created () {
    this.$store.commit('setEditable')
  }
}
</script>
