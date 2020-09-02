// pages/myInfor/myInfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  clickIntentMyorder(event) {   
    wx.navigateTo({
      url: "../myOrder/myOrder"
    });
  },
  clickIntentHistoryOrder(event) {  
    wx.navigateTo({
      url: "../historyOrder/historyOrder"
    });
  },

  clickQuit(event){
    wx.showModal({
      title: '提示',
      content: '是否退出登录',
      success(res) {
        if (res.confirm) {
          //清理某个key的缓存
          wx.removeStorageSync('user_info');
          //下一页没有返回键,当前页销毁
          wx.redirectTo({ url: "../login/login" });
        }  
      }
    })
  }

})