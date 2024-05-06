

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'

// 引入初始化文件
import '@/styles/common.scss'
const app = createApp(App)


// 测试接口函数
import { getCategoryList } from '@/apis/test'
getCategoryList().then(res => {
    console.log(res)
})

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

