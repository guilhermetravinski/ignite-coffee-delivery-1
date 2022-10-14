import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentMethodTypes } from '../../../../reducers/cart/reducer'
import { CardHeader } from '../CardHeader'
import { PaymentMethodsContainer, PaymentOptionButton } from './styles'

type PaymentMethodsProps = {
  paymentMethod: string
  onSelectPaymentMethod: (paymentMethod: string) => void
}

const availablePaymentMethods = [
  {
    name: PaymentMethodTypes.CREDIT_CARD,
    title: 'Cartão de crédito',
  },
  {
    name: PaymentMethodTypes.DEBIT_CARD,
    title: 'Cartão de débito',
  },
  {
    name: PaymentMethodTypes.MONEY,
    title: 'Dinheiro',
  },
]

function returnIconByPaymentMethod(method: string) {
  if (method === PaymentMethodTypes.MONEY) {
    return <Money />
  }

  if (method === PaymentMethodTypes.DEBIT_CARD) {
    return <Bank />
  }

  return <CreditCard />
}

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
              {returnIconByPaymentMethod(method.name)}
              {method.title}
            </PaymentOptionButton>
          </li>
        ))}
      </ul>
    </PaymentMethodsContainer>
  )
}
