<template>
  <div>
    <p>
      日期选择：
      <calendar ref="calendar" :zero="calendar1.zero" :value="calendar.value" :show="calendar.show"
                @select="calendar.select"></calendar>
      <input type="text" @click="showCalendar()" v-model="calendar.display" readonly>
    </p>
    <p>
      日期范围：
      <calendar ref="calendar1" :range="calendar1.range" :zero="calendar1.zero" :value="calendar1.value"
                :show="calendar1.show" @confirm="calendar1.confirm" @showCalendar="calendar1.showCalendar"></calendar>
      <input type="text" @click="showCalendar1()" v-model="calendar1.display" readonly>
    </p>
  </div>
</template>

<script>
  import calendar from '@/components/calendar/calendar.vue'
  export default {
    name: 'Calendar',
    data () {
      return {
        // 日期选择
        calendar: {
          display: '',
          zero: true,// 小于10补零
          value: [], //默认日期
          select: (value) => {
            this.calendar.value = value;
            this.calendar.display = value.join('/');
          }
        },
        // 日期范围
        calendar1: {
          display: '',
          range: true,// 范围模式
          zero: true,// 小于10补零
          value: [], //默认日期
          confirm: (begin, end) => { // 确定
            if (begin.length != 0 || end.length != 0) {
              this.calendar1.value = [begin, end];
              this.calendar1.display = begin.join('/') + ' ~ ' + end.join('/')
            } else {
              this.calendar1.display = '';
            }
          },
          // 处理值回选
          showCalendar: () => {
            if (!this.calendar1.display) return;
            this.calendar1.value = [this.calendar1.value[0], this.calendar1.value[1]];
          }
        }
      }
    },
    components: {
      calendar
    },
    methods: {
      showCalendar(){
        this.$refs.calendar.showCalendar();
      },
      showCalendar1(){
        this.$refs.calendar1.showCalendar();
      }
    }
  }
</script>

<style>

</style>
