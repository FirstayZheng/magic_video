<template>

  <section class="categories">
    <div class="container_fluid">



      <div class="row">
        <div class="col-lg-6 p-0">
          <div class="categories_item categories_large_item">
            <!-- <img class="img-fluid" src="@/assets/logo.png" alt=""> -->
            <div class="img-upload" style="z-index: 100; ">
              <Pic></Pic>
            </div>
            <div class="categories_text">
              <!-- <h1></h1>
              <p> </p>
              <a href="#"></a> -->
            </div>

          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 p-0">
              <div class="categories_item">
                <img class="img-fluid" src="@/assets/img/pic1.jpeg" alt="">
              </div>
              <div class="categories_text_1">
                <h4>Kids Transform</h4>
                <p>358 likes</p>
                <a href="#">Try now</a>
              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-12 p-0">
              <div class="categories_item">
                <img class="img-fluid" src="@/assets/img/pic2.jpeg" alt="">
              </div>
              <div class="categories_text_2">
                <h4>Girl's fashion</h4>
                <p>273 likes</p>
                <a href="#">Try now</a>
              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-12 p-0">
              <div class="categories_item">
                <img class="img-fluid" src="@/assets/img/pic3.jpeg" alt="">
              </div>
              <div class="categories_text_3">
                <h4>Magic </h4>
                <p>289 likes</p>
                <a href="#">Try now</a>
              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-12 p-0">
              <div class="categories_item">
                <img class="img-fluid" src="@/assets/img/pic4.jpeg" alt="">
              </div>
              <div class="categories_text_4">
                <h4>Cool Boy</h4>
                <p>792 likes</p>
                <a href="#">Try now</a>
              </div>

            </div>



          </div>

        </div>

      </div>
    </div>

  </section>
  <section class="video_container">
    <div class="row">
      <!-- 分割标题 -->
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h4>Video Processing</h4>
        </div>
      </div>

    </div>

    <div class="row">
      <!-- 上传视频 -->
      <div class="col-lg-6 p-0">
        <div class="video_upload">
          <Video></Video>
        </div>
      </div>
      <!-- 生成图片 -->
      <div class="col-lg-6">
        <div class="pic-generation">
          <Show></Show>
        </div>
      </div>
    </div>
  </section>
  <section class="video_container">
    <div class="row">
      <!-- 分割标题 -->
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h4>Sample Show</h4>
        </div>
      </div>

    </div>

    <div class="row">
      <!-- 轮播图 -->
      <div class="col-lg-6 p-0">
        <div class="video_upload">
          <Carousel></Carousel>
        </div>
      </div>
      <!-- 右侧文字 -->
      <div class="col-lg-6">
        <div class="introduction">
          <h1>
            <span>Remove Video</span>
            <span>Backgrounds</span>
          </h1>
          <p>Instantly remove the background from
            <br> any piece of
            content, including video,<br>
            with just a few clicks. </p>
          <a href="#">Start creating now</a>
        </div>
      </div>
    </div>
  </section>


  <component :is='name'></component>
</template>


<script>
    import Video from "@/components/function/myVideo.vue"
    // import Pic from "@/components/function/PicUpload.Vue"
    import Pic from "/src/components/function/PicUpload.vue"
    import Carousel from '/src/components/function/myCarousel.vue'
    import Show from "/src/components/function/ShowPic.vue"
    export default {
        name: 'AboutView',
        components: {
            Video,
            Pic,
            Carousel,
            Show
        }
    }
</script>

<style>
    .img-fluid {
        width: 115%;
        height: 95%;
    }
    
    .img-upload {
        margin-top: 5px;
        margin-left: 100px;
    }
    
    .categories {
        position: relative;
        overflow: hidden;
        height: 545px;
        background-color: #eee;
    }
    
    .categories .categories_item {
        position: relative;
        height: 260px;
        display: flex;
        margin-bottom: 5px;
    }
    
    .categories .categories_large_item {
        height: 525px;
    }
    /* 图片中文本 */
    
    .categories .categories_text_1 {
        /* 文字显示在上层 */
        z-index: 99;
        position: absolute;
        left: 51%;
        top: 20%;
    }
    
    .categories .categories_text_2 {
        /* 文字显示在上层 */
        z-index: 99;
        position: absolute;
        left: 76%;
        top: 20%;
    }
    
    .categories .categories_text_3 {
        /* 文字显示在上层 */
        z-index: 99;
        position: absolute;
        left: 51%;
        top: 70%;
    }
    
    .categories .categories_text_4 {
        /* 文字显示在上层 */
        z-index: 99;
        position: absolute;
        left: 76%;
        top: 70%;
    }
    /* .categories .categories_large_item .categories_text {
        position: absolute;
        left: 50px;
        max-width: 200px;
    }
    
    .categories .categories_large_item .categories_text p {
        margin-bottom: 15px;
    } */
    
    .categories h1 {
        color: #000;
        margin-bottom: 5px;
    }
    
    .categories h4 {
        color: #000;
        font-size: 20px;
        font-weight: 600;
    }
    
    .categories p {
        margin-bottom: 10px;
    }
    
    .categories a {
        font-size: 14px;
        color: #000;
        text-transform: uppercase;
        font-weight: 600;
        position: relative;
        padding: 0 0 3px;
        display: inline-block;
        text-decoration: none;
        outline: none;
    }
    
    .categories a:after {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: #ff7200;
        content: '';
    }
    
    .video_container {
        /* 去除出现的水平滚动条 */
        overflow-x: hidden;
        padding-top: 100px;
        padding-bottom: 150px;
        background-color: #e5e5e5;
    }
    
    .video_container .section-title {
        margin-bottom: 25px;
    }
    
    .video_container .section-title h4 {
        columns: #000;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        display: inline-block;
    }
    
    .video_container .section-title h4:after {
        position: absolute;
        content: '';
        left: 0;
        bottom: -4px;
        height: 2px;
        width: 70px;
        background-color: #ca1515;
    }
    
    .video_upload {
        margin-top: 80px;
    }
    
    .pic-generation {
        margin-top: 80px;
    }
    /* 文字部分 */
    
    .introduction {
        margin-top: 100px;
        margin-right: 100px;
    }
    
    .introduction h1 {
        color: #000;
        font: 48px Roobert, sans-serif;
        font-weight: 700;
        margin: 0 0 40px;
        ;
    }
    
    .introduction h1 span {
        display: inline-block;
    }
    
    .introduction p {
        font: 24px Roobert, sans-serif;
        line-height: 40px;
    }
    
    .introduction a {
        text-decoration: none;
        font: 24px Roobert, sans-serif;
        color: #000;
        font-weight: 600;
    }
    
    .introduction a:hover {
        text-decoration: underline;
        color: #000;
    }
</style>