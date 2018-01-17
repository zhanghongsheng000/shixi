// follow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/shops',
      data: {
        
      },
      method: 'POST',
      header: { 'content-type':         'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          arr: res.data,
        })
        console.log(res.data);
      }
    })

  },

  gotoshop: function ( event ){
    var id = event.currentTarget.dataset.id;
    var app = getApp();
    app.requestShopid = id;
    wx.navigateTo({
      url: '../shop/shop',
    })
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