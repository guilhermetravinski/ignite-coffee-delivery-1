import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { CardHeader } from './components/CardHeader'
import {
  PaymentMethodsContainer,
  CartContainer,
  CheckoutContainer,
  DefaultInput,
  FormContainer,
  FullsizeInput,
  InputsContainer,
  PaymentOptionButton,
  SmallInput,
  Subtitle,
} from './styles'

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('')

  function handleSelectPaymentMethod(chosenPaymentMethod: string) {
    if (paymentMethod === chosenPaymentMethod) {
      setPaymentMethod('')
      return
    }

    setPaymentMethod(chosenPaymentMethod)
  }

  return (
    <CartContainer>
      <FormContainer>
        <Subtitle>Complete seu pedido</Subtitle>

        <form>
          <CardHeader
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />

          <InputsContainer>
            <DefaultInput type="text" placeholder="CEP" />
            <FullsizeInput type="text" placeholder="Rua" />
            <div>
              <DefaultInput type="text" placeholder="Número" />
              <FullsizeInput type="text" placeholder="Complemento" />
            </div>
            <div>
              <DefaultInput type="text" placeholder="Bairro" />
              <FullsizeInput type="text" placeholder="Cidade" />
              <SmallInput type="text" placeholder="UF" />
            </div>
          </InputsContainer>
        </form>

        <PaymentMethodsContainer>
          <CardHeader
            icon={<CurrencyDollar size={22} />}
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            isDefaultColor={false}
          />

          <ul>
            <li>
              <PaymentOptionButton
                onClick={() => handleSelectPaymentMethod('credit-card')}
                isActive={paymentMethod === 'credit-card'}
              >
                <CreditCard />
                Cartão de Crédito
              </PaymentOptionButton>
            </li>
            <li>
              <PaymentOptionButton
                onClick={() => handleSelectPaymentMethod('debit-card')}
                isActive={paymentMethod === 'debit-card'}
              >
                <Bank />
                Cartão de Débito
              </PaymentOptionButton>
            </li>
            <li>
              <PaymentOptionButton
                onClick={() => handleSelectPaymentMethod('money')}
                isActive={paymentMethod === 'money'}
              >
                <Money />
                Dinheiro
              </PaymentOptionButton>
            </li>
          </ul>
        </PaymentMethodsContainer>
      </FormContainer>

      <CheckoutContainer></CheckoutContainer>
    </CartContainer>
  )
}
