import { IContext } from '../utils'

export const User = {
  orders: ({ id }, args, ctx: IContext) => {
    return ctx.prisma.user({ id }).orders()
  },

  wallets: ({ id }, args, ctx: IContext) => {
    return ctx.prisma.user({ id }).wallets()
  },
}
