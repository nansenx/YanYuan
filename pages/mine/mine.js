// pages/mine/mine.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    name: null,
    sex: null,
    room: null,
    phone: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.userData.userinfo == null) {
      console.log(app.userData.userinfo)
      console.log(that.data.user)
      wx.redirectTo({
        url: '../mine/addperson/addperson',
      })
    } else {
      this.setData({
        name: app.userData.userinfo.name,
        sex: app.userData.userinfo.sex,
        room: app.userData.userinfo.room,
        phone: app.userData.userinfo.phone,
      })
      this.saveData;
    }
  },

  toMyOrder: function() {
    wx.navigateTo({
      url: '../mine/myorder/myorder'
    })
  },

  torevise: function() {
    wx.redirectTo({
      url: '../mine/addperson/addperson'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})