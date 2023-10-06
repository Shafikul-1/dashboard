<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ContentLoader } from 'vue-content-loader'

const allData = ref([])
const loading = ref(true)
onMounted(async () => {
  const url = 'https://fakestoreapi.com/products'
  const res = await axios.get(url)
  allData.value = res.data
  loading.value = false
})

const headers = [
  { text: 'Product Name', value: 'title' },
  { text: 'Product Price $', value: 'price', sortable: true },
  { text: 'Stock Count (pcs)', value: 'rating.count', sortable: true },
  { text: 'Product Category', value: 'category', sortable: true },
  { text: 'View Details', value: 'id', width: 100 } //fixed: true,
]
const items = ref(allData)

const viewRow = ref('')
const showRow = (items) => {
  viewRow.value = JSON.stringify(items)
}

// function itemClick(number) {
//   console.log(number);
// }
</script>

<template>
  <div class="card">
    <div class="card-header">
      <i class="fas fa-table me-1"></i>
      Stock DataTable
    </div>
    <div class="" v-if="loading">
      <ContentLoader
        width="1500"
        height="400"
        viewBox="0 0 1500 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
        <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
        <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
        <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
        <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
        <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
        <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
        <rect x="1424" y="137" rx="10" ry="10" width="68" height="19" />
        <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
        <circle cx="1456" cy="203" r="12" />
        <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
        <circle cx="1456" cy="265" r="12" />
        <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
        <circle cx="1456" cy="323" r="12" />
        <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
        <circle cx="1456" cy="386" r="12" />
        <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />
        <rect x="1183" y="139" rx="10" ry="10" width="85" height="19" />
        <rect x="1182" y="196" rx="10" ry="10" width="85" height="19" />
        <rect x="1182" y="258" rx="10" ry="10" width="85" height="19" />
        <rect x="1182" y="316" rx="10" ry="10" width="85" height="19" />
        <rect x="1182" y="379" rx="10" ry="10" width="85" height="19" />
        <rect x="1305" y="137" rx="10" ry="10" width="85" height="19" />
        <rect x="1304" y="194" rx="10" ry="10" width="85" height="19" />
        <rect x="1304" y="256" rx="10" ry="10" width="85" height="19" />
        <rect x="1304" y="314" rx="10" ry="10" width="85" height="19" />
        <rect x="1304" y="377" rx="10" ry="10" width="85" height="19" />
        <circle cx="37" cy="97" r="11" />
        <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
        <circle cx="1316" cy="88" r="11" />
        <rect x="1337" y="94" rx="0" ry="0" width="134" height="3" />
        <circle cx="77" cy="96" r="11" />
      </ContentLoader>
    </div>
    <div v-else class="card-body">
      <EasyDataTable
        :headers="headers"
        :items="items"
        :rows-per-page="20"
        border-cell
        buttons-pagination
        alternating
        @click-row="showRow"
      >
        <template #expand="item">
          <div style="padding: 15px">
            Product Name: {{ item.name }} <br />
            Product Price: {{ item.price }} <br />
            Product Category: {{ item.category }}
          </div>
        </template>
        <template #item-id="{ id }">
          <RouterLink
            :to="{ name: 'admin_product_view_page', params: { id: id } }"
            class="btn-success btn btn-sm"
            >Click Here</RouterLink
          >
          <!-- jodi click kore kono kaj korte hoy tahole ai function kaj korte hobe  ( @click="itemClick(id)" ) -->
        </template>
      </EasyDataTable>
    </div>
  </div>

  <div class="">
    <p>Row Details => {{ viewRow }}</p>
  </div>
</template>
