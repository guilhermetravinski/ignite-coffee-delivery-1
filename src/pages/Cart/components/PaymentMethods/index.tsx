import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentMethodTypes } from '../../../../reducers/cart/reducer'
import { CardHeader } from '../CardHeader'
import { PaymentMethodsContainer, PaymentOptionButton } from './styles'

type PaymentMethodsProps = {
  paymentMethod: string
  onSelectPaymentMethod: (paymentMethod: PaymentMethodTypes) => void
}

const availablePaymentMethods = [
  {
    name: PaymentMethodTypes.CREDIT_CARD,
    title: 'Cartão de crédito',
    icon: <CreditCard />,
  },
  {
    name: PaymentMethodTypes.DEBIT_CARD,
    title: 'Cartão de débito',
    icon: <Bank />,
  },
  {
    name: PaymentMethodTypes.MONEY,
    title: 'Dinheiro',
    icon: <Money />,
  },
]

export function PaymentMethods({
  paymentMethod,
  onSelectPaymentMethod,
}: PaymentMethodsProps) {
  return (
    <PaymentMethodsContainer>
      <CardHeader
        icon={<CurrencyDollar size={22} />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        isDefaultColor={false}
      />

      <ul>
        {availablePaymentMethods.map((method) => (
          <li key={method.name}>
            <PaymentOptionButton
              onClick={() => onSelectPaymentMethod(method.name)}
              isActive={paymentMethod === method.name}
            >
              {method.icon}
              {method.title}
            </PaymentOptionButton>
          </li>
        ))}
      </ul>
    </PaymentMethodsContainer>
  )
}
