export function getPaymentMethodName(
  paymentMethod: 'credit-card' | 'debit-card' | 'money',
) {
  if (paymentMethod === 'credit-card') {
    return 'Cartão de crédito'
  }

  if (paymentMethod === 'debit-card') {
    return 'Cartão de Débito'
  }

  if (paymentMethod === 'money') {
    return 'Dinheiro'
  }
}
