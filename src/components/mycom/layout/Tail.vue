<template>
  <div class="tail">
    <!-- <div class="intro2">
        <h3>视频超分功能</h3>
        <pword :message="pword"></pword>
        <mybutton :word="myword"></mybutton>
    </div> -->
    <intro :title="this.title" :message="pword"></intro>
    <!-- <pic :mysrc="this.src"></pic> -->
    <div class="pic2">
      <img src="../picture/tail.png" alt="" />
    </div>
  </div>
</template>

<script>
import intro from "../Intro.vue";

export default {
  name: "TailBox",
  data() {
    return {
      myword: "试一试",
      src:"/src/components/tail.png",
      title: "视频超分功能",
      pword:
        "我们还能对视频进行超分处理。通过将视频划分为视频帧，并逐帧进行清晰化，最终串联得到清晰的视频。请注意，您不能上传超过2MB的视频，不然可能会出现异常。点击下方的按钮，快来试试吧！",
    };
  },
  components: {
    intro,
  },
};
</script>

<style>
.tail {
  width: 100%;
  height: auto;
  /* height: 400px; */
  background-color: rgb(235, 235, 235);
  margin: auto;
  /* margin-top: 50px; */
  display: flex;
  /* background-image: url(./backg.png); */
}
.pic2 {
  display: inline-block;
  width: 50%;
  height: auto;
  margin-right: 20px;
  /* background-color: pink; */
}
.pic2 img {
  margin: 60px auto;
  /* text-align:center; */
  /* width: 500px;
    height: auto; */
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgb(91 91 91 / 10%);
  /* height: 100%; */
  object-fit: cover;
}

</style>