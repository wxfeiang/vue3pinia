import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'



// 创建pinia 实例

const pinia = createPinia()



createApp(App).use(pinia).mount('#app')
