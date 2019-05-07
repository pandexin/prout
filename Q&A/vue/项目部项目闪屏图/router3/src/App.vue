<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <AppBanner></AppBanner>
  </div>
</template>
<script>
import AppBanner from "./components/AppBanner.vue"
export default {
  components:{AppBanner},
}
</script>

<style>

</style>
