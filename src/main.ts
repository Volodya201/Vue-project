import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
const pinia = createPinia()

//@ts-ignore
import { mask } from 'vue-the-mask'

createApp(App).use(router).use(pinia).directive("mask", mask).mount('#app')
