<script setup>
import TopMenu from './AdminMenu/TopMenu.vue'
import SideBar from './AdminMenu/SideBar.vue'
import FooterView from '../Admin/Footer/FooterView.vue'
import BarChart from '../Admin/Chart/BarChart.vue'
import AreaChart from '../Admin/Chart/AreaChart.vue'
import DataTable from '../Admin/Data/DataTable.vue'
import CardView from '../Admin/Card/CardView.vue'
import ContentLoader from '../Admin/Loader/ContentList.vue'
import DoughnutChart from './Chart/DoughnutChart.vue'
import RadarChart from './Chart/RadarChart.vue'
</script>

<template>
  <div class="sb-nav-fixed">
    <TopMenu />
    <div id="layoutSidenav">
      <div class="row">
        <div class="col-md-2">
          <SideBar />
        </div>
        <div class="col-md-10">
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid ">
                <CardView />
                <div class="row">
                  <BarChart />
                  <AreaChart />
                  <DoughnutChart />
                  <RadarChart />
                </div>
                <DataTable />
              </div>
            </main>
            <ContentLoader />
            <FooterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<!-- 
    <SideBar />
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <CardView />
            <div class="row">
              <BarChart />
              <AreaChart />
              <DoughnutChart />
              <RadarChart />
            </div>
            <DataTable />
          </div>
        </main>
        <ContentLoader />
        <FooterView />
      </div>
 -->
