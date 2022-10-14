import { CartItem, DeliveryAddress, PaymentMethodTypes } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  SET_DELIVERY_ADDRESS_AND_PAYMENT_METHOD = 'SET_DELIVERY_ADDRESS_AND_PAYMENT_METHOD',
  CLEAR_CART_ITEMS_AND_TOTAL_PRICE = 'CLEAR_CART_ITEMS_AND_TOTAL_PRICE',
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

export function setDeliveryAddressAndPaymentMethodAction(
  deliveryAddress: DeliveryAddress,
  paymentMethod: PaymentMethodTypes,
) {
  return {
    type: ActionTypes.SET_DELIVERY_ADDRESS_AND_PAYMENT_METHOD,
    payload: {
      deliveryAddress,
      paymentMethod,
    },
  }
}

export function clearCartItemsAndTotalPriceAction() {
  return {
    type: ActionTypes.CLEAR_CART_ITEMS_AND_TOTAL_PRICE,
  }
}
