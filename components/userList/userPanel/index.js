// index.js
import Dialog from '../../../dist/dialog/dialog';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件生命周期
   */
  attached() {
    console.log('userInfo: ', this.data.userInfo)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delUser(e) {
      console.log('e.currentTarget.dataset: ', e.currentTarget.dataset)
      let delUserId = e.currentTarget.dataset.userid
      this.triggerEvent('delUser', { delUserId }, {})
    }
  }
})
