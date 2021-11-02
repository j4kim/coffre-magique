<template>
  <svg
    :style="{
      width: `${size}px`,
      height: `${size}px`
    }"
    viewBox="0 0 24 24"
    @click="$emit('click')"
  >
    <path :d="path" />
  </svg>
</template>

<script>
const filled = "M3 2L5 20.23C5.13 21.23 5.97 22 7 22H17C18 22 18.87 21.23 19 20.23L21 2H3M5.22 4H18.78L17 20H7L5.22 4Z"
const empty = "M18.32,8H5.67L5.23,4H18.77M3,2L5,20.23C5.13,21.23 5.97,22 7,22H17C18,22 18.87,21.23 19,20.23L21,2H3Z"

export default {
  props: {
    volume: {
      type: [Number, String],
      default: 10
    }
  },

  data: () => ({
    drinking: false
  }),

  computed: {
    size () {
      return 8 * Math.sqrt(this.volume)
    },
    path () {
      return this.drinking ? empty : filled
    }
  },

  methods: {
    drink () {
      this.drinking = true
      setTimeout(() => this.drinking = false, 300)
    }
  }
}
</script>
