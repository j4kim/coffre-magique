<template>
  <div class="home">
    <h1>Le coffre magique</h1>
    <ul>
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
  </div>
</template>
