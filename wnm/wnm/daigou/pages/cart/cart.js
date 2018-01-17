// cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    chang: 0,
    allprice: 0,
    yun: 0
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    console.log(wx.getStorageSync('OpenId'))
    var that = this;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/cartlis',
      data: {
        openid: wx.getStorageSync('OpenId'),
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          cart: res.data
        })
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  
  change: function( e ){
    var id = e.target.dataset.id;
    var cart = this.data.cart;
    var allprice = this.data.allprice;
    if (cart[id]['good']['chang'] == 0){
      cart[id]['good']['chang'] = 1;
      allprice = parseInt(allprice) + parseInt(cart[id]['good']['money']) * parseInt(cart[id]['good']['num']);
    }else{
      cart[id]['good']['chang'] = 0;
      allprice = parseInt(allprice) - parseInt(cart[id]['good']['money']) * parseInt(cart[id]['good']['num']);
    }
    this.setData({
      cart: cart,
      allprice: allprice
    })
    cart = this.data.cart;
    var all = '1';
    for (var k = 0, length = cart.length; k < length; k++) {
      if (cart[k]['good']['chang'] == '0' ){
        all = '0';
      }
    }
    if(all == '1'){
      this.setData({
        chang: 1,
      })
    }else{
      this.setData({
        chang: 0,
      })
    }
  },

  chgall:function(){
    var cart = this.data.cart;
    var allprice = 0;
    var chang = this.data.chang;
    if( chang == 0 ){
      for (var k = 0, length = cart.length; k < length; k++) {
        cart[k]['good']['chang'] = 1;
        allprice = parseInt(cart[k]['good']['money']) * parseInt(cart[k]['good']['num']) + parseInt(allprice);
      }
      this.setData({
        cart: cart,
        allprice: allprice,
        chang: 1,
      })
    }else{
      for (var k = 0, length = cart.length; k < length; k++) {
        cart[k]['good']['chang'] = 0;
      }
      this.setData({
        cart: cart,
        allprice: 0,
        chang: 0,
      })
    }
    
  },

  jianNum: function (e) {
    var id = e.target.dataset.id;
    var cart = this.data.cart;
    var allprice = this.data.allprice;
    var num = cart[id]['good']['num'];
    var money = cart[id]['good']['money'];
    if( cart[id]['good']['chang'] == 0 ){
      money = 0
    }
    if(num != 1){
      num = parseInt(num) -1;
      cart[id]['good']['num'] = num;
      allprice = parseInt(allprice) - parseInt(money);
      this.setData({
        cart: cart,
        allprice: allprice
      })
    }
  },

  jiaNum:function(e){
    var num = this.data.num;
    var id = e.target.dataset.id;
    var allprice = this.data.allprice;
    var cart = this.data.cart;
    var num = cart[id]['good']['num'];
    var money = cart[id]['good']['money'];
    if (cart[id]['good']['chang'] == 0) {
      money = 0
    }
    if (num != 50) {
      num = parseInt(num) + 1;
      cart[id]['good']['num'] = num;
      allprice = parseInt(allprice) + parseInt(money);
      this.setData({
        cart: cart,
        allprice: allprice
      })
    }
  },

  getNum: function (e) {
    console.log(11111)
    var id = e.target.dataset.id;
    var cart = this.data.cart;
    var allprice = 0;
    
    if( cart[id]['good']['chang'] == 0 ){
      if (e.detail.value > 50) {
        cart[id]['good']['num'] = 50;
        this.setData({
          cart: cart
        })
      } else if (e.detail.value < 1) {
        cart[id]['good']['num'] = 1;
        this.setData({
          cart: cart
        })
      } else {
        cart[id]['good']['num'] = e.detail.value;
        this.setData({
          cart: cart
        })
      }
    }else{
      if (e.detail.value > 50) {
        cart[id]['good']['num'] = 50;
        this.setData({
          cart: cart
        })
      } else if (e.detail.value < 1) {
        cart[id]['good']['num'] = 1;
        this.setData({
          cart: cart
        })
      } else {
        cart[id]['good']['num'] = e.detail.value;
        this.setData({
          cart: cart
        })
      }
      for (var k = 0, length = cart.length; k < length; k++){
        if( cart[k]['good']['chang'] == 1 ){
          allprice = parseInt(cart[k]['good']['money']) * parseInt(cart[k]['good']['num']) + parseInt(allprice);
        }
      }
      this.setData({
        allprice: allprice
      })
    }    
  },
  
  ljt: function (e){
    var id = e.target.dataset.id;
    var cart = this.data.cart;
    var that = this;
    var allprice = 0;
    // console.log(cart);
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/cartljt',
      data: {
        openid: wx.getStorageSync('OpenId'),
        cart: cart,
        cart_id: cart[id]['id'],
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          cart: res.data
        })
      }
    })
  },

  order: function(){
    var allprice = this.data.allprice;
    var catr = this.data.cart;
    if( allprice != 0 ){
      wx.request({
        url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/cartpay',
        data: {
          openid: wx.getStorageSync('OpenId'),
          cart: cart
        },
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res.data);
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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