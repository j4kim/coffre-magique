<template>
  <div class="home">
    <header>
      <img src="/img/icons/apple-touch-icon-120x120.png">
      <h1>Le Coffre Magique</h1>
    </header>
    <main :style="{
      pointerEvents: $store.state.isAdmin ? 'auto' : 'none'
    }">
      <div
        v-for="(items, type) in $store.getters.types"
        :key="type"
      >
        <h3>
          {{ type }}
        </h3>
        <router-link
          v-for="item in items"
          :key="item.id"
          :to="`/edit/${item.id}`"
          class="item-link"
          :style="{
            textDecoration: isEmpty(item) ? 'line-through' : ''
          }"
        >
          <div class="item">
            <div class="item-name">
              {{ item.name }}
            </div>
            <div class="item-degree">
              {{ item.degree }}%
            </div>
          </div>
        </router-link>
      </div>
    </main>
    <router-link v-if="$store.state.isAdmin" tag="button" to="/new" class="btn">
      +
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    isEmpty(item) {
      return item.bottles.every(bottle => bottle.remains === 0)
    }
  }
}
</script>

<style lang="scss">
.home {
  .save {
    margin-top: -48px;
    margin-bottom: 48px;
    button.btn {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
  }
  header {
    text-align: center;
    margin-bottom: 48px;
    font-family: "Cinzel";
    text-decoration: underline;
    text-decoration-color: #ffcd69;
  }
  main {
    margin-bottom: 24px;
    h3 {
      margin: 24px 0 12px;
    }
    .item-link {
      text-decoration: none;
      display: block;
      padding: 8px;
      margin: 0 -8px;
      color: initial;
      &:hover {
        background-color: #0001;
      }
      .item {
        display: flex;
        .item-name {
          flex: 1;
        }
      }
    }
  }
}
</style>