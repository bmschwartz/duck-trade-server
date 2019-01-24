import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma-client'

export interface IContext {
  prisma: Prisma
  request: any
  response: any
}

export function getUserId(ctx: IContext) {
  const { token } = ctx.request.cookies

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
