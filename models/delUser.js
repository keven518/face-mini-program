import { HTTP } from '../utils/http.js'

export class DelUserModel extends HTTP {
  delUser(data, sCallback) {
    this.request({
      url: `delFamilyMember?personId=${data}`,
      method: 'post',
      contentType: 'form-data',
      success(res) {
        sCallback(res)
      }
    })
  }
}