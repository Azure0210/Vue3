// 封装banner轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getHomeBannerAPI } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getHomeBannerAPI({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}
