import gql from 'graphql-tag'

export const WalletsWithCurrencyFragment = gql`
  fragment WalletsWithCurrency on Wallet {
    id
    quantity
    currency {
      name
      lastPrice
    }
  }
`

export const UserWalletsFragment = gql`
  fragment UserWalletsFragment on User {
    username
    wallets {
      id
      quantity
      currency {
        name
        lastPrice
      }
    }
  }
`

export const OrdersWithCurrencyFragment = gql`
  fragment OrdersWithCurrencyFragment on Order {
    id
    quantity
    price
    side
    currency {
      id
      name
    }
  }
`