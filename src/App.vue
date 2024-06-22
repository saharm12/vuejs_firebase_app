<template>
  <div id="app">
     <NavbarView/>
    <router-view/>
  </div>
</template>


<script>
import NavbarView from  '/home/dell/Bureau/vuejs_apps/firebase-vuejsapp/src/views/Navbar.vue'
export default {
  name: 'AppView',
  components: {
    NavbarView
  }
}
</script>
<style>

</style>
