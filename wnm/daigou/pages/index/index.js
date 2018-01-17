//index.js
//获取应用实例
var app = getApp()
var maphig = null;
var smallmaphig = null;

Page({
  data: {
    hiddenshopdetail:true,
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

  // 店铺详情的隐藏显示
  shopdetails: function (e) {
    console.log(e);
    this.setData({
      hiddenshopdetail:true,
      maphig: maphig+'px'
    })
  },

  onLoad: function () {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        maphig = res.windowHeight - 87;
        // smallmaphig = res.windowHeight - 237;
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
    
    this.setData({
      maphig: maphig+'px',
    })    
  },
  
  bindtap: function( e ){
 
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
    
    
    // 获取店铺信息
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/shop',
      data: {
          id:id
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          shopdetails: res.data,
          hiddenshopdetail:false
        })
        console.log(res.data);
        wx.createSelectorQuery().select('#shop').boundingClientRect(function (rect) {
          rect.id      // 节点的ID
          rect.dataset // 节点的dataset
          rect.left    // 节点的左边界坐标
          rect.right   // 节点的右边界坐标
          rect.top     // 节点的上边界坐标
          rect.bottom  // 节点的下边界坐标
          rect.width   // 节点的宽度
          rect.height  // 节点的高度
          console.log(rect.height);
          console.log(maphig);
          console.log(smallmaphig);
          smallmaphig = maphig - rect.height;
          that.setData({
            maphig: smallmaphig + 'px',
          })
        }).exec()
      }
    })
    
   
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
