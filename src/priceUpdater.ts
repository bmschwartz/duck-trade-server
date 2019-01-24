import axios from 'axios'
import { Prisma } from './generated/prisma-client'

const BITTREX_TICKER_API = 'https://api.bittrex.com/api/v1.1/public/getticker?market='

const priceUpdater = {
  tickers: [
    'USD-BTC', 
    'BTC-LTC',
    'BTC-DOGE',
    'BTC-XMR'
  ],

  start: (prisma: Prisma) => {
    setInterval(() => {
      priceUpdater.tickers.forEach(async ticker => {
        const { lastPrice } = await priceUpdater.fetch(ticker)
        await priceUpdater.update(prisma, ticker, lastPrice)
      })
    }, 5000)
  },

  fetch: async (coin: string): Promise<{ lastPrice: number }> => {
    try {
      const { data: { result: { Last: lastPrice } } } = await axios.get(BITTREX_TICKER_API + coin)
      return { lastPrice }
    } catch (e) {
      console.error(e)
    }
  },

  update: async (prisma: Prisma, ticker: string, price: number) => {
    // ticker is of the form "USD-BTC" or "BTC-LTC". Pull out the coin name after '-'
    const name = ticker.split('-')[1]
    return prisma.updateCurrency({ data: { lastPrice: price }, where: { name } })
  }
}
export default priceUpdater