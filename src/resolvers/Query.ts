import { getUserId, IContext } from '../utils'
import { WalletsWithCurrencyFragment, OrdersWithCurrencyFragment } from './Fragments'

export const Query = {
  orders(parent, args, ctx: IContext) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id }).orders().$fragment(OrdersWithCurrencyFragment)
  },

  wallets(parent, args, ctx: IContext) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id }).wallets().$fragment(WalletsWithCurrencyFragment)
  },

  async order(parent, { id }, ctx: IContext) {
    const userId = getUserId(ctx)

    const where = {
      id,
      user: {
        id: userId
      }
    }

    const order = await ctx.prisma.order(where)
    if (!order) {
      throw new Error(`No such order found with id: ${id} for this user.`)
    }

    return order
  },

  currencies(parent, args, ctx: IContext) {
    return ctx.prisma.currencies()
  },

  me(parent, args, ctx: IContext) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
}
