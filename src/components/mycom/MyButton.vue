<template>
  <!-- <button class="mybtn" @click="gotolink" >{{word}}</button> -->
  <div class="mybtn">
    <router-link to="/about">{{ word }}</router-link>
</div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    word: String,
  },

};
</script>

<style>
.mybtn {
  width: 150px;
  height: 50px;
  margin: 20px auto;
  font-size: 18px;
  background-color: rgb(230, 135, 32);
  border-radius: 8px;
  text-align: center;
  border: none;
}

.mybtn a {
  display: inline-block;
  line-height: 50px;
  width: 150px;
  height: 50px; 
  text-decoration: none;
  color: #fff;
}

.mybtn:hover {
  width: 170px;
  height: 60px;
  font-size: 22px;
  line-height: 60px;
  color: #fff;
  margin: 15px auto;
  background-color: rgb(240, 168, 90);
}

.mybtn a:hover{
  color: #fff;
}


</style>