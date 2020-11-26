<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">¥:{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: ["goodsItem"],
  data() {
    return {}
  },
  mounted() {
    // console.log(this.goodsItem)
  },
}
</script>

<style lang="less">
.goods-item {
  width: 48%;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    p {
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      color: red;
      display: inline-block;
      // width: 50%;
    }
    .collect {
      display: inline-block;
      // width: 50%;
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 1px;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.svg") no-repeat;
      background-size: 14px 14px;
    }
  }
}
</style>
