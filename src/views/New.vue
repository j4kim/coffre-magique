<template>
  <item-form
    title="Nouvelle gnôle"
    @submit="$store.dispatch('create')"
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
