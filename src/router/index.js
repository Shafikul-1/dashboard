import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: ()=> import ('../components/AdminHome.vue')
    },
    {
      path:'/admin',
      name: 'admin',
      component: ()=> import ('../components/Admin/MasterLayout.vue')
    },
    {
      path:'/admin/login',
      name: 'admin_login_page',
      component: ()=> import ('./../components/Admin/Authenticate/LogIn.vue')
    },
    {
      path:'/admin/register',
      name: 'admin_register_page',
      component: ()=> import ('./../components/Admin/Authenticate/SignUp.vue')
    },
    {
      path:'/admin/product',
      name: 'admin_roduct_page',
      component: ()=> import ('./../components/Admin/Product/ProductList.vue')
    },
    {
      path:'/admin/product/:id',
      name: 'admin_product_view_page',
      component: ()=> import ('./../components/Admin/Product/ProductView.vue')
    }
  ]
})

export default router
