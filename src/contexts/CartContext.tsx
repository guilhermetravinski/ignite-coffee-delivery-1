import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  addItemToCartParams,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducer'

type CartContextData = {
  cartItems: CartItem[]
  totalPrice: number
  addItemToCart: (cartItem: addItemToCartParams) => void
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
