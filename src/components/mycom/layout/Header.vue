<!-- 最上方的图片组件 -->
<template>
  <div class="head">
    <div class="right">
      <div class="hword">
        <h3>MAGIC VIDEO</h3>
        <h4>视频帧超分系统</h4>
        <p>基于GAN的视频帧超分系统，</p>
        <p>能够实现对视频帧的超分辨率处理。</p>
      </div>
      <mybutton :word="myword" class="bigbutton"></mybutton>
    </div>
  </div>
</template>

<script>
import mybutton from "../MyButton.vue";

export default {
  name: "HomeHeader",
  data() {
    return {
      myword: "Learn More",
    };
  },
  components: {
    mybutton
  },
};
</script>

<style>
.head {
  width: 100%;
  height: 600px;
  background-color: rgb(237, 240, 243);
  background-image: url(../picture/head.jpg);
  background-position: 1200px 562px;
}

.right {
  width: 40%;
  height: 100%;
  margin: auto;
  text-align: center;
}

.hword {
  display: inline-block;
  width: 100%;
  height: auto;
  margin: 100px auto 40px auto;
  font-size: 20px;
  color: rgb(93, 93, 95);
  text-align: center;
  line-height: 2;
}
.hword h3 {
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 10px;
}

.hword p {
  margin: 0;
  color: rgb(113, 113, 113);
}

.bigbutton {
  display: inline-block;
  width: 200px;
  height: 50px;
  margin: 10px auto;
  border-radius: 10px;
}

.bigbutton a{
  font-size: 24px;
}

.bigbutton:hover {
  width: 240px;
  height: 60px;
  margin: 10px auto;
}


</style>