<template>
  <div class="slide-wrap" @mouseover="pasue" @mouseout="play">
    <ul class="slide-bar" :style="ulWidth" :class="{ tran: noLast }">
      <li v-for="item in list" :key="item" :style="{ width: liWidth + '%' }">
        <img :src="item" />
      </li>
    </ul>
    <div class="arrow">
      <img :src="arrow_left" class="arrow_left" @click="prev" />
      <img :src="arrow_right" class="arrow_right" @click="next" />
    </div>
    <div class="pagnator">
      <span
        v-for="(page, index) in list"
        :key="index"
        :class="{ active: index == current + 1, extra: index == 0 || index == list.length - 1 }"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideChild",
  data() {
    return {
      list: [
        //数组前后各增加一张图片
        "static/image/6.jpg",
        "static/image/1.jpg",
        "static/image/2.jpg",
        "static/image/3.jpg",
        "static/image/4.jpg",
        "static/image/5.jpg",
        "static/image/6.jpg",
        "static/image/1.jpg",
      ],
      arrow_left: "static/image/arrow_left.png",
      arrow_right: "static/image/arrow_right.png",
      bar: {
        width: "0",
        transform: "translateX(0)",
      },
      current: 0,
      noLast: true,
    }
  },
  computed: {
    ulWidth() {
      this.bar = {
        transform: "translateX(-" + (this.current + 1) * 100 + "%)",
      }
      return this.bar
    },
    liWidth() {
      return 100
    },
  },
  methods: {
    prev() {
      this.current--
      if (this.current == -1) {
        setTimeout(() => {
          //取消过渡效果,使用css来进行操作transition,如果直接用js来操作transition,达不到我们要的效果
          this.noLast = false
          //切换到1234的4去，由于ul的translatex索引是this.current+1,所以1234的4为this.list.length - 3 +1 = this.list.length -2
          //具体多少，得看你的布局是怎样的，有没有合并在数组里面去
          this.current = this.list.length - 3
        }, 500) //定时器的时间等于过渡时间
      }
      this.noLast = true
    },
    next() {
      this.current++
      if (this.current == this.list.length - 2) {
        setTimeout(() => {
          this.noLast = false
          this.current = 0
        }, 500)
      }
      this.noLast = true
    },
    pasue() {
      console.log("暂停")
      clearInterval(this.timer)
    },
    play() {
      console.log("播放")
      this.autoSwitch()
    },
    autoSwitch() {
      //自动播放
      this.timer = setInterval(() => {
        this.next()
      }, 1000)
    },
  },
  created() {
    this.autoSwitch()
  },
}
</script>

<style lang="less">
.slide-box {
  width: 300px;
  margin: auto;
}
.slide-wrap {
  overflow: hidden;
  position: relative;
}
.slide-bar {
  display: -webkit-box;
}
.tran {
  transition: all 0.5s;
}
.slide-bar li {
  height: 200px;
}
.slide-bar img {
  width: 100%;
  height: 100%;
}
.arrow img {
  position: absolute;
  top: 46%;
  transform: translateY(-50%);
  padding: 6px 0;
  cursor: pointer;
}
.arrow .arrow_left {
  left: 0;
}
.arrow .arrow_right {
  right: 0;
}
.pagnator {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}
.pagnator span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 2px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
.active {
  background: rgba(76, 175, 80, 0.64) !important;
}
.extra {
  display: none !important;
}
</style>
