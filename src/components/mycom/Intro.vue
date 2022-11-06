<template>
  <div class="intro">
    <h3>{{title}}</h3>
    <p>{{ message }}</p>
    <mybutton :word="buttonword" @click="gotolink"></mybutton>
  </div>
</template>

<script>
import mybutton from './MyButton.vue'

export default {
  name: "IntroPart",
  props: {
    title:String,
    message: String,
  },
  data(){
    return{
      buttonword:"Have a Try"
    }
  },
  components:{
    mybutton
  }
};
</script>

<style>
.intro{
    display: inline-block;
    width: 50%;
    height: auto;
    /* padding: 45px 0; */
    /* background-color: yellow; */
    text-align: left;
    padding: 4%;
}

.intro h3{
  margin: 50px 40px 10px 45px;
    font-size: 28px;
    font-weight: normal;
    color: #373737;
    line-height: 1.5;
}

.intro p {
  margin: 0 70px 0 45px;
  padding: 10px 0;
  font-size: 20px;
  color: rgb(134, 116, 111);
  line-height: 1.5;
}
</style>