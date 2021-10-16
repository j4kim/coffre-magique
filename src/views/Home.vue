<template>
  <div class="home">
    <h1>Le coffre magique</h1>
    <ul>
      <li
        v-for="type in $store.state.types"
        :key="type.type"
      >
        {{ type.type }}
        <ul>
          <li
            v-for="item in type.items"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
