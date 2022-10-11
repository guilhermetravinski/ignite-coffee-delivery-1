import { CartItem } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export type addItemToCartParams = Omit<CartItem, 'totalPrice'>

export function addItemToCartAction(cartItem: addItemToCartParams) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      cartItem,
    },
  }
}
