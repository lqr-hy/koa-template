
import Admin from '../model/Admin'

class AdminService {
  async getAdmin () {
    return Admin.findOne()
  }
}

export default new AdminService