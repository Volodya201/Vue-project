import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AdvantagesView from '../views/AdvantagesView.vue'
import ContactsView from '../views/ContactsView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
