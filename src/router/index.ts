import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import AdvantagesView from '@/views/AdvantagesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import RegisterView from "@/views/RegisterView.vue"
import ActivationView from "@/views/ActivationView.vue"
import LoginView from "@/views/LoginView.vue"
import ResetPassword from "@/views/ResetPassword.vue"
import CreateProductView from '@/views/CreateProductView.vue'
import UpdateProductView from '@/views/UpdateProductView.vue'
import ConfirmPassword from '@/views/ConfirmPasswordView.vue'
import ProductsView from '@/views/ProductsView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import OrdersView from '@/views/OrdersView.vue'
import CreateOrderView from '@/views/CreateOrderView.vue'
import ViewOrderView from '@/views/ViewOrderView.vue'
import ApplicationsView from '@/views/ApplicationsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
    children: [{
      path: "",
      name: "home-page",
      component: HomeView
    }]
  },
  {
    path: "/categories",
    name: "categories",
    component: MainLayout,
    children: [{
      path: "",
      name: "categories-page",
      component: CategoriesView
    }]
  },
  {
    path: "/advantages",
    name: "advantages",
    component: MainLayout,
    children: [{
      path: "",
      name: "advantages-page",
      component: AdvantagesView
    }]
  },
  {
    path: "/contacts",
    name: "contacts",
    component: MainLayout,
    children: [{
      path: "",
      name: "contacts-page",
      component: ContactsView
    }]
  },
  {
    path: "/register",
    name: "register",
    component: AuthLayout,
    children: [{
      path: "",
      name: "register-page",
      component: RegisterView
    }]
  },
  {
    path: "/login",
    name: "login",
    component: AuthLayout,
    children: [{
      path: "",
      name: "login-page",
      component: LoginView
    }]
  },
  {
    path: "/auth/:key",
    name: "activateAccount",
    component: AuthLayout,
    children: [{
      path: "",
      name: "activate-page",
      component: ActivationView
    }]
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: AuthLayout,
    children: [{
      path: "",
      name: "resetPassword-page",
      component: ResetPassword
    }]
  },
  {
    path: "/confirm-password/:key",
    name: "confirmPassword",
    component: AuthLayout,
    children: [{
      path: "",
      name: "confirmPassword-page",
      component: ConfirmPassword
    }]
  },
  {
    path: "/products",
    name: "products",
    component: MainLayout,
    children: [{
      path: "",
      name: "products-page",
      component: ProductsView
    }]
  },
  {
    path: "/create-product",
    name: "createProduct",
    component: MainLayout,
    children: [{
      path: "",
      name: "createProduct-page",
      component: CreateProductView
    }]
  },
  {
    path: "/update-product",
    name: "updateProduct",
    component: MainLayout,
    children: [{
      path: "",
      name: "updateProduct-page",
      component: UpdateProductView
    }]
  },
  {
    path: "/orders",
    name: "orders",
    component: MainLayout,
    children: [{
      path: "",
      name: "orders-page",
      component: OrdersView
    }]
  },
  {
    path: "/create-order",
    name: "createOrder",
    component: MainLayout,
    children: [{
      path: "",
      name: "createOrder-page",
      component: CreateOrderView
    }]
  },
  {
    path: "/view-order",
    name: "viewOrder",
    component: MainLayout,
    children: [{
      path: "",
      name: "viewOrder-page",
      component: ViewOrderView
    }]
  },
  {
    path: "/applications",
    name: "applications",             
    component: MainLayout,
    children: [{
      path: "",
      name: "applications-page",
      component: ApplicationsView
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
