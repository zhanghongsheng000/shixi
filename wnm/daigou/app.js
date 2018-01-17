//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    //登录判断
    wx.setStorageSync('OpenId', 'oTC7q0NwDFyJkCxhvJPz8vvhUBvo')
    
    var that = this;
    if (!wx.getStorageSync('OpenId')) {
      that.login();
    }
  },
  login: function() {
    var that = this;
    var thridSession = wx.getStorageSync('OpenId');
    if( !thridSession ){
      wx.login({
        success: function (res) {
          // console.log(res)
          wx.getUserInfo({
            success: function(red) {
              if(res.code){
                wx.request({
                  url: 'https://buriedsoul.cn/wnm/index.php/Api/Login/index',
                  header: { 'content-type': 'application/x-www-form-urlencoded' },
                  data: {
                    code: res.code,
                    raw_data: red.rawData,
                  },
                  method: 'POST',
                  success: function (reu) {
                    console.log(reu.data);
                    wx.setStorageSync('OpenId', reu.data.open_id);
                    wx.setStorageSync('NickName', reu.data.nick_name);
                    wx.setStorageSync('AvatarUrl', reu.data.avatar_url);
                  }
                })
              }
            },
          })
        },
      })
    }
  }
})
