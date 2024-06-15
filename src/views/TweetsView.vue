<script setup>
import Navigator from '../components/NavigationBar.vue'
import { ref } from 'vue'

const items = ref([
    { src: new URL('@/assets/user.jpeg', import.meta.url).href, alt: 'Image 1' },
    { src: new URL('@/assets/user.jpeg', import.meta.url).href, alt: 'Image 2' },
    { src: new URL('@/assets/user.jpeg', import.meta.url).href, alt: 'Image 3' },
    { src: new URL('@/assets/user.jpeg', import.meta.url).href, alt: 'Image 4' }
])
</script>

<template>
    <Navigator />
    <el-backtop :right="50" :bottom="50" />
    <div class="carousel-container-top">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item, index) in items" :key="index">
                <img :src="item.src" :alt="item.alt" class="carousel-image" />
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="card_1">
        <el-card class="custom-card" style="max-width: 1000px; flex: 65;" shadow="hover">
            <img src="../assets/user.jpeg" class="hover-zoom" style="width: 100%; height: 300px; object-fit: cover;" />
            <div class="footer-content" style="background-color: #ffffff; text-align: left;">
                <br>
                <p style="font-size: 24px; margin-left: 25px; margin-right: 25px;">我是同济大学施雄博</p><br>
                <p style="font-size: 16px; margin-left: 25px; margin-right: 25px;">
                    想知道更多关于炉管的事情吗？所有文本内容都设置为靠左对齐。你可以根据需要进一步调整样式。
                </p><br><br><br>
            </div>
        </el-card>
        <el-card class="custom-card" style="max-width: 1000px; flex: 35;" shadow="hover">
            <img src="../assets/logo.png" class="hover-zoom"
                style="width: 50%; height: 200px; object-fit: cover; margin-top: 5%; margin-bottom: 25px;" />
            <div class="footer-content" style="background-color: #21a2d9; text-align: left;">
                <br>
                <p style="font-size: 24px; margin-left: 25px; margin-right: 25px; color: white;">我是同济大学邹昕恺</p><br>
                <p style="font-size: 16px; margin-left: 25px; margin-right: 25px; color: white;">
                    想知道更多关于科比的事情吗？所有文本内容都设置为靠左对齐。你可以根据需要进一步调整样式。
                </p><br><br><br><br><br><br>
            </div>
        </el-card>
    </div>
    <div class="card_2">
        <el-card class="custom-card" style="max-width: 1000px; flex: 32;" shadow="hover">
            <img src="../assets/user.jpeg" class="hover-zoom" style="width: 100%; height: 250px; object-fit: cover;" />
            <div class="footer-content" style="background-color: #3453dd; text-align: left;">
                <br>
                <p style="font-size: 24px; margin-left: 25px; margin-right: 25px; color: white;">我是同济大学施雄博</p><br>
                <p style="font-size: 16px; margin-left: 25px; margin-right: 25px; color: white;">
                    想知道更多关于炉管的事情吗？所有文本内容都设置为靠左对齐。你可以根据需要进一步调整样式。
                </p><br><br><br><br><br><br><br>
            </div>
        </el-card>
        <el-card class="custom-card" style="max-width: 1000px; flex: 32;" shadow="hover">
            <img src="../assets/user.jpeg" class="hover-zoom" style="width: 100%; height: 250px; object-fit: cover;" />
            <div class="footer-content" style="background-color: #ffffff; text-align: left;">
                <br>
                <p style="font-size: 24px; margin-left: 25px; margin-right: 25px;">我是同济大学施雄博</p><br>
                <p style="font-size: 16px; margin-left: 25px; margin-right: 25px;">
                    想知道更多关于炉管的事情吗？所有文本内容都设置为靠左对齐。你可以根据需要进一步调整样式。
                </p><br><br><br><br><br><br><br>
            </div>
        </el-card>
        <el-card class="custom-card" style="max-width: 1000px; flex: 35;" shadow="hover">
            <img src="../assets/user.jpeg" class="hover-zoom" style="width: 100%; height: 250px; object-fit: cover;" />
            <div class="footer-content" style="background-color: #ec6b0f; text-align: left;">
                <br>
                <p style="font-size: 24px; margin-left: 25px; margin-right: 25px; color: white;">我是同济大学邹昕恺</p><br>
                <p style="font-size: 16px; margin-left: 25px; margin-right: 25px; color: white;">
                    想知道更多关于科比的事情吗？所有文本内容都设置为靠左对齐。你可以根据需要进一步调整样式。
                </p><br><br><br><br><br><br><br>
            </div>
        </el-card>
    </div>
</template>

<style>
.carousel-container-top {
    margin-top: 105px;
    width: 80vw;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.carousel-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.el-card .el-card__body {
    padding: 0px;
}

/* .card_1 {
    position: absolute;
    top: 440px;
    width: 50vw;
    height: 200px;
} */

.card_1 {
    position: absolute;
    top: 440px;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    height: 500px;
}

.custom-card {
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.1s, transform 0.1s;
}

.custom-card:hover {
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5);
    transform: translateY(-8px);
    cursor: pointer;
}

.footer-content {
    flex-grow: 1;
}

.footer-content p {
    margin: 0;
    font-size: 16px;
}

.card_2 {
    position: absolute;
    top: 970px;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    height: 500px;
}

.hover-zoom {
    transition: transform 0.3s;
}

.hover-zoom:hover {
    transform: scale(1.1);
}
</style>
