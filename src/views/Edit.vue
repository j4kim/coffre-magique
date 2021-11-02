<template>
  <div>
    <item-form
      title="Modifier"
      @submit="$store.dispatch('update')"
    >
      <button @click="deleteItem" class="btn grey bold">
        Supprimer
      </button>
    </item-form>
  </div>
</template>

<script>
import ItemForm from "@/components/ItemForm"

export default {
  components: { ItemForm },

  created () {
    let item = this.$store.getters.byId(this.$route.params.id)
    if (!item) { this.$router.push('/') }
    this.$store.commit('setEditable', item)
  },

  methods: {
    deleteItem () {
      if (confirm('Supprimer ?')) {
        this.$store.dispatch('delete')
        this.$router.push('/')
      }
    }
  }
}
</script>
