// cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    selectall:false,
    selectlist:[false,false],
    select: [[false, false],[false,false]]
  },
  // 选择整个类型列表
  selectlist:function(e){
    // console.log(e);
    var index = e.currentTarget.dataset.num;
    var arr1 = this.data.select;
    var arr2 = this.data.selectlist;
    arr2[index] = !arr2[index];
    // console.log(arr2);
    // console.log(arr2[index]);
    if(arr2[index]){
      // arr1[index].forEach(function (a, b, c) {
      //   a = true;
      // });
      for(var i = 0;i< arr1[index].length;i++){
        arr1[index][i] = true;
      }
    }else{
      // arr1[index].forEach(function (a, b, c) {
      //   a = false;
      // });
      for (var i = 0; i < arr1[index].length; i++) {
        arr1[index][i] = false;
      }
    }
    this.setData({
      select: arr1,
      selectlist:arr2
    })
    console.log(arr1);
    console.log(arr2);
  },
  // 选择类型中单个商品
  selectproduct:function(e){
    console.log(e);
    var str = e.currentTarget.dataset.num;
    var index = str.split(','); 
    var index1 = index[0];
    var index2 = index[1];
    var arr = this.data.select;

    arr[index1][index2] = !arr[index1][index2];
    this.setData({
      select:arr
    })
  },
  selectall:function(){
    var arr1 = this.data.select;
    var arr2 = this.data.selectlist;
    var tag = this.data.selectall;
    console.log(tag);
    if(tag){
      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
          arr1[i][j] = false
        }
      }
      for (var i = 0; i < arr2.length; i++) {
        arr2[i] = false
      }
    }else{
      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
          arr1[i][j] = true
        }
      }
      for (var i = 0; i < arr2.length; i++) {
        arr2[i] = true
      }
    }
    this.setData({
      selectall: !tag,
      select:arr1,
      selectlist:arr2
    })
    console.log(this.data.selectall);
  },
  jianNum: function (e) {
    var num = this.data.num;
    if(num == 1){
      this.setData({
        num: 1
      })
    }else{
      this.setData({
        num: parseInt(num) - 1
      })
    }
  },
  jiaNum:function(e){
    var num = this.data.num;
    if (num == 10) {
      this.setData({
        num: 10
      })
    } else {
      this.setData({
        num: parseInt(num) + 1
      })
    }
  },
  getNum: function (e) {
    if (e.detail.value>10){
      this.setData({
            num: 10
      })
    } 
    else if (e.detail.value < 1){
      this.setData({
        num: 1
      })
    }else{
      this.setData({
        num: e.detail.value
      })
    }
    
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