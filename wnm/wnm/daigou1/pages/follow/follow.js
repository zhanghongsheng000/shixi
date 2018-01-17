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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})