<template>
  <div class="photo-browser">
    <div class="photo-view">
      <div class="photo-nav">
        <div class="photo-nav-item text-align-l">
          <span @click="close">关闭</span></div>
      </div>
      <div class="page">
        <div class="swiper appszx-swiper">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="items in slides" :key="items.id">
              <span class="swiper-zoom-container">
              <img :src="items.url"/>
              </span>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import aa from "@/assets/photo-browser/aa.jpg";
  import bb from "@/assets/photo-browser/bb.jpg";
  import cc from "@/assets/photo-browser/cc.jpg";
  import dd from "@/assets/photo-browser/dd.jpg";
  import kk from "@/assets/photo-browser/kk.jpg";
  import uu from "@/assets/photo-browser/uu.jpg";
  export default{
    data(){
      return {
        psb: null,
        slides: [{id: 1, url: aa},
          {id: 2, url: bb},
          {id: 3, url: cc},
          {id: 4, url: kk},
          {id: 5, url: uu},
          {id: 6, url: dd}
        ],
        swiperOption: {
          pagination: {
              el:'.swiper-pagination',
              type:'fraction'
          },
          zoom:true
        }
      }
    },
    methods: {
      //关闭
      close(){
        this.$router.back(-1);
      },
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    }
  }
</script>
<style>
  .photo-browser {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10500;
    background-color: #000;
    /*opacity: 0;*/
    /*display: none;*/
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .photo-view {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 5000;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .photo-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: 500;
  }

  .photo-nav-item {
    display: inline-block;
    width: 33.333333%;
    text-align: center;
    font-size: 14px;
    color: #fff;
    padding: 10px;
  }

  .text-align-l {
    text-align: left !important;
  }

  .page {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .appszx-swiper .swiper-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
  }

  .appszx-swiper .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .appszx-swiper .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .appszx-swiper .swiper-pagination-fraction {
    top: 10px;
    color: #fff;
  }

  .appszx-swiper span.photo-browser-zoom-container {
    width: 100%;
    text-align: center;
    display: none;
  }

  .appszx-swiper img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: none;
  }

  .appszx-swiper .swiper-slide-active span.photo-browser-zoom-container,
  .appszx-swiper .swiper-slide-next span.photo-browser-zoom-container,
  .appszx-swiper .swiper-slide-prev span.photo-browser-zoom-container {
    display: block;
  }

  .appszx-swiper .swiper-slide-active img,
  .appszx-swiper .swiper-slide-next img,
  .appszx-swiper .swiper-slide-prev img {
    display: inline;
  }

  .appszx-swiper .swiper-pagination {
    position: absolute;
    top: 0;
    left: 0;
    height: 34px;
    padding-top: 10px;
    background-color: rgba(30, 30, 30, .8);
  }
</style>

