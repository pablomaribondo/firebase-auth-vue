<template>
  <div id="app">
    <TopHeader />
    <div id="nav">
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/secret">Secret</router-link>|
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';

export default {
  components: {
    TopHeader
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
