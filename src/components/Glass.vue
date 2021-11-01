<template>
  <svg
    :style="{
      width: `${size}px`,
      height: `${size}px`
    }"
    viewBox="0 0 24 24"
    @click="$emit('click')"
  >
    <path fill="currentColor" d="M3 2L5 20.23C5.13 21.23 5.97 22 7 22H17C18 22 18.87 21.23 19 20.23L21 2H3M5.22 4H18.78L17 20H7L5.22 4Z" />
  </svg>
</template>

<script>
export default {
  props: {
    volume: {
      type: [Number, String],
      default: 10
    }
  },

  computed: {
    size () {
      return 8 * Math.sqrt(this.volume)
    }
  }
}
</script>
