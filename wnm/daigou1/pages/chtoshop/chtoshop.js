// pages/chtoshop/chtoshop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strect: 'start',
    topimgw:'',
    topnumleft:'',
    toptitw: '',
    toptith:'',
    shenz: '',
    zid: '',
    shenf:'',
    fid: '',
    yinye: '',
    yyid: '',
    tishid: '1',
    tishi: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = wx.getSystemInfoSync()
    var width = res.windowWidth / 10;
    var left = res.windowWidth / 30;
    var titw = res.windowWidth * 2 / 9;
    var toph = 20 + width /3.8;
    this.setData({
      topimgw: width+'px',
      topnumleft: left+'px',
      toptitw: titw + 'px',
      toptith: toph + 'px',
    })
  },

  shopls: function (event){
    this.setData({
      strect: 'xieshop'
    })
  },

  shoping: function (event) {
    this.setData({
      strect: 'xiemai'
    })
    console.log(this.data.strect)
  },

  chooseimage: function (even) {
    var id = even.target.dataset.id;
    console.log(id);
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.uploading(tempFilePaths,id)
      }
    })
  },

  uploading: function (datae,id) {
    var that = this;
    var arr = new Array();
    var j = 0;
    for (var i = 0; i < datae.length; i++) {
      wx.uploadFile({
        url: 'https://buriedsoul.cn/wnm/index.php/Api/Fail/uplo', //仅为示例，非真实的接口地址
        filePath: datae[i],
        header: 'multipart/form-data',
        name: 'photo',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          var rsd = JSON.parse(res.data);
          if( id == 1 ){
            that.setData({
              shenz: rsd.url,
              zid: rsd.isd,
            });
          }else if( id == 2 ){
            that.setData({
              shenf: rsd.url,
              fid: rsd.isd
            });
          }else if( id == 3 ){
            that.setData({
              yinye: rsd.url,
              yyid: rsd.isd,
            });
          }
        }
      })
    }
  },

  formSubmit: function(e){
    var that = this;
    var data = e.detail.value;
    var reg = new RegExp("^[0-9]*$");
    if (data.phone == '' ){
      that.setData({
        tishid: '0',
        tishi: '店铺电话必须输入！'
      })
      setTimeout(function(){
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (!reg.test(data.phone)){
      that.setData({
        tishid: '0',
        tishi: '请输入正确的电话号码！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.shop_name == '' ){
      that.setData({
        tishid: '0',
        tishi: '请输入店铺名称！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.pwd == ''){
      that.setData({
        tishid: '0',
        tishi: '请输入店铺密码！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.repwd == '' ){
      that.setData({
        tishid: '0',
        tishi: '请再次输入店铺密码！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if(data.pwd != data.repwd){
      that.setData({
        tishid: '0',
        tishi: '两次输入的密码不一致！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.shenz == ''){
      that.setData({
        tishid: '0',
        tishi: '请上传身份证正面照片！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if(data.shenf == ''){
      that.setData({
        tishid: '0',
        tishi: '请上传身份证反面照片！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.yinye == '' && this.data.strect == 'xieshop'){
      that.setData({
        tishid: '0',
        tishi: '请上传身份证营业执照！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.shopdis == '' && data.maidis == ''){
      that.setData({
        tishid: '0',
        tishi: '请上传商家介绍！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    } else if (data.goodsdis == ''){
      that.setData({
        tishid: '0',
        tishi: '请上传产品介绍！'
      })
      setTimeout(function () {
        that.setData({
          tishid: '1',
          tishi: ''
        })
      }, 3000)
    }else{
      wx.request({
        url: 'https://buriedsoul.cn/wnm/index.php/Api/Forum/getforum',
        data: {
          openid: wx.getStorageSync('OpenId'),
          pwd: data.pwd,
          shop_sz: data.shenf,
          shop_sf: data.shenz,
          shop_name: data.shop_name,
          shopdis: data.shopdis,
          maidis: data.maidis,
          shop_yin: data.yinye,
          goodsdis: data.goodsdis,
          phone: data.phone,
        },
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          if( res.data.suc == 'success' ){
            that.alers(res.data.arg);
          }else{
            that.alerf(res.data.arg);
          }
          // console.log(111, res.data)
        }
      })
    }
  },

  alerf: function ( ass ){
    wx.showLoading({
      title: ass,
    })
  },

  alers: function (ass) {
    wx.showToast({
      title: ass,
      icon: 'success',
      duration: 2000
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