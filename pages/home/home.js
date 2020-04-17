Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "所有工单",
      "我的工单"
    ],
    dataList: [
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "bbbbb"
    ]
  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function(event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  /**
   * 
   */
  onBindAnimationFinish: function( detail ) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  },

  onReachBottom() {
    var arr = this.data.dataList;
    if (this.data.dataList.count > 13) {
      for (var i = 0; i <8; i++) {
        var t=i+"uuuuuu";
        arr.push(t);
      }
      this.setData({
        dataList: arr
         
      });
    } else {
      wx.showToast({
        title: '没有更多数据了！',
        image: '../../src/images/noData.png',
      })
    }
  }


})