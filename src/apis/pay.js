import  httpInstance from '@/utils/http'

// 获取订单
export const getOrderAPI = (id) => {
  return httpInstance({
    url: `/member/order/${id}`
  })
}