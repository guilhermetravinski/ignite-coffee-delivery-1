import { ActionTypes } from './actions'
import { produce } from 'immer'

export type CartItem = {
  id: string
  title: string
  quantity: number
  price: number
  totalPrice: number
  imageUrl: string
}

export type DeliveryAddress = {
  zipcode: string
  number: number
  street: string
  district: string
  city: string
  neighborhood: string
  complement?: string
}

export enum PaymentMethodTypes {
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
  MONEY = 'money',
}

type Cart = {
  cartItems: CartItem[]
  totalPrice: number
  paymentMethod: PaymentMethodTypes
  deliveryAddress: DeliveryAddress
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
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      const newTotalPrice = state.totalPrice - item?.totalPrice!

      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.cartItemId,
        )

        draft.totalPrice = newTotalPrice
      })
    }
    case ActionTypes.DECREASE_ITEM_QUANTITY: {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (itemIndex < 0) {
        return state
      }

      const itemCurrentQuantity = state.cartItems[itemIndex].quantity

      if (itemCurrentQuantity <= 1) {
        return state
      }

      const itemPrice = state.cartItems[itemIndex].price

      const newQuantity = itemCurrentQuantity - 1
      const newItemTotalPrice = itemPrice * newQuantity
      const newCartTotalPrice = state.totalPrice - itemPrice

      return produce(state, (draft) => {
        draft.cartItems[itemIndex].quantity = newQuantity
        draft.cartItems[itemIndex].totalPrice = newItemTotalPrice
        draft.totalPrice = newCartTotalPrice
      })
    }
    case ActionTypes.INCREASE_ITEM_QUANTITY: {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (itemIndex < 0) {
        return state
      }

      const itemCurrentQuantity = state.cartItems[itemIndex].quantity

      const itemPrice = state.cartItems[itemIndex].price

      const newQuantity = itemCurrentQuantity + 1
      const newItemTotalPrice = itemPrice * newQuantity
      const newCartTotalPrice = state.totalPrice + itemPrice

      return produce(state, (draft) => {
        draft.cartItems[itemIndex].quantity = newQuantity
        draft.cartItems[itemIndex].totalPrice = newItemTotalPrice
        draft.totalPrice = newCartTotalPrice
      })
    }
    case ActionTypes.SET_DELIVERY_ADDRESS_AND_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod
        draft.deliveryAddress = { ...action.payload.deliveryAddress }
      })
    }
    default:
      return state
  }
}
