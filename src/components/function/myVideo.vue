<template>
  <div class="video">
    <video :src="videoSrc" controls="controls" width="580" height="480" poster="@/assets/img/bgc2.png"></video>
    <!-- width="500" height="400" -->
    <input type="file" @change="getBigectURL($event)" id="input" style="display:none" />
    <button class="btn btn-primary" type="button" onclick="document.getElementById('input').click() ">请点击上传视频</button>
  </div>

</template>

<script>
    export default {
        name: "myVideo",
        data() {
            return {
                videoSrc: '',
            }
        },
        methods: {
            getBigectURL(event) {
                console.log('getBigectURL', event)
                var current = event.target.files[0]
                var fileReader = new FileReader()
                fileReader.readAsDataURL(current)
                var that = this
                fileReader.onload = function(e) {
                    that.videoSrc = e.currentTarget.result
                }
            },
        }
    }
</script>

<style scoped>
    button {
        margin-left: 20px;
    }
    
    video {
        background-color: #fff;
    }
</style>