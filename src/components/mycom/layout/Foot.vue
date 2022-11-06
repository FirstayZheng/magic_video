<!-- 最底端介绍栏 -->
<template>
  <div class="foot">
    <h2>ABOUT US</h2>
    <div class="advs">
      <div class="box">
        <div class="img">
          <!-- <svg-icon data-iconName="home-outline" className="homeSvg" /> -->
          <img src="@/SvgIcon/svg/security.png" alt="">
        </div>
        <div class="AdvWord">
          <h3>安全性</h3>
          <p>您的图像只在本地上传，生成的图片将直接保存回本地，不会有外泄的风险。</p>
        </div>
      </div>
      <div class="box">
        <div class="img">
          <!-- <svg-icon icon-class="home-outline" /> -->
          <img src="@/SvgIcon/svg/picicon.png" alt="">
        </div>
        <div class="AdvWord">
          <h3>图像清晰</h3>
          <p>具有清晰化图像的功能，同时能够通过划分视频帧的方式处理视频，将视频清晰化。</p>
        </div>
      </div>
      <div class="box">
        <div class="img">
          <!-- <svg-icon icon-class="home-outline" /> -->
          <img src="@/SvgIcon/svg/rocky.png" alt="">
        </div>
        <div class="AdvWord">
          <h3>处理迅速</h3>
          <p>我们使用的算法能够迅速地对图像进行处理，您不需要等待很长时间。</p>
        </div>
      </div>
      <div class="box">
        <div class="img">
          <!-- <svg-icon icon-class="home-outline" /> -->
          <img src="@/SvgIcon/svg/set.png" alt="">
        </div>
        <div class="AdvWord">
          <h3>交互性</h3>
          <p>您能够直接根据页面提示选择需要进行的操作，具有良好的交互性。</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "FootBox",
  components: {
  },
};
</script>

<style>
.foot {
  margin: 40px 0;
  /* background-color: rgb(240, 245, 255); */
  height: auto;
}

.foot h2 {
  margin: 10px auto;
  padding: 10px;
  text-align: center;
}

.advs {
  width: 80%;
  height: 540px;
  padding: 0 20px;
  margin: auto;
}

.box{
    float: left;
    display: flex;
    width: 40%;
    height: 40%;
    border-radius: 10px;
    border-style: solid;
    border-color: aliceblue;
    border-width: 4px;
    margin: 20px 40px;
}

.img{
    /* float: left; */
    width: auto;
    height: auto;
    /* padding-bottom: 50%; */
    background-color: white;
}

.img img{
    width: 100px;
    margin: 20px 10px 20px 20px;
}

.homeSvg{
    width: 100px;
    margin: 20px 10px 20px 20px;
}

.AdvWord{
    width: 60%;
    height: auto;
    /* background-color: pink; */
    margin: 10px 10px;
    text-align: left;
}

.AdvWord h3{
    margin: 10px 0;
    color: #2f353e;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    letter-spacing: -0.75px;
    font-size: 1.5rem
}

.AdvWord p{
    font-family: 'Rubik', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #6c757d;
    line-height: 1.6666;
    font-weight: 400;
}
</style>