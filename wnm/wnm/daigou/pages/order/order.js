// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:1
  },
  // 标签页切换
  status1:function(){
      this.setData({
        status:1
      });
  },
  status2: function () {
    this.setData({
      status: 2
    });
  },
  status3: function () {
    this.setData({
      status: 3
    });
  },
  status4: function () {
    this.setData({
      status: 4
    });
  },
  status5: function () {
    this.setData({
      status: 5
    });
  },
  // 超链接跳转
  order:function(){
    wx.navigateTo({
      url: '../ordertag/ordertag',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})