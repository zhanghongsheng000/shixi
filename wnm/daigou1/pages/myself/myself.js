// myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myurl: '',
    wxname: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      myurl: wx.getStorageSync('AvatarUrl'),
      wxnmae: wx.getStorageSync('NickName'),
    })
  },

  chtoshop: function (){
    wx.navigateTo({
      url: '../chtoshop/chtoshop',
    })
  },

  gotoaddr: function (){
    wx.navigateTo({
      url: '../myaddr/myaddr',
    })
  },
  payment: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  send: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  sign: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  aftersales: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  goContact: function () {
    wx.navigateTo({
      url: '../contact/contact',
    })
  },
  goProblem: function () {
    wx.navigateTo({
      url: '../problem/problem',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})