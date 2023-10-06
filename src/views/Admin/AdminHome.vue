<script setup>
import MasterLayout from '../../components/Admin/MasterLayout.vue';
import CardAll from '../../components/Admin/Card/CardAll.vue';
import DoughnutChart from '../../components/Admin/Chart/DoughnutChart.vue';
import RadarChart from '../../components/Admin/Chart/RadarChart.vue';
import DataTable from '../../components/Admin/Data/DataTable.vue';
</script>

<template>
    <MasterLayout>
        <div class="row">
            <div class="row">
                <div class="col-md-3">
                    <CardAll price="$307,144" priceDetails="Total Purchase Due" image="https://dreamspos.dreamguystech.com/vuejs/template/img/dash1.28effe95.svg"/>
                </div>
                <div class="col-md-3">
                    <CardAll price="$4,385" priceDetails="Total Purchase Due" image="https://dreamspos.dreamguystech.com/vuejs/template/img/dash2.af345e52.svg"/>
                </div>
                <div class="col-md-3">
                    <CardAll price="$385,657" priceDetails="Total Sale Amount" image="https://dreamspos.dreamguystech.com/vuejs/template/img/dash3.001eebbd.svg"/>
                </div>
                <div class="col-md-3">
                    <CardAll price="$40,000" priceDetails="Total Sale Amount" image="https://dreamspos.dreamguystech.com/vuejs/template/img/dash4.2da5bddc.svg"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <DoughnutChart />
                </div>
                <div class="col-md-6">
                    <RadarChart />
                </div>
            </div>
            <div class="col-md-12">
                <DataTable />
            </div>
            <div class="col-md-12">
            </div>
        </div>
    </MasterLayout>
</template>

<style scoped></style>