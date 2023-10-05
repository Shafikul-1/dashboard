<script setup>
const headers = [
      { text: "Name", value: "name" },
      { text: "Height (cm)", value: "height", sortable: true },
      { text: "Weight (kg)", value: "weight", sortable: true },
      { text: "Age", value: "age", sortable: true },
      { text: "Product", value: "product", sortable: true }
]
const items = [
      { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "Shart", "height": 180, "weight": 75, "age": 21 },
      { "name": "Shart", "height": 180, "weight": 75, "age": 21 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22, "product" : 454},
      { "name": "borka", "height": 181, "weight": 73, "age": 22, "product" : 454},
      { "name": "under pant", "height": 181, "weight": 73, "age": 22, "product" : 454},
      { "name": "pendy", "height": 181, "weight": 73, "age": 22, "product" : 454},
      { "name": "pant", "height": 181, "weight": 73, "age": 22, "product" : 454}
]
</script>

<template>
  <div class="card mb-4">
    <div class="card-header">
      <i class="fas fa-table me-1"></i>
      DataTable Example
    </div>
    <div class="card-body">
      <EasyDataTable :headers="headers" :items="items" border-cell buttons-pagination alternating table-class-nam="fastTest"/>
     
    </div>
  </div>
</template>
