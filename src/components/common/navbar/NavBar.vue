<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style lang="less">
.nav-bar {
  //   background: #ff8e97;
  //   height: 44px;  // 为什么只写一个就行了
  line-height: 44px;
  display: flex;
  color: white;
  //   font-weight: bolder;
  //   font-size: 20px;
  .left {
    width: 60px;
    background: blue;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .right {
    width: 60px;
    background: blue;
  }
}
</style>
