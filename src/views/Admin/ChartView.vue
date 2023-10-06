<script setup>
import MasterLayout from '../../components/Admin/MasterLayout.vue';
import BarChart from '../../components/Admin/Chart/BarChart.vue'
import AreaChart from '../../components/Admin/Chart/AreaChart.vue'
import DoughnutChart from '../../components/Admin/Chart/DoughnutChart.vue'
import RadarChart from '../../components/Admin/Chart/RadarChart.vue'
</script>

<template>
    <MasterLayout>
        <div class="row">
            <div class="col-md-6 my-3"><BarChart/></div>
            <div class="col-md-6 my-3"><AreaChart/></div>
            <div class="col-md-6 my-3"><DoughnutChart/></div>
            <div class="col-md-6 my-3"><RadarChart/></div>
        </div>
    </MasterLayout>
</template>

<style scoped></style>