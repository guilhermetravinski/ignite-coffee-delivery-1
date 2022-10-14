import { PaymentMethodTypes } from '../reducers/cart/reducer'

export function getPaymentMethodName(paymentMethod: PaymentMethodTypes) {
  if (paymentMethod === PaymentMethodTypes.CREDIT_CARD) {
    return 'Cartão de crédito'
  }

  if (paymentMethod === PaymentMethodTypes.DEBIT_CARD) {
    return 'Cartão de Débito'
  }

  if (paymentMethod === PaymentMethodTypes.MONEY) {
    return 'Dinheiro'
  }
}
