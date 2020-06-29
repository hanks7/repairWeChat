// pages/login/login.js
var http = require('../../utils/request.js'); //相对路径
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
   
  },
  
  intentPage: function() {
    wx.switchTab({
      url: "../home/home"
    });
  },
  formSubmit: function(e) {
    if (!e.detail.value.no) {
      wx.showToast({
        title: "请输入账号",
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!e.detail.value.pwd) {
      wx.showToast({
        title: "请输入密码",
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.showLoading({
      title: '登录中...',
    });

    // this.httpPost(e);

    var params = {//请求参数
      loginName: e.detail.value.no,
      passWord: e.detail.value.pwd
    }
    http.postRequest(http.loginUrl, params, function (data) {
      wx.setStorageSync('user_info',  data);
      wx.showToast({
        title: "登录成功",
        icon: 'success',
        duration: 2000
      })
      wx.switchTab({
        url: '../home/home',
      })
      
    }, function (res) {
      console.log("修改失败！！！")
    })
  
  },
/**
 * 这个方法暂时没有用了
 */
httpPost:function(e){
  wx.request({
    url: app.url.login, //仅为示例，并非真实的接口地址

    data: {
      loginName: e.detail.value.no,
      passWord: e.detail.value.pwd
    },
    method: 'POST',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      console.log("----data");
      console.log(res.data);
      if (res.statusCode == 200) {
        if (res.data.code == 200) {

          wx.setStorageSync('user_info', res.data.data);
          wx.showToast({
            title: "登录成功",
            icon: 'success',
            duration: 2000
          })
          wx.switchTab({
            url: '../home/home',
          })
        } else {
          wx.showToast({
            title: res.data.msg ? res.data.msg : "",
            icon: 'none',
            duration: 2000
          })
        }
      } else {
        wx.showToast({
          title: '服务器出现错误',
          icon: 'none',
          duration: 2000
        })
      }
    }
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     
    var userInfo = wx.getStorageSync('user_info');
   
    if (typeof (userInfo) == 'object' && userInfo.LoginName != '') {
      wx.switchTab({
        url: '../home/home',
      })
    }
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

  }
})