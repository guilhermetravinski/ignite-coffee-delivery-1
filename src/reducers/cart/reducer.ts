import { ActionTypes } from './actions'

export type CartItem = {
  id: string
  title: string
  quantity: number
  price: number
  totalPrice: number
  imageUrl: string
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

      const cartItems = [...state.cartItems]

      if (cartItemIndex < 0) {
        const newCartItem: CartItem = { ...action.payload.cartItem }
        newCartItem.totalPrice = newCartItem.quantity * newCartItem.price
        cartItems.push(newCartItem)
      } else {
        const currentCartItem = cartItems[cartItemIndex]

        const newQuantity =
          currentCartItem.quantity + action.payload.cartItem.quantity
        const newTotalPrice = currentCartItem.price * newQuantity

        cartItems[cartItemIndex] = {
          ...currentCartItem,
          quantity: newQuantity,
          totalPrice: newTotalPrice,
        }
      }

      const totalPrice = cartItems.reduce((accumulator, currentCartItem) => {
        return accumulator + currentCartItem.totalPrice
      }, 0)

      return {
        ...state,
        cartItems: [...cartItems],
        totalPrice,
      }
    }
    default:
      return state
  }
}
