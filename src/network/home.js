// 导入vue实例(使用实例的属性或者方法 .$http)
import ins from '@/main.js'
 
// 获取多个数据
export function getHomeMultidata() {
    // 发起请求, 并返回
   return ins.$http({ url: "/home/multidata" })
}

// 获取商品数据
export function getHomeGoods(type,page) {
    // console.log(this.$http)  // 报错
    return ins.$http({
        url: '/home/data',
        params: {type, page}
    })
}
