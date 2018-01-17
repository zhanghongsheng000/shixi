// pages/firmorder/firmorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    address:'',
    goods:'',
    mode:'',
    shop:'',
    order:'',
    price:'',
    message:''
  },
  selectAddress:function(){
    wx.navigateTo({
      url: '../chgadder/chgadder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var order_id = options.id;
    // var order_id = wx.getStorageSync('order_id');
    console.log(order_id);
    var that = this;
    // 订单ID
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/orderlis',
      data: {
        order_id: order_id,
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log('order', res.data);
        that.setData({
          address: res.data.address,
          goods: res.data.goods,
          mode: res.data.mode,
          shop: res.data.shop,
          order: res.data.order,
          num: res.data.order.num,
          price: res.data.mode.money * res.data.order.num,
          message: res.data.order.message,
          orderlist:res.data
        })
      }
    })
    // 商品ID
    // wx.request({
    //   url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/product',
    //   data: {
    //     id: id,
    //   },
    //   method: 'POST',
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   success: function (res) {
    //     console.log('product', res.data);
    //     that.setData({
    //       address: res.data.address,
    //       goods: res.data.goods,
    //       mode: res.data.mode,
    //       shop: res.data.shop,
    //       order: res.data.order,
    //       num: res.data.order.num,
    //       price: res.data.mode.money * res.data.order.num,
    //       message: res.data.order.message
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onShow: function (options) {
    
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    this.setData({
      message: e.detail.value
    })
  },

  reducenum: function () {
    var num = this.data.num;
    var money = this.data.mode.money;
    if (num > 1) {
      this.setData({
        num: parseInt(num) - 1,
      });
      this.setData({
        price: this.data.num * money
      })
    }
  },

  addnum: function () {
    var num = this.data.num;
    var money = this.data.mode.money;
    if (num < 100) {
      this.setData({
        num: parseInt(num) + 1,
      });
      this.setData({
        price: this.data.num * money
      })
    }
  },

  wxpay: function(){
    var num = this.data.num;
    var message = this.data.message;
    var order_id = this.data.order.id;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/pay',
      data: {
        order_id: order_id,
        num: num,
        message: message
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data);
      }
    })
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