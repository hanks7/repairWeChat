var app = getApp(); //获取小程序全局唯一app实例
// var host = "http://172.16.0.51:8600/api/"; //测试接口地址 
var host = "https://mt.easyway.com.cn/api/"; //正式接口地址
var baseImgUrl = "http://172.16.0.50:8681/MdsAppendixDir/MaintenanceFile/"; //图片基础地址



//var http = require('../../utils/request.js'); //相对路径
//url：接口
//postData：参数
//doSuccess：成功的回调函数
//doFail：失败的回调函数

//POST请求
function post(url, postData, doSuccess, doFail) {
  request(url, postData, "POST", doSuccess, doFail);
}

//GET请求
function get(url, postData, doSuccess, doFail) {
  request(url, postData, "GET", doSuccess, doFail);
}

function request(url, postData, method, doSuccess, doFail) {
  wx.showLoading({ //显示dialog
    title: "正在加载中...",
  })

  //由于每个接口都要传token,添加一下两行代码
  var userInfo = wx.getStorageSync('user_info');
  postData.token = userInfo.Token;

  wx.request({
    url: host + url, //请求地址
    method: method, //请求方法
    header: { //请求头
      'content-type': 'application/json'
    },
    data: postData, //请求参数    
    dataType: 'json', //返回数据格式
    responseType: 'text', //响应的数据类型
    success: function (res) {
      console.log("----data");
      console.log(res);
      wx.hideLoading(); //隐藏dialog
      if (res.statusCode == 200) {
        if (res.data.code == 200) {
          doSuccess(res.data.data);
        } else {
          wx.showToast({
            title: res.data.msg ? res.data.msg : "错误代码 " + res.data.code + " ：请联系管理员",
            icon: 'none',
            duration: 2000
          })
          doFail(res.data.msg ? res.data.msg : "错误代码 " + res.data.code + " ：请联系管理员");
        }
      } else {
        wx.showToast({
          title: '服务器出现错误',
          icon: 'none',
          duration: 2000
        })
        doFail('服务器出现错误');
      }
      //成功执行方法，参数值为res.data,直接将返回的数据传入

    },
    fail: function () {
      wx.hideLoading();
      wx.showToast({
        title: '服务器出现错误',
        icon: 'none',
        duration: 2000
      })
      //失败执行方法
      doFail('服务器出现错误');
    },
  })
}
//module.exports用来导出代码
//js文件中通过var http = require("../../util/request.js")加载
module.exports = {
  postRequest: post,
  getRequest: get,
  host: host,
  loginUrl: "login",
  jobListUrl: "jobList",
  jobDetail: "jobDetail",
  jobStatus: "jobStatus",
  baseImgUrl: baseImgUrl
}