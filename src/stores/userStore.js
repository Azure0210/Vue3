import { defineStore } from 'pinia'
import { LoginAPI } from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
     // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await LoginAPI({ account, password })
    userInfo.value = res.result

    // 执行合并购物车操作
    await mergeCartAPI(cartStore.cartList.map(item => 
       {
    return {
      skuId: item.skuId,
      selected: item.selected,
      count: item.count
    }
    }))
    cartStore.updateCart()
  }

   // 退出时清除用户信息
   const clearUserInfo = () => {
    userInfo.value = {}
    // 执行清除购物车的action
    cartStore. clearAllCart()
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo 
  }
},{
    persist: true,
  })