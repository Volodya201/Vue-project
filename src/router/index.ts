import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AdvantagesView from '../views/AdvantagesView.vue'
import ContactsView from '../views/ContactsView.vue'
import RegisterView from "../views/RegisterView.vue"
import ActivationView from "../views/ActivationView.vue"
import LoginView from "../views/LoginView.vue"
import ResetPassword from "../views/ResetPassword.vue"
//@ts-ignore
import ConfirmPassword from '@/views/ConfirmPasswordView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView
  },
  {
    path: "/advantages",
    name: "advantages",
    component: AdvantagesView
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/auth/:key",
    name: "activateAccount",
    component: ActivationView
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: ResetPassword
  },
  {
    path: "/confirm-password/:key",
    name: "confirmPassword",
    component: ConfirmPassword
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
