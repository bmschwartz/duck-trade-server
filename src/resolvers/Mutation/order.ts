import { OrderCreateInput, OrderSide } from '../../generated/prisma-client'
import { getUserId, IContext } from '../../utils'
import { UserWalletsFragment } from '../Fragments'

interface IUserWithWallets {
  username: string
  wallets: IWallet[]
}
interface IOrderInput {
  side: OrderSide
  quantity: number
  currencyName: string
}

interface IWalletBalances {
  [index: string]: {
    id: string
    quantity: number
  }
}

interface IWallet {
  id: string,
  quantity: number,
  currency: {
    name: string,
    lastPrice: number
  }
}

export const OrderMutations = {

  async placeOrder(parent, { quantity, currencyName, side }: IOrderInput, ctx: IContext) {
    const userId = getUserId(ctx)
    const user: IUserWithWallets = await ctx.prisma.user({ id: userId }).$fragment(UserWalletsFragment)
    
    if (!user) {
      throw new Error('Not authorized!')
    }

    const walletBalances: IWalletBalances = getWalletBalances(user.wallets)

    const currencyBeingBoughtOrSold = await ctx.prisma.currency({ name: currencyName })
    const { name: currencyBeingBoughtOrSoldName, lastPrice } = currencyBeingBoughtOrSold
    
    const orderValue: number = lastPrice * quantity
    const tradingWithCurrency = currencyBeingBoughtOrSold.name === 'BTC' ? 'USD' : 'BTC'

    if (side === 'BUY') {
      await placeBuyOrder(walletBalances, currencyBeingBoughtOrSoldName, tradingWithCurrency, quantity, orderValue, ctx)
    } else {
      await placeSellOrder(walletBalances, currencyBeingBoughtOrSoldName, tradingWithCurrency, quantity, orderValue, ctx)
    }

    const data: OrderCreateInput = {
      side,
      quantity,
      price: lastPrice,
      user: { connect: { id: userId } },
      currency: { connect: { name: currencyBeingBoughtOrSoldName }}
    }

    const order = await ctx.prisma.createOrder(data)
    return { ...order, currency: currencyBeingBoughtOrSold }
  },

}

const updateWalletBalance = async (ctx: IContext, walletId: string, newBalance: number) => {
  await ctx.prisma.updateWallet({ data: { quantity: newBalance }, where: { id: walletId }})
}

const getWalletBalances = (wallets: IWallet[]): IWalletBalances => {
  return wallets.reduce((balances, wallet) => {
    const { id, quantity, currency } = wallet
    balances[currency.name] = { id, quantity }
    return balances
  }, {})
}

const placeBuyOrder = async (balances: IWalletBalances, currencyBeingBought: string, tradingCurrency: string, quantity: number, orderValue: number, ctx: IContext) => {

  const tradingWithBalance: number = balances[tradingCurrency].quantity

  const buyingWithWallet = balances[tradingCurrency]
  const beingBoughtWallet = balances[currencyBeingBought]

  if (tradingWithBalance >= orderValue) {
    // Deduct `orderValue` from the `tradingWithCurrency`
    await updateWalletBalance(ctx, buyingWithWallet.id, buyingWithWallet.quantity - orderValue)

    // Add `quantity` to the currency being purchased
    await updateWalletBalance(ctx, beingBoughtWallet.id, beingBoughtWallet.quantity + quantity)

  } else {
    throw new Error(`Not enough ${tradingCurrency} to make that trade.`)
  }
}

const placeSellOrder = async (balances: IWalletBalances, currencyBeingSold: string, tradingCurrency: string, quantity: number, orderValue: number, ctx: IContext) => {
  const beingSoldWallet = balances[currencyBeingSold]
  const sellingForWallet = balances[tradingCurrency]

  if (beingSoldWallet.quantity >= quantity) {
    // Deduct quantity from the balance of currency being sold
    await updateWalletBalance(ctx, beingSoldWallet.id, beingSoldWallet.quantity - quantity)

    // Add orderValue to the currency being traded for
    await updateWalletBalance(ctx, sellingForWallet.id, sellingForWallet.quantity + orderValue)
  } else {
    throw new Error(`Not enough ${currencyBeingSold} to make that trade.`)
  }
}