

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入全局组件插件
import { componentPlugin } from '@/components'

// 引入初始化文件
import '@/styles/common.scss'
const app = createApp(App)
const pinia = createPinia()

// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
app.use(componentPlugin)


// 测试接口函数
import { getCategoryList } from '@/apis/test'
getCategoryList().then(res => {
    console.log(res)
})