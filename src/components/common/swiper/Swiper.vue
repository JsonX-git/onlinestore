<template>
  <div
    id="swiper"
    :class="{ tran: tranClass, swiper: true }"
    :style="slideStyle"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: [],
  data() {
    return {
      distanceX: 0,
      totalWidth: 0, // 一次移动的距离
      slideIndex: 1,
      //   swiperClass: {},   // 不适用也可以
      tranClass: false, // 控制transition
      scroll: false,
    }
  },
  /*钩子函数*/
  mounted() {
    // 生命周期钩子函数问题 , 暂时性解决方案:加个定时器
    setTimeout(() => {
      //   this.$nextTick(function() {
      // DOM添加slide
      this.handleDom()
      // 启动定时器
      this.startTimer()
    }, 1000)
    // })
  },
  computed: {
    // 实现自动轮播跳转
    slideStyle() {
      // 使用this.swiperClass符合计算属性的正确使用方式(即计算属性随着内部data数据更新而更新)
      //   this.swiperClass =
      return {
        transform: `translateX(${-this.slideIndex * this.totalWidth}px)`,
      }
    },
  },
  created() {},
  methods: {
    // 自动轮播
    startTimer() {
      this.timer = setInterval(() => {
        // 滚动状态切换
        this.scroll = true
        setTimeout(() => {
          this.scroll = false
        }, 1000)

        // 3.2-自动轮播
        if (this.slideIndex < 5) {
          // if (this.slideIndex < this.banners.length + 1) {
          // 改变transition状态
          this.tranClass = true
          //   console.log(this.slideIndex, 22222)
          // 切换下一张
          this.slideIndex++
          if (this.slideIndex == 5) {
            //   if (this.slideIndex == this.banners.length + 1) {
            setTimeout(() => {
              this.tranClass = true
              //   console.log(this.slideIndex, 3333333)
              this.slideIndex++
            }, 4000)
          }
        }
        // else if (this.slideIndex == 4) {
        //   //   this.slideIndex++
        //   setTimeout(() => {
        //     this.slideIndex++
        //     this.tranClass = true
        //   }, 4000)
        // }
        else {
          //   console.log(this.slideIndex)
          this.tranClass = false
          // 实现瞬间拉回(需要同时处理translate和transition)
          this.slideIndex = 1
        }
      }, 4000)
    },
    // DOM预处理
    handleDom() {
      // 1.1-获取#swip er元素对对象
      let swiperEl = document.getElementById("swiper")
      //   console.log("swiperEl:", swiperEl)
      //   console.dir(swiperEl)

      let slides = swiperEl.getElementsByClassName("swiper-item") // Q:两者的区别
      //   console.log("slides:")
      //   console.dir(slides)

      // Q:不使用cloneNode()时为什么不行???  ==节点克隆==
      swiperEl.insertBefore(slides[slides.length - 1].cloneNode(true), slides[0])

      swiperEl.appendChild(slides[1].cloneNode(true))
      // 将#swiper的样式与变量swiperStyle绑定
      this.swiperStyle = swiperEl.style
      // this.swiperStyle.border = "3px solid red"  // 验证有效

      // 2.1-获取slide宽度
      this.totalWidth = slides[0].offsetWidth

      // 3.1显示第一个slide
      this.setTransform(-this.totalWidth)

      // 使用js动态绑定类
    },

    // 拖行移动
    setTransform(x) {
      this.swiperStyle.transform = `translateX(${x}px)`
    },

    // 判断拖动行为--是否切换下(上)一页
    // slideToggle() {},

    /*拖动事件处理*/
    touchStart(e) {
      if (!this.scroll) {
        // 1-停止自动轮播
        clearInterval(this.timer)
        // console.log("定时器已停止")

        // 2-获得触摸起始X坐标(即触摸点坐标)
        this.startX = e.touches[0].clientX

        // 3-切换滚动状态(激活touchMove)
        this.scroll = false
        // console.log("touchStart", this.scroll)
      } else {
        // console.log("touchStart", this.scroll)
      }
    },
    touchMove(e) {
      if (!this.scroll) {
        //   //   console.log("touchMove:", e)

        // 1-获取touch移动距离
        this.distanceX = e.touches[0].clientX - this.startX
        // console.log("distanceX:", this.distanceX)

        // 2-切换transition状态 && 实现实时滑动
        this.tranClass = false
        this.setTransform(-this.slideIndex * this.totalWidth + this.distanceX)

        // console.log("touchMove:", this.scroll)
      } else {
        // console.log("touchMove:", this.scroll)
      }
    },
    touchEnd(e) {
      if (!this.scroll) {
        //   console.log('touchEnd:', e)

        // 判断拖动是否超过一半
        if (Math.abs(this.distanceX / this.totalWidth) > 1 / 4) {
          // 超过一半
          if (this.distanceX < 0) {
            if (this.slideIndex == 4) {
              // if (this.slideIndex == this.banners.length) {
              setTimeout(() => {
                // 且transition状态为0s
                this.tranClass = false
                // 瞬间切回①1
                this.slideIndex = 1
              }, 1000)
            }
            // 且transition状态为3s
            this.tranClass = true
            this.slideIndex++
          } else {
            if (this.slideIndex == 1) {
              setTimeout(() => {
                // 且transition状态为0s
                this.tranClass = false
                // 瞬间切回①3
                this.slideIndex = 4
                // this.slideIndex = this.banners.length
              }, 1000)
            }
            // 且transition状态为3s
            this.tranClass = true
            this.slideIndex--
          }
          //   console.log(this.distanceX)
          //   // 启动自动轮播
          //   console.log("启动定时器")
          //   this.startTimer()

          // 没有超过一半=> 返回原来位置
        } else {
          // 切换transition状态为3s
          this.tranClass = true
          this.setTransform(-this.slideIndex * this.totalWidth)
        }
        // console.log("touchEnd:", this.scroll)
      } else {
        // console.log("touchEnd:", this.scroll)
      }
      //   启动自动轮播
      //   console.log("启动定时器")
      this.startTimer()
    },
  },
}
</script>

<style lang="less">
#swiper {
  display: flex;
  width: 100%;
}
.tran {
  transition: transform 1s;
}
</style>
