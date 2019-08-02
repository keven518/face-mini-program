// index.js
import Dialog from '../../../dist/dialog/dialog';

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delUser() {
      console.log(this.data.show)
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
    }
  }
})
