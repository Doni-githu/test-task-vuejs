<template>
  <nav>
    <router-link class="text-decoration-none" to="/">Home</router-link> | 
    <router-link class="text-decoration-none" to="/add">Add</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  opacity: 0.7;
}

nav a.router-link-exact-active {
  opacity: 1;
}
</style>
