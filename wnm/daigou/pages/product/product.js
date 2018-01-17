function countdown(that){
  setInterval(function(){
      var s = that.data.s;
      var m = that.data.m;
      var h = that.data.h;
      if(s==0){
        if(m == 0){
          if(h == 0){
            return;
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
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    // array: ['原味', '草莓', '柠檬', '香蕉'],
    flag:0,
    index: 0,
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
    // arrProduct:[]
  },
  onLoad: function () {
    var that = this;
    // var article = this.data.arrProduct.goods_dis;
    // // var article = '<div>我是HTML代码</div>';
    // console.log(article);
    // WxParse.wxParse('article', 'html', article, that, 5); 

    var shopid = getApp().requestShopid;
    // goods请求
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/product',
      data: {
        id: shopid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        
        that.setData({
          arrProduct: res.data
          // arrProduct: JSON.parse(res.data)
          
        });
        console.log(res.data);
        var article = res.data[0].goods_dis;

        console.log(article);
        
        WxParse.wxParse('article', 'html', article, that, 5);
        // that.wxparese();

        wx.setNavigationBarTitle({
          title: that.data.arrProduct[0].goods_name//页面标题为路由参数
        })
        console.log(res.data);
      }
    })
    // goods_model请求
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/model',
      data: {
        id: shopid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        var arr = new Array();
        for (let i = 0; i < res.data.length; i++) {
            arr.push(res.data[i].mode_name);
        }
        that.setData({
          arrProductModel: res.data,
          array:arr
          // arrProduct: JSON.parse(res.data)

        })
        // wx.setNavigationBarTitle({
        //   title: that.data.arrProduct[0].goods_name//页面标题为路由参数
        // })
        // console.log(res.data);
      }
    })
    // goods_para请求
    wx.request({
      url: 'https://buriedsoul.cn/wnm/index.php/Api/goods/para',
      data: {
        id: shopid
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        
        that.setData({
          arrProductpara: res.data,
          
          // arrProduct: JSON.parse(res.data)

        })
        // wx.setNavigationBarTitle({
        //   title: that.data.arrProduct[0].goods_name//页面标题为路由参数
        // })
        // console.log(res.data);
      }
    })


    countdown(this);
  },
  wxparese:function(){
    var article = this.data.arrProduct.goods_dis;

    console.log(article);
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },
  close: function () {
    var flag = this.data.popshow;
    this.setData({
      popshow: !flag
    })
  },
  gofirmorder:function(){
    wx.navigateTo({
      url: '../firmorder/firmorder',
    })
  },
  popshow:function(){
    var flag = this.data.popshow;
    this.setData({
      popshow:!flag
    })
    
  },

  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

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
  sel1show:function(){
    var flag = this.data.sel1show;
    this.setData({
      sel1show: !flag
    })
  },
  sel2show: function () {
    var flag = this.data.sel2show;
    this.setData({
      sel2show: !flag
    })
  },
});