<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
                <a class="js-no-follow" :href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.image">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template> 



<style>
    .swiper-container{}
</style>


<script>
    import Swiper from "swiper"
    import 'swiper/dist/css/swiper.css'


    export default {
        name:'swiper',
        props:{
            lists:{
                required: true
            }
        },
        mounted(){
            new Swiper('.swiper-container',{
                autoplay : true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true},
            })
        }
    }
</script>
