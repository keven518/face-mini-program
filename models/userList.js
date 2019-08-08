import { HTTP } from '../utils/http.js'

export class UserListModel extends HTTP {
  getUserList(udid, sCallback) {
    this.request({
      url: 'listFamilyMember',
      method: 'get',
      data: {udid},
      success(res) {
        sCallback(res)
      }
    })
  }
}