<!-- 介绍优点的组件 -->
<template>
  <div class="box">
    <div class="img">
        <!-- <svg-icon icon-class="home-outline" /> -->
    </div>
    <div class="AdvWord">
        <h3>{{title}}</h3>
        <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        message:String
    }

}
</script>

<style>
.box{
    float: left;
    display: flex;
    width: 40%;
    height: 40%;
    border-radius: 10px;
    border-style: solid;
    border-color: aliceblue;
    border-width: 4px;
    margin: 10px 40px;
}

.img{
    /* float: left; */
    width: 40%;
    height: auto;
    /* padding-bottom: 50%; */
    background-color: white;
}

.AdvWord{
    width: 60%;
    height: auto;
    /* background-color: pink; */
    margin: 10px 10px;
    text-align: left;
}

.AdvWord h3{
    margin-bottom: 5px;
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