<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <p slot="left">购物街</p> -->
      <p class="nav-title" slot="center">购物街</p>
      <!-- <p slot="right">购物街</p> -->
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <weekPop :recommends="recommends"></weekPop>
    <tab-control
      @tabClick="tabClick"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="goods[currentTab].list"></goods-list>
  </div>
</template>

<script>
// content(内容)组件
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import Recommend from "@/views/home/childComps/HomeRecommend"
import WeekPop from "@/views/home/childComps/HomeWeekPop"
import GoodsList from "@/components/content/goods/GoodsList"

// 复用组件
import NavBar from "@/components/common/navbar/NavBar"
import TabControl from "@/components/content/tabcontrol/TabControl"
// js
import { getHomeGoods, getHomeMultidata } from "@/network/home.js"
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      // 请求&&保存 首页商品数据 需要的分类参数
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      // 当前tab
      currentTab: "pop",
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    WeekPop,
    TabControl,
    GoodsList,
  },
  created() {
    // 获取多个数据
    this.getHomeMultidata()
    // 获取商品数据
    this.getHomeGoods("pop", 1)
    this.getHomeGoods("new", 1)
    this.getHomeGoods("sell", 1)
  },
  mounted() {},
  methods: {
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then(res => {
        // this.goods[type].list = res.data.list
        this.goods[type].list.push(...res.data.list) // 追加到原数组(而不是替换)
        // this.goods[type].list = this.goods[type].list.concat(res.data.list) // 方法二

        // 页码处理
      })
    },

    // 事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTab = "pop"
          break
        case 1:
          this.currentTab = "new"
          break
        case 2:
          this.currentTab = "sell"
          break
      }
      // console.log(index, this.currentTab)
    },
  },
}
</script>

<style lang="less">
#home {
  // border: 2px solid green;
  padding-top: 44px;
  .home-nav {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    background: var(--color-tint);
    .nav-title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .tab-control {
    // 吸顶效果
    position: sticky;
    top: 44px;
    background: white;
  }
}
</style>
