import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { CardHeader } from './components/CardHeader'
import { PaymentMethods } from './components/PaymentMethods'
import {
  CartContainer,
  CheckoutContainer,
  DefaultInput,
  FormContainer,
  FullsizeInput,
  InputsContainer,
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

        <PaymentMethods
          paymentMethod={paymentMethod}
          onSelectPaymentMethod={handleSelectPaymentMethod}
        />
      </FormContainer>
      <CheckoutContainer></CheckoutContainer>
    </CartContainer>
  )
}
