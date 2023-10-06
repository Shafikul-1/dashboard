import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('../views/HomeView.vue')
    },
    {
      path:'/admin',
      name: 'admin',
      component: ()=> import ('../views/Admin/AdminHome.vue')
    },
    {
      path:'/admin/card',
      name: 'admin_card',
      component: ()=> import ('../views/Admin/CardView.vue')
    }, 
    {
      path:'/admin/chart',
      name: 'admin_chart',
      component: ()=> import ('../views/Admin/ChartView.vue')
    },
    {
      path:'/admin/product',
      name: 'admin_product_page',
      component: ()=> import ('../views/Admin/ProductView.vue')
    },
    {
      path:'/admin/product/:id',
      name: 'admin_product_view_page',
      component: ()=> import ('../components/Admin/Product/ProductDetails.vue')
    },
    {
      path:'/admin/data-table',
      name: 'admin_data-table',
      component: ()=> import ('../views/Admin/DataTableView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: ()=> import ('../views/NotFound.vue') 
    }
  ]
})

export default router
