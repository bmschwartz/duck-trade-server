import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { User } from './User'
import { OrderMutations } from './Mutation/order'

export default {
  Query,
  Mutation: {
    ...auth,
    ...OrderMutations
  },
  Subscription,
  User
}
