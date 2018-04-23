<template>
  <div>
    <div class="block-title">组件</div>
    <div class="list">
      <ul>
        <li>
          <router-link class="item-content item-link" :to="'/calendar'">
            <div class="item-inner">
              <div class="item-title">Calendar</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .block-title {
    position: relative;
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    color: #6d6d72;
    margin: 35px 15px 10px;
  }
  .list {
    margin-top: 10px;
    position: relative;
    z-index: 1;
  }
  .list ul {
    background: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
  .list ul:before {
    content: '';
    position: absolute;
    background-color: #c8c7cc;
    display: block;
    z-index: 15;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    height: 1px;
    width: 100%;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  .list ul:after {
    content: '';
    position: absolute;
    background-color: #c8c7cc;
    display: block;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  .list li {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .list .item-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 44px;
    padding-left: 15px;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-property: background-color;
    transition-property: background-color;
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  .list .item-link {
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-property: background-color;
    transition-property: background-color;
    display: block;
    position: relative;
    overflow: hidden;
    z-index: 0;
    color: inherit;
  }
  .list .item-inner {
    position: relative;
    width: 100%;
    min-height: 44px;
    padding-top: 8px;
    padding-bottom: 8px;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    background-position: calc(100% - 15px) center;
  }
  .list .item-inner:after {
    content: '';
    position: absolute;
    background-color: #c8c7cc;
    display: block;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  .links-list a,.list .item-link .item-inner,.media-list .item-link .item-title-row,li.media-item .item-link .item-title-row {
    background-size: 8px 13px;
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'8px'%20height%3D'13px'%20viewBox%3D'0%200%208%2013'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpolygon%20fill%3D'%23c7c7cc'%20transform%3D'translate(1.500000%2C%206.500000)%20rotate(-45.000000)%20translate(-1.500000%2C%20-6.500000)%20'%20points%3D'6%2011%206%202%204%202%204%209%20-3%209%20-3%2011%205%2011'%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E");
  }
  .list .item-title {
    min-width: 0;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
</style>
