<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppContainer></AppContainer>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue"
import AppContainer from "./components/AppContainer.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  components:{AppHeader,AppContainer,AppFooter}
}
</script>

<style>

</style>
