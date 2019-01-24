import { IContext } from '../utils'

export const Subscription = {
  tickerSubscription: {
    subscribe: async (parent, args, ctx: IContext) => {
      return ctx.prisma.$subscribe
        .currency({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  },
}
