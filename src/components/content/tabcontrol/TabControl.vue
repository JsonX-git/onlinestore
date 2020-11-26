<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      @click="itemClick(index)"
      class="tab-control-item"
    >
      <span :class="{ active: currentIndex == index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: ["titles"],
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("tabClick", index)
    },
  },
}
</script>

<style lang="less">
.tab-control {
  //   border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .tab-control-item {
    margin: 10px 0 18px;
    span {
      padding: 5px 10px;
    }
  }
}
.active {
  color: #ff8198;
  border-bottom: 4px solid #ff8198;
}
</style>
