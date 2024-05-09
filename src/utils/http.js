// axios基础封装
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'
// 提示用户当前是否成功
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  })
  
  // axios请求拦截器
  httpInstance.interceptors.request.use(config => {
 // 1. 从pinia获取token数据
 const userStore = useUserStore()
 // 2. 按照后端的要求拼接token数据
 const token = userStore.userInfo.token
 if (token) {
   config.headers.Authorization = `Bearer ${token}`
 }

    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    // 提示用户当前是否成功 统一错误提示
    ElMessage.warning(e.response.data.message)  // 和下面一样
    // ElMessage({
    //   type: 'warning',
    //   message: e.response.data.message})

    // 401token失效处理
    const useStore = useUserStore()
    if(e.response.status === 401)
      {
        useStore.clearUserInfo()
        router.push('/login')
      }
    return Promise.reject(e)
  })
  
  
  export default httpInstance