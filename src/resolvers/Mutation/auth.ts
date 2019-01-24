import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IContext } from '../../utils'

export const auth = {
  async login(parent, { username, password }, ctx: IContext) {
    const user = await ctx.prisma.user({ username })
    if (!user) {
      throw new Error(`No such user found for username: ${username}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      user,
      token,
    }
  },
}
