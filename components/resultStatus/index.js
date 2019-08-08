// components/resultStatus/success/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean,
      observer(newVal, oldVal, changedPath) {
        console.log('newVal: ', newVal)
        if(!newVal) {
          this.setData({
            message: '录入失败，请重试'
          })
        }
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    message: '录入成功'
  },

  /**
   * 组件生命周期
   */
  attached() {
    console.log('status-res: ', this.data.status)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit() {
      let url = this.data.status ? '/pages/userList/index' : '/pages/addUser/index'
      wx.redirectTo({
        url
      })
    }
  }
})
