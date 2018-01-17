// pages/addrbotm/addrbotm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkname:false,
    checkphone: false,
    checkaddress: false,
    checkidcard: false,
    disabled: false,
    region: ['广东省', '广州市', '海珠区']
    // customItem: '全部'
  },

  // 检查是否能够提交
  checkall:function(){
    var that = this;
    var checkname = that.data.checkname;
    var checkphone = that.data.checkphone;
    var checkaddress = that.data.checkaddress;
    var checkidcard = that.data.checkidcard;
    if (checkname && checkphone && checkaddress && checkidcard){
      that.setData({
        disabled:true
      })
    }else{
      that.setData({
        disabled: false
      })
    }
    console.log(checkname + checkphone + checkaddress + checkidcard);
    console.log(this.data.disabled);
  },
  // 检查姓名不能为空
  checkname: function (e) {
    var name = e.detail.value;
    if (name == '') {
      wx.showModal({
        title: '大兄弟，你好',
        content: '请输入姓名，不要为空',
        success: function (res) {
          if (res.confirm) {
              
          }
        }
      });
      this.setData({
        checkname: false
      })
    }else{
      this.setData({
        checkname: true
      })
    }
    this.checkall();
  },
  // 检查手机号
  checkphone: function (e) {
    var phone = e.detail.value;
    if (phone.length != 11) {
      wx.showModal({
        title: '大兄弟，你好',
        content: '手机号长度不符',
        success: function (res) {
          if (res.confirm) {
            
          }
        }
      });
      this.setData({
        checkphone: false
      })
    }else{
      this.setData({
        checkphone: true
      })
    }
    this.checkall();
  },
  // 检查详细地址
  checkaddress: function (e) {
    var address = e.detail.value;
    if (address == '') {
      wx.showModal({
        title: '大兄弟，你好',
        content: '请输入详细地址，不要为空',
        success: function (res) {
          if (res.confirm) {
            
          }
        }
      });
      this.setData({
        checkaddress: false
      })
    }else{
      this.setData({
        checkaddress: true
      })
    }
    this.checkall();
  },
  // 检查身份证号码
  checkidcard: function (e) {
    var idcard = e.detail.value;
    var reg = /^\d{17}([0-9]|X){1}$/;
    if (reg.test(idcard)) { 
      this.setData({
        checkidcard: true
      })
    }else{
        wx.showModal({
          title: '大兄弟，你好',
          content: '请输入正确的身份证号',
          success: function (res) {
            if (res.confirm) {
              
            }
          }
        });
        this.setData({
          checkidcard: false
        })
    }
    this.checkall();
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      region: e.detail.value
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