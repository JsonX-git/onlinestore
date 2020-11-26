<template>
  <div class="weekpop">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/recommend_bg.jpg" alt=""
    /></a>
  </div>
</template>

<script>
export default {
  name: "HomeWeekPop",
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
  created() {},
}
</script>

<style lang="less">
.weekpop {
  widows: 100%;
  img {
    width: 100%;
  }
}
</style>
