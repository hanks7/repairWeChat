// pages/orderDetail/orderDetail.js
var http = require('../../utils/request.js'); //相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: http.host,
    baseImgUrl: http.baseImgUrl,
    isShow:true


  },

  onLoad: function (options) {
    var HospitalApplyID = options.HospitalApplyID;
    var Token=options.Token;
    console.log("HospitalApplyID:" + HospitalApplyID);
    this.setData({
      HospitalApplyID: HospitalApplyID,
      Token:Token
    });

    this.getDetailInfo(this.data.HospitalApplyID);





  },
  onItemClickListener(event) {

    var index = event.currentTarget.dataset.postId;

    wx.previewImage({
      current: this.data.imglist[index], // 默认显示的图片 不写的话,默认集合第1张图片
      urls: this.data.imglist // 需要预览的图片http链接列表
    })
  },

  //点击提交后的事件
  formSubmit: function (e) {
    wx.showNavigationBarLoading();
    console.log('form发生了submit事件，携带数据为：')
    console.log(e)

    var params = { //请求参数
      hospitalApplyID: this.data.HospitalApplyID,
      remark: e.detail.value.remark
    }
    var that = this;
    http.postRequest(http.jobStatus, params, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
      //清空输入框
      that.setData({
        stateContent: ""
      });

      wx.showToast({
        title: "成功",
        icon: 'success',
        duration: 2000,
        complete: function () {
          setTimeout(function () {
            that.getDetailInfo(that.data.HospitalApplyID);
          }, 2400)

        }
      });



    }, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  //js的代码  更新事件
  onPullDownRefresh: function (event) {

    wx.showNavigationBarLoading();
    this.getDetailInfo(this.data.HospitalApplyID);
  },
  //得到详情页信息
  getDetailInfo(HospitalApplyID) {

    var params = {
      hospitalApplyID: HospitalApplyID
    };
    var that = this;
    http.postRequest(http.jobDetail, params, function (data) {

      var myList = new Array();
      for (var index in data.fileList) {

        myList.push(http.baseImgUrl + data.fileList[index].ThumbPath);
      }
      that.setData({
        bean: data,
        imglist: myList,
        stateContent: ""
      });
      console.log("this.data.imglist[0]" + that.data.imglist[0]);
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();

    }, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    });
  },
  clickBtn(event) {
    var params = {
      Token:this.data.Token,
      hospitalApplyID: this.data.HospitalApplyID,
      confirmNum:1,
      remark:""
    };
    var that = this;
    http.postRequest(http.jobConfirm, params, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
      that.setData({
       isShow:false
      });

      wx.showToast({
        title: "成功",
        icon: 'success',
        duration: 2000,
        complete: function () {
          setTimeout(function () {
            that.getDetailInfo(that.data.HospitalApplyID);
          }, 2400)

        }
      });
       
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();

    }, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    });
  }

})