<template>
  <div id="app">
    <div class="SwiperBox" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
      <!-- 图片 -->
      <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
        <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" />
        <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
        <img :src="imgList[0].imgUrl" alt="">
      </div>
      <!-- 左箭头按钮 -->
      <div class="leftBtn" @click="throttle(PrevFun)">&larr;</div>
      <!-- 右箭头按钮 -->
      <div class="rightBtn" @click="throttle(NextFun)">&rarr;</div>
      <!-- 下方指示点容器 -->
      <div class="instBox">
        <div @click="instFun(index)" v-for="(item,index) in imgList.length" :key="index"
          :class="['inst',index==imgShow?'instActv':'']">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'myCarousel',
        data() {
            return {
                // 图片的本地相对路径需要使用require包裹
                imgList: [{
                    imgUrl: require("@/assets/img/pic1.jpeg")
                }, {
                    imgUrl: require("@/assets/img/pic2.jpeg")
                }, {
                    imgUrl: require("@/assets/img/pic3.jpeg")
                }, {
                    imgUrl: require("@/assets/img/pic4.jpeg")
                }, {
                    imgUrl: require("@/assets/img/bgc2.png")
                }, ],
                leftVal: 0, // 轮播图盒子的偏移值
                flag: true, // 用来节流防止重复点击
                start: null, // 自动执行下一张定的时器
                imgWidth: 650, // 在这里填写你需要的图片宽度
                ition: 0.8, // 设置轮播图过度时间
                imgShow: 0, // 表示当前显示的图片索引
            };
        },
        mounted() {
            this.奥力给() // 偷偷告诉大家一个小秘密,JavaScript是原生支持中文命名函数或变量的哦
        },
        methods: {
            // 这里定义一个鼠标移入移出事件，鼠标悬停时停止自动轮播，鼠标移出则重新执行自动轮播
            MouseFun(type) { // 停止定时器            // 重新执行定时器
                type == '移入' ? clearTimeout(this.start) : this.奥力给()
            },
            // 此为自动轮播定时器
            奥力给() {
                this.start = setInterval(() => {
                    this.NextFun()
                }, 3500)
            },
            // 这里通过额外封装的节流函数触发 PrevFun() 和 NextFun(),以达到防止重复点击的效果
            throttle(fun) {
                if (this.flag) {
                    this.flag = false;
                    fun(); // 此为模板中传递进来的PrevFun()或NextFun()函数
                    setTimeout(() => {
                        this.flag = true;
                    }, 2200); // 节流间隔时间
                }
            },
            // 上一张
            PrevFun() {
                if (this.leftVal == 0) { // 判断显示的图片 是 第一张时执行
                    // this.imgList.length是指循环图片数组的图片个数
                    this.ition = 0 // 将过渡时间变成0，瞬间位移到最后一张图
                    this.imgShow = this.imgList.length - 1 // 将高亮小点改为最后一张图
                    this.leftVal = (this.imgList.length) * this.imgWidth // 瞬间移动
                    setTimeout(() => { // 通过延时障眼法,归原过渡时间,执行真正的“上一张”函数
                        this.ition = 0.8
                        this.leftVal -= this.imgWidth
                    }, this.ition * 1000)
                } else { // 判断显示的图片 不是 第一张时执行
                    this.ition = 0.8
                    this.leftVal -= this.imgWidth
                    this.imgShow--
                }
            },
            // 下一张
            NextFun() {
                if (this.leftVal == (this.imgList.length - 1) * this.imgWidth) { // 判断显示的图片 是 最后一张时执行
                    this.ition = 0.8
                    this.leftVal += this.imgWidth
                    this.imgShow = 0
                    setTimeout(() => {
                        this.ition = 0
                        this.leftVal = 0
                    }, this.ition * 1000)
                } else { // 判断显示的图片 不是 最后一张时执行
                    this.ition = 0.8
                    this.leftVal += this.imgWidth
                    this.imgShow++
                }
            },
            // 点击小圆点
            instFun(index) {
                this.ition = 0.8
                this.leftVal = index * this.imgWidth
                this.imgShow = index
            },
        }
    };
</script>

<style>
    /* 图片容器样式 */
    
    .SwiperBox {
        position: relative;
        width: 650px;
        height: 480px;
        box-sizing: border-box;
        cursor: pointer;
        overflow: hidden;
    }
    
    .imgBox {
        position: absolute;
        top: 0px;
        left: 0px;
        min-width: 650px;
        height: 480px;
        display: flex;
        justify-content: flex-start;
    }
    /* 图片默认样式 */
    
    .imgBox img {
        flex-shrink: 0;
        width: 650px;
        height: 480px;
    }
    /* 两个按钮共有的样式,也可直接使用箭头图片替代 */
    
    .leftBtn,
    .rightBtn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(109, 109, 109, 0.445);
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
    }
    
    .leftBtn {
        left: 10px;
    }
    
    .rightBtn {
        right: 10px;
    }
    /* 下方指示器盒子 */
    
    .instBox {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        display: flex;
    }
    /* 小圆点 */
    
    .inst {
        width: 10px;
        height: 10px;
        border: 1px solid #ccc;
        margin-right: 8px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
    
    .inst:last-child {
        margin-right: 0px;
    }
    
    .instActv {
        border: 1px solid #ff0000;
        background: #ff0000;
    }
    /* #app {
        width: 100%;
        padding: 120px;
        display: flex;
        justify-content: center;
    } */
</style>