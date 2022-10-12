import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  addItemToCartParams,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducer'

type CartContextData = {
  cartItems: CartItem[]
  totalPrice: number
  addItemToCart: (cartItem: addItemToCartParams) => void
  removeItemFromCart: (cartItemId: string) => void
}

export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalPrice: 0,
  })

  const { cartItems, totalPrice } = cartState

  function addItemToCart(cartItem: addItemToCartParams) {
    dispatch(addItemToCartAction(cartItem))
  }

  function removeItemFromCart(cartItemId: string) {
    dispatch(removeItemFromCartAction(cartItemId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
