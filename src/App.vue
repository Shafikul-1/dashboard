<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>
<template>
  <Navbar/>
  <div>
    <router-view></router-view>
  </div>
</template>

<style  scoped>

</style>