<template>
  <div class="swiper-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: [],
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>

<style lang="less">
.swiper-item {
  width: 100%;
  // 不收缩
  flex-shrink: 0;
  img {
    width: 100%;
  }
}
</style>
