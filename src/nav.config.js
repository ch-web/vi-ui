// 页面配置文件
export default {
  comp: [
    {
      "title": "组件",
      "list": [
        { // 日历组件
          "path": "/calendar",
          "name": "Calendar"
        }, { // 下拉刷新组件
          "path": "/pull-to-refresh",
          "name": "Pull To Refresh"
        }, { // toast组件
          "path": "/toast",
          "name": "Toast"
        },
      ]
    }
  ],
  otherComp: [
    {
      "title": "第三方组件",
      "list": [
        { // 加载更多
          "path": "https://peachscript.github.io/vue-infinite-loading/#!/",
          "name": "无限滚动加载更多"
        }
      ]
    },
  ]
}
