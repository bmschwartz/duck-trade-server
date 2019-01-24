export const typeDefs = /* GraphQL */ `type AggregateCurrency {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWallet {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Currency {
  id: ID!
  name: String!
  lastPrice: Float!
}

type CurrencyConnection {
  pageInfo: PageInfo!
  edges: [CurrencyEdge]!
  aggregate: AggregateCurrency!
}

input CurrencyCreateInput {
  name: String!
  lastPrice: Float!
}

input CurrencyCreateOneInput {
  create: CurrencyCreateInput
  connect: CurrencyWhereUniqueInput
}

type CurrencyEdge {
  node: Currency!
  cursor: String!
}

enum CurrencyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  lastPrice_ASC
  lastPrice_DESC
}

type CurrencyPreviousValues {
  id: ID!
  name: String!
  lastPrice: Float!
}

type CurrencySubscriptionPayload {
  mutation: MutationType!
  node: Currency
  updatedFields: [String!]
  previousValues: CurrencyPreviousValues
}

input CurrencySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CurrencyWhereInput
  AND: [CurrencySubscriptionWhereInput!]
  OR: [CurrencySubscriptionWhereInput!]
  NOT: [CurrencySubscriptionWhereInput!]
}

input CurrencyUpdateDataInput {
  name: String
  lastPrice: Float
}

input CurrencyUpdateInput {
  name: String
  lastPrice: Float
}

input CurrencyUpdateManyMutationInput {
  name: String
  lastPrice: Float
}

input CurrencyUpdateOneRequiredInput {
  create: CurrencyCreateInput
  update: CurrencyUpdateDataInput
  upsert: CurrencyUpsertNestedInput
  connect: CurrencyWhereUniqueInput
}

input CurrencyUpsertNestedInput {
  update: CurrencyUpdateDataInput!
  create: CurrencyCreateInput!
}

input CurrencyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  lastPrice: Float
  lastPrice_not: Float
  lastPrice_in: [Float!]
  lastPrice_not_in: [Float!]
  lastPrice_lt: Float
  lastPrice_lte: Float
  lastPrice_gt: Float
  lastPrice_gte: Float
  AND: [CurrencyWhereInput!]
  OR: [CurrencyWhereInput!]
  NOT: [CurrencyWhereInput!]
}

input CurrencyWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

scalar Long

type Mutation {
  createCurrency(data: CurrencyCreateInput!): Currency!
  updateCurrency(data: CurrencyUpdateInput!, where: CurrencyWhereUniqueInput!): Currency
  updateManyCurrencies(data: CurrencyUpdateManyMutationInput!, where: CurrencyWhereInput): BatchPayload!
  upsertCurrency(where: CurrencyWhereUniqueInput!, create: CurrencyCreateInput!, update: CurrencyUpdateInput!): Currency!
  deleteCurrency(where: CurrencyWhereUniqueInput!): Currency
  deleteManyCurrencies(where: CurrencyWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWallet(data: WalletCreateInput!): Wallet!
  updateWallet(data: WalletUpdateInput!, where: WalletWhereUniqueInput!): Wallet
  updateManyWallets(data: WalletUpdateManyMutationInput!, where: WalletWhereInput): BatchPayload!
  upsertWallet(where: WalletWhereUniqueInput!, create: WalletCreateInput!, update: WalletUpdateInput!): Wallet!
  deleteWallet(where: WalletWhereUniqueInput!): Wallet
  deleteManyWallets(where: WalletWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  user: User!
  price: Float
  side: OrderSide!
  currency: Currency!
  quantity: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  user: UserCreateOneWithoutOrdersInput!
  price: Float
  side: OrderSide!
  currency: CurrencyCreateOneInput!
  quantity: Float!
}

input OrderCreateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutUserInput {
  price: Float
  side: OrderSide!
  currency: CurrencyCreateOneInput!
  quantity: Float!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  side_ASC
  side_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  price: Float
  side: OrderSide!
  quantity: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  side: OrderSide
  side_not: OrderSide
  side_in: [OrderSide!]
  side_not_in: [OrderSide!]
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

enum OrderSide {
  BUY
  SELL
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  user: UserUpdateOneRequiredWithoutOrdersInput
  price: Float
  side: OrderSide
  currency: CurrencyUpdateOneRequiredInput
  quantity: Float
}

input OrderUpdateManyDataInput {
  price: Float
  side: OrderSide
  quantity: Float
}

input OrderUpdateManyMutationInput {
  price: Float
  side: OrderSide
  quantity: Float
}

input OrderUpdateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutUserDataInput {
  price: Float
  side: OrderSide
  currency: CurrencyUpdateOneRequiredInput
  quantity: Float
}

input OrderUpdateWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutUserDataInput!
}

input OrderUpsertWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutUserDataInput!
  create: OrderCreateWithoutUserInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  side: OrderSide
  side_not: OrderSide
  side_in: [OrderSide!]
  side_not_in: [OrderSide!]
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  currency(where: CurrencyWhereUniqueInput!): Currency
  currencies(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Currency]!
  currenciesConnection(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrencyConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  wallet(where: WalletWhereUniqueInput!): Wallet
  wallets(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallet]!
  walletsConnection(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WalletConnection!
  node(id: ID!): Node
}

type Subscription {
  currency(where: CurrencySubscriptionWhereInput): CurrencySubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  wallet(where: WalletSubscriptionWhereInput): WalletSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  wallets(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallet!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
  orders: OrderCreateManyWithoutUserInput
  wallets: WalletCreateManyWithoutUserInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWalletsInput {
  create: UserCreateWithoutWalletsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOrdersInput {
  username: String!
  password: String!
  wallets: WalletCreateManyWithoutUserInput
}

input UserCreateWithoutWalletsInput {
  username: String!
  password: String!
  orders: OrderCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  password: String
  orders: OrderUpdateManyWithoutUserInput
  wallets: WalletUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  username: String
  password: String
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutWalletsInput {
  create: UserCreateWithoutWalletsInput
  update: UserUpdateWithoutWalletsDataInput
  upsert: UserUpsertWithoutWalletsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOrdersDataInput {
  username: String
  password: String
  wallets: WalletUpdateManyWithoutUserInput
}

input UserUpdateWithoutWalletsDataInput {
  username: String
  password: String
  orders: OrderUpdateManyWithoutUserInput
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithoutWalletsInput {
  update: UserUpdateWithoutWalletsDataInput!
  create: UserCreateWithoutWalletsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}

type Wallet {
  id: ID!
  user: User!
  currency: Currency!
  quantity: Float!
}

type WalletConnection {
  pageInfo: PageInfo!
  edges: [WalletEdge]!
  aggregate: AggregateWallet!
}

input WalletCreateInput {
  user: UserCreateOneWithoutWalletsInput!
  currency: CurrencyCreateOneInput!
  quantity: Float!
}

input WalletCreateManyWithoutUserInput {
  create: [WalletCreateWithoutUserInput!]
  connect: [WalletWhereUniqueInput!]
}

input WalletCreateWithoutUserInput {
  currency: CurrencyCreateOneInput!
  quantity: Float!
}

type WalletEdge {
  node: Wallet!
  cursor: String!
}

enum WalletOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
}

type WalletPreviousValues {
  id: ID!
  quantity: Float!
}

input WalletScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  AND: [WalletScalarWhereInput!]
  OR: [WalletScalarWhereInput!]
  NOT: [WalletScalarWhereInput!]
}

type WalletSubscriptionPayload {
  mutation: MutationType!
  node: Wallet
  updatedFields: [String!]
  previousValues: WalletPreviousValues
}

input WalletSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WalletWhereInput
  AND: [WalletSubscriptionWhereInput!]
  OR: [WalletSubscriptionWhereInput!]
  NOT: [WalletSubscriptionWhereInput!]
}

input WalletUpdateInput {
  user: UserUpdateOneRequiredWithoutWalletsInput
  currency: CurrencyUpdateOneRequiredInput
  quantity: Float
}

input WalletUpdateManyDataInput {
  quantity: Float
}

input WalletUpdateManyMutationInput {
  quantity: Float
}

input WalletUpdateManyWithoutUserInput {
  create: [WalletCreateWithoutUserInput!]
  delete: [WalletWhereUniqueInput!]
  connect: [WalletWhereUniqueInput!]
  disconnect: [WalletWhereUniqueInput!]
  update: [WalletUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [WalletUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [WalletScalarWhereInput!]
  updateMany: [WalletUpdateManyWithWhereNestedInput!]
}

input WalletUpdateManyWithWhereNestedInput {
  where: WalletScalarWhereInput!
  data: WalletUpdateManyDataInput!
}

input WalletUpdateWithoutUserDataInput {
  currency: CurrencyUpdateOneRequiredInput
  quantity: Float
}

input WalletUpdateWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput!
  data: WalletUpdateWithoutUserDataInput!
}

input WalletUpsertWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput!
  update: WalletUpdateWithoutUserDataInput!
  create: WalletCreateWithoutUserInput!
}

input WalletWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  AND: [WalletWhereInput!]
  OR: [WalletWhereInput!]
  NOT: [WalletWhereInput!]
}

input WalletWhereUniqueInput {
  id: ID
}
`