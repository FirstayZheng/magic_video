<template>
  <Header></Header>
  <mid></mid>
  <tail></tail>
  <foot></foot>
</template>

<script>
import Header from './mycom/layout/Header.vue'
import mid from './mycom/layout/Mid.vue'
import tail from './mycom/layout/Tail.vue'
import foot from './mycom/layout/Foot.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    mid,
    tail,
    foot
  },
  data(){
    return{
      msg:'这是一段介绍，我就十亿以上'
    }
  }
}
</script>
