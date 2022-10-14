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
  PaymentMethodTypes,
} from '../reducers/cart/reducer'

type CartContextData = {
  cartItems: CartItem[]
  totalPrice: number
  paymentMethod?: PaymentMethodTypes
  deliveryAddress?: DeliveryAddress
  addItemToCart: (cartItem: addItemToCartParams) => void
  removeItemFromCart: (cartItemId: string) => void
  decreaseCartItemQuantity: (cartItemId: string) => void
  increaseCartItemQuantity: (cartItemId: string) => void
  setDeliveryAddressAndPaymentMethod: (
    deliveryAddress: DeliveryAddress,
    paymentMethod: PaymentMethodTypes,
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
    paymentMethod: null as any,
  })

  const { cartItems, totalPrice, paymentMethod, deliveryAddress } = cartState

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
    paymentMethod: PaymentMethodTypes,
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
        paymentMethod,
        deliveryAddress,
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
