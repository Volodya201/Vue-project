import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
const pinia = createPinia()

import { MaskInput } from 'vue-3-mask'

createApp(App).use(router).use(pinia).mount('#app')
