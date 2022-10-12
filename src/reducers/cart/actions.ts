import { CartItem } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
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

export function removeItemFromCartAction(cartItemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      cartItemId,
    },
  }
}

export function decreaseItemQuantityAction(cartItemId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      cartItemId,
    },
  }
}

export function increaseItemQuantityAction(cartItemId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      cartItemId,
    },
  }
}
