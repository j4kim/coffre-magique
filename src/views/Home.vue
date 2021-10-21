<template>
  <div class="home">
    <h1 style="float:left">Le coffre magique</h1>
    <div style="float:right">
      <button
        @click="$store.dispatch('save')"
        :disabled="!$store.getters.hasChanged"
      >
        💾
      </button>
    </div>
    <main style="clear:both">
      <div
        v-for="(items, type) in $store.getters.types"
        :key="type"
      >
        {{ type }}
        <ul>
          <li
            v-for="item in items"
            :key="item.id"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </main>
    <router-link tag="button" to="/new">
      +
    </router-link>
  </div>
</template>
