<!-- 因为input的上传按钮，会显示的比较突兀，所以在点击div的时候判断是否存在了上传文件的input，如果没有的话就新建一个上传文件的控件，且隐藏起来，不会占据页面位置，在change的时候将文件的数据获取到并传到页面的img里面，实现类似vue-element的文件上传的效果 //实现代码 -->
<template>
  <div class="alert-box-item-show">
    <div class="bigImg-div-show">
      <img class="bigImg-show" :src=valueUrl v-if="valueUrl">

    </div>
    <button @click="toGetImg" class="btn btn-primary">点击生成图片 </button>
  </div>

</template>

<script>
    let inputElement = null
    export default {
        data() {
            return {
                valueUrl: ''
            }
        },
        methods: {
            toGetImg() {
                if (inputElement === null) {
                    // 生成文件上传的控件
                    inputElement = document.createElement('input')
                    inputElement.setAttribute('type', 'file')
                    inputElement.style.display = 'none'

                    if (window.addEventListener) {
                        inputElement.addEventListener('change', this.uploadFile, false)
                    } else {
                        inputElement.attachEvent('onchange', this.uploadFile)
                    }

                    document.body.appendChild(inputElement)
                }
                inputElement.click()
            },
            uploadFile(el) {
                if (el && el.target && el.target.files && el.target.files.length > 0) {
                    console.log(el)
                    const files = el.target.files[0]
                    const isLt2M = files.size / 1024 / 1024 < 2
                    const size = files.size / 1024 / 1024
                    console.log(size)
                        // 判断上传文件的大小
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!')
                    } else if (files.type.indexOf('image') === -1) { //如果不是图片格式
                        // this.$dialog.toast({ mes: '请选择图片文件' });
                        this.$message.error('请选择图片文件');
                    } else {
                        const that = this;
                        const reader = new FileReader(); // 创建读取文件对象
                        reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
                        reader.onload = function() { // 文件读取完成后
                            // 读取完成后，将结果赋值给img的src
                            that.valueUrl = this.result;
                            console.log(this.result);
                            // 数据传到后台
                            //const formData = new FormData()
                            //formData.append('file', files); // 可以传到后台的数据
                        };
                    }
                }
            }

        },
        beforeUnmount() {
            if (inputElement) {
                if (window.addEventListener) {
                    inputElement.removeEventListener('change', this.onGetLocalFile, false)
                } else {
                    inputElement.detachEvent('onchange', this.onGetLocalFile)
                }
                document.body.removeChild(inputElement)
                inputElement = null
                console.log('========inputelement destroy')
            }
        }
    }
</script>

<style>
    .alert-box-item-show {
        overflow: hidden;
        margin: 0;
    }
    
    .bigImg-div-show {
        width: 700px;
        height: 500px;
        overflow: hidden;
        border: 1px solid #ddd;
        background: url('@/assets/img/show.png') no-repeat center;
    }
    
    .bigImg-show {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>