<template>
  <div class='footer-container'>
    <div class="footer">

      <p>Copyright 2022, Magic</p>
    </div>
  </div>
</template>


<script>
    export default {
        name: 'FooterView',
    }
</script>

<style lang='less' scoped>
    .footer {
        text-align: center;
    }
    
    .footer hr {
        background: #999;
        height: 1px;
        width: 100%;
        border: 0;
    }
    
    .footer p {
        margin-top: 20px;
        padding-bottom: 15px;
    }
</style>