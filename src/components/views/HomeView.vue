<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Home></Home>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Home from '@/components/Home.vue'


    export default {
        name: 'HomeView',
        components: {
            Home
        }
    }
</script>