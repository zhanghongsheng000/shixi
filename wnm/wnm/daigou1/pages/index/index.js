//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    lng: 113.9501383155,
    lat: 22.53396360023,
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 22.53396360023,
      longitude: 113.9501383155,
      width: 40,
      height: 40,
      
    }, {
      iconPath: "../../images/location.png",
      id: 1,
      latitude: 22.530673535164,
      longitude: 113.94640468060,
      width: 40,
      height: 40,
    }
    ],
    // controls:[],
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 20,
        top: 250,
        width: 250,
        height: 150
      },
      clickable: true,
    }],
    maphig: '470px',
  },
  // controltap: function (){
  //   wx.navigateTo({
  //     url: '../soso/soso',
  //   })
  // },
  onLoad: function () {
    
    var that = this;
    console.log('onLoad');
    var hig = '';
    wx.getSystemInfo({
      success: function (res) {
        hig = res.windowHeight - 87;
      }
    })

    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/index/map',
      data: {
        
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          markers: res.data
        })
      }
    })
    // wx.showModal({
    //   title: '提示',
    //   content: '蜗牛慢海外代购需获取您的地理位置',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    hig = hig + 'px';
    this.setData({
      maphig: hig,
    })    
  },
  bindtap: function( e ){
    console.log(e);
    // wx.showModal({
    //   title: '提示',
    //   content: '蜗牛慢海外代购需获取您的地理位置',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    var id = e.markerId;
    var controls = this.data.controls;
    var that = this;
    controls['iconPath'] = 'https://buriedsoul.cn/wnm/Uploads/2017-10-11/59dd87b5f0f90.png'
    // wx.request({
    //   url: '',
    //   data: {
    //     id: id
    //   },
    //   method: 'POST',
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   success: function (res) {
        that.setData({
          controls: controls
        })
        console.log(this.data.controls)
    //   }
    // })
  }
  // bindButtonTap: function (){
  //   wx.navigateTo({
  //     url: '../soso/soso',
  //   })
  // },
  // goShop: function(){
  //   wx.navigateTo({
  //     url: '../shophome/shophome',
  //   })
  // },
  // movem: function(){
  //   console.log('adfasdf');
  // },
  // markertap: function (even){
  //   console.log(even);
  //   console.log(this.data.maphig);
    
  // }
})
