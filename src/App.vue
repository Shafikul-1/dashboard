<script setup>
import { RouterView } from 'vue-router'
import NavBarView from './views/NavBarView.vue';
</script>
<template>
  <NavBarView/>
  <div>
    <router-view></router-view>
  </div>
</template>

