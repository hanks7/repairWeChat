// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: ["http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000", "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"],
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

    ]


  },
  onItemClickListener(event) {

    var index = event.currentTarget.dataset.postId;

    wx.previewImage({
      current: this.data.imglist[index], // 默认显示的图片 不写的话,默认集合第1张图片
      urls: this.data.imglist // 需要预览的图片http链接列表
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  getInputValue(e) {
    console.log(e.detail)// {value: "ff", cursor: 2}  
  }

})