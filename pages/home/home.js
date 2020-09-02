// pages/myOrder.js
var http = require('../../utils/request.js'); //相对路径   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  
  clickIntentAllOrder:function(event) {
    wx.navigateTo({
      url: "../allOrder/allOrder"
    });
  },
  clickIntentMyorder:function(event) {
    wx.navigateTo({
      url: "../myOrder/myOrder"
    });
  },
  clickIntentCompanyOrder(event) {
    wx.navigateTo({
      url: "../companyOrder/companyOrder"
    });
  },
  clickIntentHospitalOrder(event) {
    wx.navigateTo({
      url: "../hospitalOrder/hospitalOrder"
    });
  },
  clickIntentConfirmedorder(event) {
    wx.navigateTo({
      url: "../confirmedorder/confirmedorder"
    });
  },

   
})