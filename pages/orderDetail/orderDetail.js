// pages/orderDetail/orderDetail.js
var http = require('../../utils/request.js'); //相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imglist: ["http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"],
    axis: [{
        time: '2020年4月22日',
        name: 'name',
        event: '维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态'
      },
      {
        time: '2020年4月22日',
        name: 'name',
        event: '维修状态'
      },
      {
        time: '2020年4月22日',
        name: 'name',
        event: '维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态维修状态'
      },
      {
        time: '2020年4月22日',
        name: 'name',
        event: '维修状态'
      },

    ],

    host: http.host,
    baseImgUrl: http.baseImgUrl,
    bean: {
      "code": "200",
      "msg": "",
      "data": {
        "CauseContent": "WXSQ202006090001",
        "RequisitionNo": "2230",
        "UrgentType": "12351",
        "fileList": [{
          "FileName": "0018EUjnzy7mG1UaMoG4a.gif",
          "HospitalApplyDetailID": "0020200609000000011F",
          "ThumbPath": "0020200609000000011F.gif",
          "Path": "0020200609000000011F.gif",
          "CreateTime": "2020-06-09 13:44:20.490",
          "Title": "0018EUjnzy7mG1UaMoG4a.gif"
        }, {
          "FileName": "0018EUjnzy7mG1UaMoG4a.gif",
          "HospitalApplyDetailID": "0020200609000000011F",
          "ThumbPath": "0020200609000000011F.gif",
          "Path": "0020200609000000011F.gif",
          "CreateTime": "2020-06-09 13:44:20.490",
          "Title": "0018EUjnzy7mG1UaMoG4a.gif"
        }, {
          "FileName": "0018EUjnzy7mG1UaMoG4a.gif",
          "HospitalApplyDetailID": "0020200609000000011F",
          "ThumbPath": "0020200609000000011F.gif",
          "Path": "0020200609000000011F.gif",
          "CreateTime": "2020-06-09 13:44:20.490",
          "Title": "0018EUjnzy7mG1UaMoG4a.gif"
        }],
        "history": [{
            "Remark": "开始维修",
            "UserName": "zs001",
            "HistoryID": "00202006230000001001",
            "CreateTime": "2020-06-24 09:38:44.130",
            "RepairPersonID": "002020062200000007fe"
          },
          {
            "Remark": "1001",
            "UserName": "程占柱",
            "HistoryID": "0020200624000000021C",
            "CreateTime": "2020-06-24 10:11:38.447",
            "RepairPersonID": "002020062200000006d9"
          },
          {
            "Remark": "1002",
            "UserName": "程占柱",
            "HistoryID": "0020200624000000035A",
            "CreateTime": "2020-06-24 10:11:57.097",
            "RepairPersonID": "002020062200000006d9"
          },
          {
            "Remark": "1003",
            "UserName": "程占柱",
            "HistoryID": "002020062400000004EA",
            "CreateTime": "2020-06-24 10:31:42.853",
            "RepairPersonID": "002020062200000006d9"
          }
        ]
      }
    }


  },

  onLoad: function (options) {
    var HospitalApplyID = options.HospitalApplyID;
    console.log("HospitalApplyID:" + HospitalApplyID);


    var params = { //请求参数
      hospitalApplyID: HospitalApplyID
    }
    var that = this;
    http.postRequest(http.jobDetail, params, function (data) {

      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, function (data) {
      that.i--;
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })

    var myList = new Array();
    console.log("for循环");
    for (var index in this.data.bean.data.fileList) {
      myList.push(http.baseImgUrl+this.data.bean.data.fileList[index].Path)
      
    }
    
    this.setData({
      imglist:myList
    });
    console.log("this.data.imglist[0]"+this.data.imglist[0])



  },
  onItemClickListener(event) {

    var index = event.currentTarget.dataset.postId;

    wx.previewImage({
      current: this.data.imglist[index], // 默认显示的图片 不写的话,默认集合第1张图片
      urls: this.data.imglist // 需要预览的图片http链接列表
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  getInputValue(e) {
    console.log(e.detail) // {value: "ff", cursor: 2}  
  },


})