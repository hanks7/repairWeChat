// pages/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arryList: ["2aaa",
      "123aaa",
      "12321",
      "aaaaa",
      "aaa12312aa",
      "333",
      "21312",
      "123",
      "aaaaa",
      "千万一百二十三",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "bbbbb"
    ]

  },

  //下拉刷新
  onPullDownRefresh: function(event) {
    wx.showNavigationBarLoading();


    setTimeout(function() {
      console.log("setTimeout");
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 3000);
  },

  //上拉加载更多
  onReachBottom() {
    var arr = this.data.arryList;
    console.log("arr.length");
    console.log(arr.length);

    if (arr.length < 30) {
      for (var i = 0; i < 18; i++) {
        var t = i + "uuuuuu";
        arr.push(t);
      }
      this.setData({
        arryList: arr

      });
    } else {
      wx.showToast({
        title: '没有更多数据了！',

      })
    }
  },
  
  //listview点击事件
  onItemClickListener(event) {
    wx.navigateTo({
      url: "../orderDetail/orderDetail"
    });
  }
})