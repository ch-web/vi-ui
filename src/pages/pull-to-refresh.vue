<template>
  <div class="height-inherit">
    <pull-to-refresh :on-refresh="onRefresh">
      <div class="content">
        下拉刷新数据（{{num}}）
      </div>
    </pull-to-refresh>
  </div>
</template>

<script>
  import pullToRefresh from '@/components/pull-to-refresh/pull-to-refresh.vue'
  const Promise = require("bluebird");// 兼容浏览器
  export default {
    name: 'PullToRefresh',
    data () {
      return {
        num: 0
      }
    },
    components: {
      'pull-to-refresh': pullToRefresh
    },
    methods: {
      onRefresh(){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.num++;
            Math.random() < 0.5 ? resolve() : reject();
          }, 1000);
        });
      }
    }
  }
</script>

<style scoped>
  .content {
    text-align: center;
    padding-top: 50px;
  }
</style>
