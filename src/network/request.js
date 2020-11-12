// 1-导入axios模块
import axios from 'axios'  // es6 语法
// const axios = require("axios")   // commonjs语法


// 2-创建一个axios实例(注意: 此处使用的时axios的实例,而不是axios本身,这样可以创建多个实例使用),并进行基本配置
const Axios = axios.create({ baseURL: 'http://123.207.32.32:8000', withCredentials: true })

// 3-配置拦截器
// 3.1-配置请求拦截器
Axios.interceptors.request.use((config) => {
    console.log('触发请求拦截器')
    // console.log(config)
    // 返回配置
    return config
},(err)=>{console.log('请求报错','error')
})
// 配置响应拦截器
Axios.interceptors.response.use((res) => {
    console.log('触发响应拦截器')
    // console.log(res)
    // 返回请求结果
    return res.data
},(err)=>{console.log('响应报错','error')
})

// 4-导出axios实例,并将axios实例添加为Vue的prototype属性,实现全局调用
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype,'$http',{
            value:Axios,
            writable:false 
        })
        // Vue.prototype.$http = Axios
    }   
}