// pages/myaddr/myaddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[]
  },
  addrbotm:function(){
    wx.navigateTo({
      url: '../addrbotm/addrbotm',
    })
  },
  returnfirmorder:function(e){
    console.log(e);
    console.log(e.currentTarget.dataset.address);
    wx.navigateTo({
      url: '../firmorder/firmorder?' + e.currentTarget.dataset.address,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/Address/address',
      data: {
        open_id: wx.getStorageSync('OpenId')
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          // arrShop: JSON.parse(res.data)
          // address:this.data.address.push(res.data),
          address:res.data
        })
        console.log(res.data);
      }
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