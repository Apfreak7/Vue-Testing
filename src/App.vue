<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TodoApp />
  <MyNav />
  <MyParent />
</template>

<script>
import MyNav from "./components/MyNav.vue";
import MyParent from "./components/MyParent.vue";
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "App",
  components: {
    TodoApp,
    MyNav,
    MyParent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
