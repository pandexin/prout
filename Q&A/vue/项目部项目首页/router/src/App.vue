<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppBanner></AppBanner>
    <AppContainer></AppContainer>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue"
import AppBanner from "./components/AppBanner.vue"
import AppContainer from "./components/AppContainer.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  components:{AppHeader,AppBanner,AppContainer,AppFooter}
}
</script>

<style>

</style>
