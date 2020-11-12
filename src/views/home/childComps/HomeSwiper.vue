<template>
  <div id="home-swiper">
    <swiper>
      <!-- <swiper-item v-for="(i, index) in [1111111, 22222222, 333333333]" :key="index"> -->
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a>
          <!-- <h1>{{ i }}</h1> -->
          <img :src="item.image" alt="" />
          <!-- <img src="@/assets/img/home/recommend_bg.jpg" alt="" /> -->
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import { Swiper, SwiperItem } from "@/components/common/swiper"
import Swiper from "@/components/common/swiper/Swiper"
import SwiperItem from "@/components/common/swiper/SwiperItem"

export default {
  name: "HomeSwiper",
  //   props: ["banners"],
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: { Swiper, SwiperItem },
  data() {
    return {}
  },

  methods: {},
  created() {
    console.log(this.banners)
  },
}
</script>

<style lang="less">
#home-swiper {
  overflow: hidden;
}
</style>
