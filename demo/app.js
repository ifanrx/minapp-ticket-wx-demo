const config = require('./config')
App({
  onLaunch: function() {
    require('minapp-sdk')
    // wx.BaaS.auth.loginWithWechat()
    // require('./sdk-wechat.2.0.8-a.js')
    wx.BaaS.login(false)
    wx.BaaS.init(config.clientID, {logLevel: 'debug', autoLogin: true})
  }
})
