import { sign } from '../../utils/auth'
import { Context } from 'koa'
import AdminService from '../service/AdminService'
import response from '../../utils/response'

class LoginController {
  async index(ctx: Context) {
    const admin = AdminService.getAdmin()
    const token = sign(admin)
    response.success(ctx, { token })
  }
}

export default new LoginController()
