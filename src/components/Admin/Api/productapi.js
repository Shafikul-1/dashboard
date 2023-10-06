import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const product = defineStore('fakestoreapiData', () => {
  const productData = ref([])
  onMounted(async () => {
    const url = 'https://fakestoreapi.com/products'
    const res = await axios.get(url)
    productData.value = res.data
  })
  
  return { productData }
})
