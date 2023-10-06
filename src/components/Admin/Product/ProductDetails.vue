<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
let postDetails = ref({})
const route = useRoute()
onMounted(async () => {
  const url = `https://fakestoreapi.com/products/${route.params.id}`
  const res = await axios.get(url)
  postDetails.value = res.data
})
</script>

<template>
  {{ console.log(postDetails.id) }}
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="card my-3">
        <img
          :src="postDetails.image"
          :alt="postDetails.title"
          :title="postDetails.title"
          class="m-3"
          style="height: 300px;"
        />
        <div class="card-body">
          <h5>{{ postDetails.title }}</h5><hr>
          <p>{{ postDetails.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<style scoped></style>
