import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  addItemToCartParams,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemFromCartAction,
  setDeliveryAddressAndPaymentMethodAction,
} from '../reducers/cart/actions'
import {
  CartItem,
  cartReducer,
  DeliveryAddress,
} from '../reducers/cart/reducer'

type CartContextData = {
  cartItems: CartItem[]
  totalPrice: number
  paymentMethod?: 'credit-card' | 'debit-card' | 'money'
  deliveryAddress?: DeliveryAddress
  addItemToCart: (cartItem: addItemToCartParams) => void
  removeItemFromCart: (cartItemId: string) => void
  decreaseCartItemQuantity: (cartItemId: string) => void
  increaseCartItemQuantity: (cartItemId: string) => void
  setDeliveryAddressAndPaymentMethod: (
    deliveryAddress: DeliveryAddress,
    paymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) => void
}

export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalPrice: 0,
    deliveryAddress: {
      zipcode: '',
      number: '' as any,
      street: '',
      district: '',
      city: '',
      neighborhood: '',
      complement: '',
    },
    paymentMethod: null,
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

  function setDeliveryAddressAndPaymentMethod(
    deliveryAddress: DeliveryAddress,
    paymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) {
    dispatch(
      setDeliveryAddressAndPaymentMethodAction(deliveryAddress, paymentMethod),
    )
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
        setDeliveryAddressAndPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
