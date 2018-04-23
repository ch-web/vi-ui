<template>
  <div class="child-page">
    <p>
      <button @click="showToast">打开toast</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Calendar',
    data () {
      return {}
    },
    methods: {
      showToast(){
        this.$toast('带自动关闭的toast')
      }
    }
  }
</script>

<style>
</style>
