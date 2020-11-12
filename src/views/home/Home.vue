<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <p slot="left">购物街</p> -->
      <p class="nav-title" slot="center">购物街</p>
      <!-- <p slot="right">购物街</p> -->
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import HomeRecommend from "@/views/home/childComps/HomeRecommend"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  created() {
    this.$http({ url: "/home/multidata" }).then(res => {
      console.log("res.data:", res.data)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      console.log(this.$data)
    })
  },
}
</script>

<style lang="less">
#home {
  // border: 2px solid green;
  .home-nav {
    background: var(--color-tint);
    .nav-title {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
