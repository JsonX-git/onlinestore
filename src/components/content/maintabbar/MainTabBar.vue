<template>
  <tab-bar id="tab-bar">
    <tab-bar-item path="/home" slot="tab-bar-item" activeColor="blue">
      <img slot="item-img" src="@/assets/img/tabbar/home.svg" alt="" />
      <img slot="item-img-active" src="@/assets/img/tabbar/home_active.svg" alt="" />
      <p slot="item-title">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category" slot="tab-bar-item">
      <img slot="item-img" src="@/assets/img/tabbar/category.svg" />
      <img slot="item-img-active" src="@/assets/img/tabbar/category_active.svg" />
      <p slot="item-title">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" slot="tab-bar-item">
      <img slot="item-img" src="@/assets/img/tabbar/shopcart.svg" />
      <img slot="item-img-active" src="@/assets/img/tabbar/shopcart_active.svg" />
      <p slot="item-title">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile" slot="tab-bar-item">
      <img slot="item-img" src="@/assets/img/tabbar/profile.svg" />
      <img slot="item-img-active" src="@/assets/img/tabbar/profile_active.svg" />
      <p slot="item-title">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem },
}
</script>

<style lang="less">
#tab-bar {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ccc;
}
</style>
