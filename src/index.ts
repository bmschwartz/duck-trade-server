import * as cookieParser from 'cookie-parser'
import { GraphQLServer, Options } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'

import resolvers from './resolvers'
import priceUpdater from './priceUpdater'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

server.use(cookieParser())

const serverOptions: Options = {
  cors: {
    credentials: true,
    origin: 'http://localhost:3000',
  },
}

server.start(serverOptions, () => console.log(`Server is running on http://localhost:4000`))

priceUpdater.start(prisma)
// TODO: Real time price updates