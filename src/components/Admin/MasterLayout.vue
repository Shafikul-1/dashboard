<script setup>
import SideBar from './AdminMenu/SideBar.vue'

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <SideBar />
      </div>
      <div class="col-md-9">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

