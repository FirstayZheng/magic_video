<template>


  <el-container class="home_container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>



  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</nav> -->
  <!-- <router-view /> -->
</template>

<script>
    import Header from './components/header/myHeader.vue'
    import Footer from './components/views/FooterView.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Footer,
        }
    }
</script>
<style>
    /* #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    } */
    /* nav {
        padding: 30px; */
    /* background-color: #ff7200; */
    /* height: 100%;
    } */
    /* nav a {
        font-weight: bold;
        color: #2c3e50;
    } */
    /* nav a.router-link-exact-active {
        color: #42b983;
    } */
    
    .home_container {
        /* 给头部设置一下弹性布局 */
        display: flex;
        /* 让它贴标左右对齐 */
        justify-content: space-between;
        /* 清空图片左侧padding */
        padding: 0;
        margin: 0;
        /* 按钮居中 */
        align-items: center;
        /* 文本颜色 */
        /* color: #fff; */
        /* 设置文本字体大小 */
        font-size: 20px;
    }
    
    .el-header {
        width: 100%;
        margin-bottom: 80px;
        /* 使标题占满整个顶部 */
        padding: 0 !important;
    }
    
    .el-main {
        margin: 0 40px;
        /* background-color: #eee; */
        padding: 0 !important;
        margin: 0 !important;
    }
    
    .el-footer {
        width: 100%;
        /* background-color: rgb(209, 206, 206); */
        padding: 0 !important;
        margin: 0 !important;
    }
</style>