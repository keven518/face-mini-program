// pages/userList/index.js
// AppSecret: e6da21754918e93f6b3422210c7ed93f
import { UserListModel } from '../../models/userList.js'
import { DelUserModel } from '../../models/delUser.js'

let userListModel = new UserListModel()
let delUserModel = new DelUserModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    userList: [],
    delUserId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserList()
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

  },
  getUserList() {
    userListModel.getUserList('LTE3Nzg0MjcyMTUwMDVhN2JlNWUxN2JlMQ', (res) => {
      // console.log('res.data: ', res.data)
      let userList = res.data
      this.setData({
        userList
      })
    })
  },
  onDelUser(e) {
    let delUserId = e.detail.delUserId
    this.setData({
      delUserId
    })
    this.setData({
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  cancel() {
    console.log('cancel')
  },
  confirm() {
    console.log('confirm')
    console.log()
    delUserModel.delUser(this.data.delUserId, (res) => {
      if(res.status == 0) {
        this.getUserList()
      }
    })
  },
  onAddUser() {
    

    wx.redirectTo({
      url: "/pages/addUser/index",
    })
  }
})