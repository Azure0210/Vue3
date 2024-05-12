import { ref,computed,onUnmounted } from 'vue';
import dayjs from 'dayjs';

export const useCountDown = () => {
    // 1. 响应式数据
    let timer = null
    const time = ref(0);
    // 2. 格式化时间 为 xx分xx秒
    const formatTime = computed(() => dayjs.unix(time.value).format('mm:ss'));

    // 3. 开启倒计时函数
    const start = (currentTime) => {
        time.value = currentTime;
        setInterval(() => {
            time.value--;
        }, 1000);
    }
    // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
    return{
        formatTime,
        start
    }
}