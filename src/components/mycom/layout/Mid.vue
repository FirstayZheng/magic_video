<!-- 中间介绍栏 -->
<template>
  <div class="mid">
    <div class="pic">
      <!-- <img src="./picture/mid1.jpg" alt="" /> -->
      <img src="../picture/mid1.jpg" alt="" />
    </div>
    <intro :title="this.title" :message="msg"></intro>
  </div>
</template>

<script>
import intro from "../Intro.vue";

export default {
  name: "MidBox",
  data() {
    return {
      myword: "Have a Try",
      src: "/src/components/mid1.jpg",
      title: "图像超分功能",
      msg: "我们能够将您选择的图片进行超分处理，从而得到清晰的图片。只需要您从本地上传一张喜欢的图片，按照页面提示进行操作，我们就能帮您完成需要的操作。点击下面的按钮，来试一试吧！",
    };
  },

  components: {
    intro,
  },
};
</script>

<style>
.mid {
  width: 100%;
  /* height: 400px; */
  height: auto;
  margin: 20px auto;
  /* background-color: grey; */
  padding-top: 80px;
  display: flex;
  text-align: center;
}
.pic {
  display: inline-block;
  width: 50%;
  height: auto;
  padding-left: 5%;
  /* background-color: pink; */
}
.pic img {
  margin: 20px auto;
  /* text-align:center; */
  /* width: 450px;
    height: auto; */
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgb(91 91 91 / 10%);
  width: 100%;
  height: 400px;
  object-fit: cover;
}

</style>