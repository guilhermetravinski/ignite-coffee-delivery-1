import { ActionTypes } from './actions'

export type CartItem = {
  id: number
  name: string
  quantity: number
  price: number
  totalPrice: number
}

type Cart = {
  cartItems: CartItem[]
  totalPrice: number
}

export function cartReducer(state: Cart, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItem.id,
      )

      if (cartItemIndex < 0) {
        return state
      }

      const newCartItems = [...state.cartItems]

      newCartItems[cartItemIndex].quantity += action.payload.cartItem.quantity
      newCartItems[cartItemIndex].totalPrice =
        newCartItems[cartItemIndex].price * newCartItems[cartItemIndex].quantity

      return {
        ...state,
        cartItems: [...newCartItems],
      }
    }
    default:
      return state
  }
}
