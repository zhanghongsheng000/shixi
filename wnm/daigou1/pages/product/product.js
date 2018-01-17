function countdown(that){
  setInterval(function(){
    var d = that.data.d;
    var s = that.data.s;
    var m = that.data.m;
    var h = that.data.h;
    if(s==0){
      if(m == 0){
        if(h == 0){
          if( d == 0 ){
            return;
          }else{
            that.setData({
              d: d - 1,
              h: 23,
              m: 59,
              s: 59
            });
          }
        }else{
          that.setData({
            h: h-1,
            m: 59,
            s:59
          });
        }
      }else{
        that.setData({
          m: m-1,
          s:59
        });
      }
    }else{
      that.setData({
          s: s-1,
      });
    }   
  },1000)
}

Page({
  data: {
    array: ['原味', '草莓', '柠檬', '香蕉'],
    flag:0,
    index: 0,
    d: 0,
    h:1,
    m:10,
    s:10,
    showDet:1,
    showSpec:0,
    popshow:0,
    title:'这是标题',
    num:1,
    sel1show:1,
    sel2show:0,
    imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    goods:[],
    para:[],
    shop:[],
    moneys:[],
    money: '',
    oldmoney: '',
    sele: 0,
    cmog:'',
    mode_id:'',
    ster:''
  },

  onLoad: function (options) {
    var WxParse = require('../../wxParse/wxParse.js');
    var that = this;
    var goodsid = options.id;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/goodslis',
      data: {
        id: goodsid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          imgUrls: JSON.parse(res.data.goods.goods_img),
          goods: res.data.goods,
          moneys: res.data.money,
          array: JSON.parse(res.data.sele),
          para: res.data.pare,
          shop: res.data.shop,
          d: res.data.time.d,
          h: res.data.time.h,
          m: res.data.time.m,
          s: res.data.time.s,
        })
        var arr = that.data.moneys;
        var mony = arr[0]['money'];
        var oldmony = arr[0]['old_money'];
        that.setData({
          money: mony,
          cmog: mony,
          old_money: oldmony,
          mode_id: arr[0]['id']
        })
        var article = res.data.goods.goods_des;

        console.log(article);

        WxParse.wxParse('article', 'html', article, that, 5);
        wx.setNavigationBarTitle({
          title: that.data.goods.goods_name//页面标题为路由参数
        })
      }
    })
    countdown(this);
  },

  bindPickerChange: function ( e ){
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    var arr = this.data.moneys;
    var i = e.detail.value;
    var mony = arr[i]['money'];
    var oldmony = arr[i]['old_money'];
    this.setData({
      money: mony,
      old_money: oldmony
    })
  },
  
  close: function () {
    var flag = this.data.popshow;
    this.setData({
      popshow: !flag
    })
  },

  popshow:function(){
    var flag = this.data.popshow;
    this.setData({
      popshow:!flag,
      ster: 'cart'
    })
  },

  popshoping: function () {
    var flag = this.data.popshow;
    this.setData({
      popshow: !flag,
      ster: 'shoping'
    })
  },

  cartSubmit: function (e){
    var arr = e.detail.value;
    var flag = this.data.popshow;
    var that = this;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/cart',
      data: {
        goods_id: arr['goods_id'],
        goods_mode: arr['goods_mode'],
        openid: wx.getStorageSync('OpenId'),
        num: that.data.num
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          popshow: !flag,
        })
        wx.showToast({
          title: '已加入购物车！',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  shopSubmit: function(e){
    var arr = e.detail.value;
    var flag = this.data.popshow;
    var that = this;
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/order',
      data: {
        goods_id: arr['goods_id'],
        goods_mode: arr['goods_mode'],
        openid: wx.getStorageSync('OpenId'),
        num: that.data.num
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          popshow: !flag,
        })
        
        wx.navigateTo({
          url: '../firmorder/firmorder?id=' + res.data,
        })
      }
    })
  },

  showDet:function(){
    var flag = this.data.flag;
    this.setData({
      showDet:1,
      showSpec:0,
      flag:!flag
    });
  },

  showSpec: function () {
    var flag = this.data.flag;
    this.setData({
      showDet: 0,
      showSpec: 1,
      flag:!flag
    });
  },

  reducenum:function(){
    var num = this.data.num;
    if(num>1){
      this.setData({
        num: parseInt(num) - 1
      });
    }
  },

  addnum: function () {
    var num = this.data.num;
    if (num < 100) {
      this.setData({
        num: parseInt(num) + 1
      });
    }
  },

  getNum: function (e) {
    if (e.detail.value > 100) {
      this.setData({
        num: 100
      })
    }
    else if (e.detail.value < 1) {
      this.setData({
        num: 1
      })
    } else {
      this.setData({
        num: e.detail.value
      })
    }
  },

  selshow:function(e){
    var id = e.target.dataset.id;
    var arr = this.data.moneys;
    this.setData({
      sele: id,
      cmog: arr[id]['money'],
      mode_id: arr[id]['id']
    })
  },

});