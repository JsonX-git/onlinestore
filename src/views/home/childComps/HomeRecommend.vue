<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a href="javascript:;">
        <img :src="item.image" alt="图片加载失败" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },

  methods: {},
  created() {
    setTimeout(() => {
      console.log(111111, this.recommends)
    }, 1000)
  },
}
</script>

<style lang="less">
.recommend {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  border-bottom: 10px solid #eee;
  padding: 15px 0 30px;
  .recommend-item {
    flex: 1;
    // border: 1px solid seagreen;
    text-align: center;
    img {
      width: 70px;
    }
  }
}
</style>
