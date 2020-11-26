<template>
  <div class="goods-list">
    <goods-list-item
      :goodsItem="item"
      v-for="(item, index) in goods"
      :key="index"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem"

export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log(111111, this.$props)
  },
}
</script>

<style lang="less">
.goods-list {
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
