import { HTTP } from '../utils/http.js'

export class AddUserModel extends HTTP {
  addUser(data, sCallback) {
    this.request({
      url: 'addFamilyMember',
      method: 'post',
      data,
      success(res) {
        sCallback(res)
      }
    })
  }
}