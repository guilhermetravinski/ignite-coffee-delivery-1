import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CardHeader } from '../CardHeader'
import { PaymentMethodsContainer, PaymentOptionButton } from './styles'

type PaymentMethodsProps = {
  paymentMethod: string
  onSelectPaymentMethod: (paymentMethod: string) => void
}

const availablePaymentMethods = [
  {
    name: 'credit-card',
    title: 'Cartão de crédito',
  },
  {
    name: 'debit-card',
    title: 'Cartão de débito',
  },
  {
    name: 'money',
    title: 'Dinheiro',
  },
]

function returnIconByPaymentMethod(method: string) {
  if (method === 'money') {
    return <Money />
  }

  if (method === 'debit-card') {
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
