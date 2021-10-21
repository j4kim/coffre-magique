<template>
  <item-form
    title="Modifier"
    @submit="$store.commit('editItem')"
  />
</template>

<script>
import ItemForm from "@/components/ItemForm"

export default {
  components: { ItemForm },

  created () {
    let item = this.$store.getters.byId(this.$route.params.id)
    if (!item) { this.$router.push('/') }
    this.$store.commit('setEditable', item)
  }
}
</script>
