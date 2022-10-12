import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  addItemToCartParams,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducer'

type CartContextData = {
  cartItems: CartItem[]
  totalPrice: number
  addItemToCart: (cartItem: addItemToCartParams) => void
  removeItemFromCart: (cartItemId: string) => void
  decreaseCartItemQuantity: (cartItemId: string) => void
  increaseCartItemQuantity: (cartItemId: string) => void
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

  function decreaseCartItemQuantity(cartItemId: string) {
    dispatch(decreaseItemQuantityAction(cartItemId))
  }

  function increaseCartItemQuantity(cartItemId: string) {
    dispatch(increaseItemQuantityAction(cartItemId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        decreaseCartItemQuantity,
        increaseCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
