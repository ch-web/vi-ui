<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    background-color: #f1f1f1;
    height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  .child-page{
    padding: 0 20px;
  }
</style>
