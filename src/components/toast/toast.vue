<template>
  <div class="lx-toast" :class="'lx-toast-'+position" v-if="show">
    {{content}}
  </div>
</template>
<script>
  export default{
    data(){
      return {
        show: false,
        content: "",
        position: "center"
      }
    }
  }
</script>
<style scoped>
  .lx-toast {
    position: fixed;
    bottom: 100px;
    left: 50%;
    box-sizing: border-box;
    max-width: 80%;
    padding: 10px;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    text-align: center;
    z-index: 9999;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
  }

  .lx-toast.lx-toast-center {
    top: 50%;
    margin-top: -20px;
    bottom: inherit;
  }

</style>
