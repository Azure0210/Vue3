import httpInstance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}
