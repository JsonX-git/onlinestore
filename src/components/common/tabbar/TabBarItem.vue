<template>
  <div id="tab-bar-item" @click="toggle">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: { path: String, activeColor: { default: "red" } },
  data() {
    return {}
  },
  methods: {
    toggle() {
      //   console.log(this.$route)
      this.$route.path !== this.path ? this.$router.push(this.path) : ""
      //   setTimeout(() => {
      //     console.log(this.$route)
      //   }, 1000)
    },
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      if (this.isActive) {
        return { color: this.activeColor }
      }
      // return this.isActive ? { color: this.color } : {}
    },
  },
}
</script>

<style lang="less">
#tab-bar-item {
  img {
    width: 35px;
    height: 35px;
  }
}
</style>
