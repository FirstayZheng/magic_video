<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <!-- lg 大号 3/12 logo-->
        <div class="col-lg-3">
          <div class="header_logo">
            <a href="#"><span>Magic</span>Video</a>
          </div>
        </div>

        <!--  6/12 nav-->
        <div class="col-lg-6">
          <nav class="header_menu">
            <ul>
              <li class="active"><a href="#">
                  <router-link to="/">Home</router-link>
                </a></li>
              <li><a href="#">
                  <router-link to="/about">About</router-link>
                </a></li>
              <li><a href="#">Our's</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

        <!-- col-lg-3 顶部右侧 -->
        <div class="col-lg-3">
          <div class="header_right">
            <div class="header_right_auth">
              <a href="#">Login</a>
              <a href="#">Register</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </header>

</template>

<script>
    export default {
        name: "myHeader",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    a,
    a:hover a:focus {
        text-decoration: none;
        outline: none;
    }
    
    li {
        list-style: none;
        display: inline-block;
    }
    
    .header {
        margin-top: 15px;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        line-height: 60px;
        box-shadow: 0px 5px 10px rgba(91, 91, 91, .1);
    }
    /* 左侧图标 magic video */
    
    .header_logo {
        /* padding: 0 auto; */
        margin-top: -15px;
        text-align: center;
    }
    
    .header_logo a {
        display: inline-block;
        color: #000;
        font-size: 27px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 3px;
    }
    
    .header_logo a span {
        color: #ff8900;
        font-size: 30px;
    }
    /* 中间菜单栏 */
    
    .header_menu {
        margin-top: -15px;
        text-align: center;
    }
    
    .header_menu ul li {
        position: relative;
        display: inline-block;
        margin-right: 40px;
    }
    
    .header_menu ul li a {
        color: #000;
        font-size: 17px;
        font-weight: 500;
        padding: 2px 0;
        position: relative;
    }
    
    .header_menu ul li a:after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #ff7200;
        transition: all 0.5s;
        transform: scale(0);
    }
    
    .header_menu ul li:hover a:after {
        transform: scale(1);
    }
    /* 当前所在home设置黄色下划线
    
    .header_menu ul li.active a:after {
        transform: scale(1);
    }
    
    .header_menu ul li:last-child {
        margin-right: 0;
    } */
    /* 右侧登陆 */
    
    .header_right {
        text-align: center;
        margin: -15px;
    }
    
    .header_right .header_right_auth {
        display: inline-block;
        margin-right: 25px;
    }
    
    .header_right .header_right_auth a {
        font-size: 17px;
        color: #666;
        position: relative;
        margin-right: 15px;
        text-decoration: none;
        outline: none;
    }
    
    .header_right .header_right_auth a:last-child {
        margin-right: 0;
    }
    
    .header_right .header_right_auth a:after {
        position: absolute;
        right: -10px;
        top: -18px;
        content: '/';
        font-size: 16px;
    }
    
    .header_right .header_right_auth a:last-child:after {
        display: none;
    }
</style>