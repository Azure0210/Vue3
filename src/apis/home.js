import  httpInstance from '@/utils/http'
export function getHomeBannerAPI() {
return httpInstance({
    url:'home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getHomeNewAPI() {
    return httpInstance({
        url:'home/new'
      })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance({
   url: 'home/hot',
   method: 'get', 
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getProductAPI = () => {
  return httpInstance({
    url:'/home/goods'
  })
}