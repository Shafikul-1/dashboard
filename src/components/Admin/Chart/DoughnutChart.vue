<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
  <div class="card">
    <div class="card-header">
      <i class="fas fa-chart-bar me-1"></i>
      Doughnut Chart Example
    </div>
    <div class="card-body">
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>



<style scoped></style>