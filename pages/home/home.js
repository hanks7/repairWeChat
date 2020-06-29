Page({
  dataList1: [
    "2aaa",
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
  ],
  dataList0: [
    "111",
    "222",
    "33",
    "44",
    "55",
    "66",
    "77",
    "88",
    "99",
    "00",
    "1111",
    "112",
    "113",
    "114"
  ],
  /**
   * 页面的初始数据
   */
  data: {
    arryList: [],
    swiperNav: {　　
      i: 0,
      　　arr: [　　　{
          v: 0,
          txt: "所有工单"
        }, 　　　
        {
          v: 1,
          txt: "医院工单"
        }, 　　　
        {
          v: 2,
          txt: "公司派单"
        }, 　　　
        {
          v: 3,
          txt: "需要确认的工单"
        }, 　　　
        {
          v: 4,
          txt: "历史工单"
        }　　
      ]　
    }
  },

  onLoad: function(options) {

    this.setData({
      arryList: this.dataList0
    });
  },

  swiperNav: function(e) {　

    var that = this;

    this.setData({　　
      'swiperNav.i': e.target.dataset.i　
    });



  },
  swiperNav: function(e) {　
    console.log(e);　 /*获取可视窗口宽度*/ 　
    var w = wx.getSystemInfoSync().windowWidth;　
    var leng = this.data.swiperNav.arr.length;　
    var i = e.target.dataset.i;　
    var disX = (i - 1) * w / leng;　
    if (i != this.data.swiperNav.i) {　　
      this.setData({　　　
        'swiperNav.i': i　　
      })　
    }　
    this.setData({　　
      'swiperNav.x': disX　
    });
    var that = this;
    console.log("e.target.dataset.i");　
    console.log(e.target.dataset.i);　
    switch (e.target.dataset.i) {
      case 0:
        this.setData({
          arryList: that.dataList0

        });
        break;

      case 1:
        this.setData({
          arryList: that.dataList1

        });
        break;


    }
  },

  onReachBottom() {
    var arr = this.data.arryList;
    console.log("arr.length");
    console.log(arr.length);

    if (arr.length < 100) {
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
  //js的代码
  onPullDownRefresh: function(event) {
    wx.showNavigationBarLoading();


    setTimeout(function() {
      console.log("setTimeout");
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 3000);
  },
  //listview点击事件
  onItemClickListener(event) {
    var datasetid = event.currentTarget.dataset.i;
    console.log("datasetid");
    console.log(event.currentTarget);

    wx.navigateTo({
      url: "../orderDetail/orderDetail"
    });
  }


})