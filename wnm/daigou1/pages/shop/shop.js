// pages/shop/shop.js
Page({

  data: {
    turn: 'on',
    arrShop:'',
  },

  onLoad: function (options) {
    var shopid = getApp().requestShopid;
    var that = this;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/shop',
      data: {
        id: shopid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          // arrShop: JSON.parse(res.data)
          arrShop: res.data,
        })
        console.log(res.data);
      }
    })
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/products',
      data: {
        id: shopid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          arrProduct: res.data,
        })
        console.log(res.data);
      }
    })
  },

  gotoproduct: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../product/product?id='+id,
    })
  },

  setDisabled: function (e) {
    if (this.data.turn == 'on') {
      this.setData({
        turn: 'off'
      })
    } else {
      this.setData({
        turn: 'on'
      })
    }
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