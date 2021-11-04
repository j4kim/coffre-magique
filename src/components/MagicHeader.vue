<template>
  <header @click="click">
    <img src="/img/icons/apple-touch-icon-120x120.png">
    <h1>Le Coffre Magique</h1>
  </header>
</template>

<script>
export default {
  data: () => ({
    clicked: 0
  }),

  methods: {
    click() {
      this.clicked++
      if (this.clicked === 5) {
        this.$store.dispatch('check').finally(() => this.clicked = 0)
      } 
    }
  }
}
</script>
