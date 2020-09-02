// pages/companyOrder/companyOrder.js
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
   * 当前加载页数
   */
  i: 1,

  /**
   * 是否还有更多
   */
  hasMore: true,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('user_info');
    console.log("userInfo");
    console.log(userInfo);

    this.setData({
      userInfo: userInfo,

    })

    this.httpFirst();
  },

  //下拉刷新
  onPullDownRefresh: function (event) {
    this.httpFirst();

  },

  //下拉刷新的网络请求
  httpFirst: function () {
    wx.showNavigationBarLoading();
    this.i = 1

    var params = { //请求参数
      token: this.data.userInfo.Token,
      pageIndex: this.i,
      pageSize: 10,
      type: 4//0 所有工单 ,1 医院工单,   2 企业工单, 3 获取所有待确认的工单 4 历史订单
      
     
      
    }
    var that = this;
    http.postRequest(http.jobListUrl, params, function (data) {

      if (data.list.length < 10) {

        that.hasMore = false;

      } else {
        that.hasMore = true;
      }

      if (data.list.length <= 0) {
        data.showEmptyView = true;
        data.showEmptyText = "没有工单";
      }

      that.setData({
        result: data
      });
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();


    }, function (data) {
      that.setData({
        result: {
          showEmptyView: true,
          showEmptyText: data
        }
      })
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })

  },

  //上拉加载更多
  onReachBottom() {
    if (!this.hasMore) {
      wx.showToast({
        title: '没有更多数据了！',
      })
      return;
    }
    var arr = this.data.result.list;
    console.log("arr.length");
    console.log(arr.length);


    wx.showNavigationBarLoading();

    this.i++;


    console.log("this.i  : " + this.i);
    var params = { //请求参数
      token: this.data.userInfo.Token,
      pageIndex: this.i,
      pageSize: 10,
      type: 0
    }
    var that = this;
    http.postRequest(http.jobListUrl, params, function (data) {
      if (data.list.length < 10) {

        that.hasMore = false;
        wx.showToast({
          title: '没有更多数据了！',
        })
      }

      var ttt = that.data.result.list.concat(data.list);
      that.data.result.list = ttt;

      that.setData({
        result: that.data.result
      });
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, function (data) {
      that.i--;
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })





  },

  //listview点击事件
  onItemClickListener(event) {
    var index = event.currentTarget.dataset.i;
  
    var HospitalApplyID = this.data.result.list[index].HospitalApplyID;
 
    wx.navigateTo({
      url: "../orderDetail/orderDetail?HospitalApplyID=" + HospitalApplyID
    });
  }
})