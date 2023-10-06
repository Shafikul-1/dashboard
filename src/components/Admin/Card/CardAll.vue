<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
defineProps(['price', 'priceDetails', 'image'])
</script>

<template>
  <div class="card my-3">
    <div class="d-flex">
      <div class="">
        <img :src="image" class="img-fluid rounded-start CardImg" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ price }}</h5>
        <p class="card-text">{{ priceDetails }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.CardImg{
    width: 43px;
    height: 43px;
    margin: 20px;
    padding: 7px;
    border-radius: 50%;
    border: 1px dotted gray;
    box-shadow: 0 0 3px 0 gray;
    background: transparent;
}
</style>
