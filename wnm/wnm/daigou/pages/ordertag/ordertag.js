// pages/ordertag/ordertag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:'payment',
    orderdetail:{
      id:'1111111',
      num: '222222222222222',
      newTime:'2017-05-12 10:25:33',
      payTime:'2017-05-12 14:25:33'
    },
  },
  // 复制功能
  copy:function(){
    wx.setClipboardData({
      data: '订单编号：' + this.data.orderdetail.id + '交易号' + this.data.orderdetail.num + '创建时间' + this.data.orderdetail.newTime + '付款时间' + this.data.orderdetail.payTime,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  selectAddress:function(){
    wx.navigateTo({
      url: '../myaddr/myaddr',
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