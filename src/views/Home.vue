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
    <ul style="clear:both">
      <li
        v-for="(items, type) in $store.getters.types"
        :key="type"
      >
        {{ type }}
        <ul>
          <li
            v-for="item in items"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
    <router-link tag="button" to="/new">
      +
    </router-link>
  </div>
</template>
