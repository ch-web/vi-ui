<template>
  <div class="child-page">
    <!--<div @click="opens()" class="apps-po">点击打开浏览图片{{show}}</div>-->
    <div>
      <photo-browser ref="photoBrowser1"></photo-browser>
    </div>
  </div>
</template>
<script>
  import photoBrowser from '@/components/photo-browser/photo-browser.vue'
  export default {
    name: 'Photo-browser',
    data () {
      return {
//          show:false
      }
    },
    methods:{
//     opens(){ this.$refs.photoBrowser1.opens();
//            }

    },
    components: {
      photoBrowser
    }
  }
</script>

<style>
  .apps-po{
    position: absolute;
    top:100px;
    left:0;
  }
</style>
