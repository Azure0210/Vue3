import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { insertCartAPI, NewCartListAPI,delCartAPI } from '@/apis/cart'
import { useUserStore } from './userStore'
export const useCartStore = defineStore('cart', () => {
    // 1. 定义states - cartList
  const cartList = ref([])
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  
  // 2. 封装action -updateCart 优化代码
    const updateCart = async() => {
        const res = await NewCartListAPI()
            cartList.value = res.result
    }

    // 2. 定义action -addCart
    const addCart = async(goods) => {
        const { skuId, count } = goods
        console.log(skuId, count);
        // 添加购物车操作
        if(isLogin.value){
            // 登录之后加入购物车逻辑
            await insertCartAPI({ skuId,count })
            updateCart()
        }
        else{
             const item = cartList.value.find(item => goods.skuId === item.skuId)
            if(item) {
                item.count += goods.count
                return
            }
            // 没有添加过 - 直接push
            else{
                cartList.value.push(goods)
            }}
       
    }
    // 删除购物车
    const clearCart = async(skuId) => {
        if(isLogin.value) {
            // 登录之后删除购物车逻辑
            await delCartAPI([skuId])
            updateCart()
        }
        else {
            cartList.value = cartList.value.filter(item => item.skuId !== skuId)
            // 使用filter如何删除跟数组匹配的skuId的元素
            // cartList.value.filter(item => item.skuId !== skuId)
            // const id = cartList.value.findIndex(item => item.skuId === skuId)
            // cartList.value.splice(id, 1)
        } }

        // 退出登录清空购物车
        const clearAllCart = () => {
            cartList.value = []
        }
    // 单选功能
    const singleCheck = (skuId,seleted) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = seleted
    }

    // 1. 全选功能
    const singleCheckAll = (seleted) => {
        cartList.value.forEach(item => item.selected = seleted)
    }
    // 2. 是否全选
    const allCheck = computed(() => cartList.value.every(item => item.selected))

    // 计算属性
    // 1. 计算总数之和
    const allCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))

    // 2. 计算商品总价
    const allPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.price * item.count, 0))

    // 3. 计算选择的商品总数
    const checkCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))

    // 4. 计算选择的商品总价
    const checkPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.price * item.count, 0))
    return {
        cartList,
        addCart,
        clearCart,
        allCount,
        allPrice,
        singleCheck,
        allCheck,
        singleCheckAll,
        checkCount,
        checkPrice,
        clearAllCart,
        updateCart
    }
},{
    persist: true
})