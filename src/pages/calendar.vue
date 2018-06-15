<template>
  <div class="child-page">
    <p>
      日期选择：
      <calendar ref="calendar" :zero="calendar1.zero" :value="calendar.value"
                @select="calendar.select"></calendar>
      <input type="text" @click="showCalendar()" v-model="calendar.display" readonly>
    </p>
    <p>
      日期范围：
      <calendar ref="calendar1" :range="calendar1.range" :zero="calendar1.zero" :value="calendar1.value"
                :optionalMonth="calendar1.optionalMonth" :optionalEnd="calendar1.optionalEnd"
                @confirm="calendar1.confirm" @showCalendar="calendar1.showCalendar"></calendar>
      <input type="text" @click="showCalendar1()" v-model="calendar1.display" readonly>
    </p>
    <p>
      日期时间
      <calendar ref="calendarTime" :optionalBegin="calendarStart.optionalBegin" :zero="calendarStart.zero"
                :showTime="calendarStart.showTime" :value="calendarStart.value"
                @selectTime="calendarStart.select" @initDate="initEndDate"></calendar>
      <input type="text" @click="showCalendarTime()" v-model="calendarStart.display" readonly>
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
          optionalMonth: 3, // 可选月份控制
          optionalEnd: [], // 可选结束日期
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
        },
        // 日期时间选择
        calendarStart: {
          display: '',
          optionalBegin: [],
          zero: true,// 小于10补零
          value: [], //默认日期
          time: [],
          showTime: true,//显示时间
          select: (value) => {
            this.calendarStart.value = value.date;
            this.calendarStart.time = value.time;
            this.calendarStart.display = value.date.join('-') + ' ' + value.time.join(':');
          }
        },
      }
    },
    components: {
      calendar
    },
    created(){
      //获取今天日期
      let now = new Date();
      this.calendar.optionalEnd = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    },
    methods: {
      showCalendar(){
        this.$refs.calendar.showCalendar();
      },
      showCalendar1(){
        this.$refs.calendar1.showCalendar();
      },
      showCalendarTime(){
        this.$refs.calendarTime.showCalendar();
      },
      //初始化结束日期(如果不初始化，选择日期后不选择时间就关闭，第二次进来日期不对）
      initEndDate(value){
        this.calendarStart.value = value;
      },
    }
  }
</script>

<style>

</style>
