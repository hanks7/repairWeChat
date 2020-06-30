// pages/myOrder.js
var http = require('../../utils/request.js'); //相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    result: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userInfo = wx.getStorageSync('user_info');
    console.log("userInfo");
    console.log(userInfo);

    this.setData({
      userInfo: userInfo
    })

    this.httpFirst();
  },

  //下拉刷新
  onPullDownRefresh: function(event) {
    this.httpFirst();

  },

  //下拉刷新的网络请求
  httpFirst: function() {
    wx.showNavigationBarLoading();

    this.setData({
      pageIndex: 1
    })
    var params = { //请求参数
      token: this.data.userInfo.Token,
      pageIndex: 1,
      pageSize: 10,
      type: 0
    }
    var that = this;
    http.postRequest(http.jobListUrl, params, function(data) {



      that.setData({
        result: data
      });
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })

  },

  //上拉加载更多
  onReachBottom() {
    var arr = this.data.result.list;
    console.log("arr.length");
    console.log(arr.length);


    wx.showNavigationBarLoading();

    var i = this.data.pageIndex++
      this.setData({
        pageIndex: i
      })
    var params = { //请求参数
      token: this.data.userInfo.Token,
      pageIndex: 1,
      pageSize: 10,
      type: 0
    }
    var that = this;
    http.postRequest(http.jobListUrl, params, function(data) {

      that.data.result.list.push(data.list);

      that.setData({
        result: that.data.result
      });
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })




    // if (arr.length < 30) {
    //   for (var i = 0; i < 18; i++) {
    //     var t = i + "uuuuuu";
    //     arr.push(t);
    //   }
    //   this.setData({
    //     arryList: arr

    //   });
    // } else {
    //   wx.showToast({
    //     title: '没有更多数据了！',

    //   })
    // }
  },

  //listview点击事件
  onItemClickListener(event) {
    wx.navigateTo({
      url: "../orderDetail/orderDetail"
    });
  }
})