<template>
  <div id="app">
    <router-view v-if="$store.state.ready"/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Nunito:wght@300;600&display=swap');
html, body {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 400px;
  margin: auto;
  padding: 48px 12px;
  font-family: 'Nunito';
  button.btn {
    font-family: 'Nunito';
    background-color: #ffcd69;
    border: none;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;
    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: #a866cb;
    }
    &.purple {
      background-color: #a866cb;
      color: white;
      &:hover {
        background-color: #884da7;
      }
    }
    &.grey {
      background-color: lightgrey;
      &:hover {
        background-color: grey;
      }
    }
    &.big {
      padding: 8px 20px 10px;
      font-size: 16px;
      border-radius: 8px;
      font-weight: 600;
    }
    &.bold {
      font-weight: 600;
    }
  }
}
</style>