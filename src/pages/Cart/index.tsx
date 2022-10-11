import { MapPinLine } from 'phosphor-react'
import { CardHeader } from './CardHeader'
import {
  BottomCard,
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
              <FullsizeInput
                type="text"
                placeholder="Complemento"
                isOptional={true}
              />
            </div>
            <div>
              <DefaultInput type="text" placeholder="Bairro" />
              <FullsizeInput type="text" placeholder="Cidade" />
              <SmallInput type="text" placeholder="UF" />
            </div>
          </InputsContainer>
        </form>
        <BottomCard>
          <div>
            <span>$ Icon</span>
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ul>
            <li>
              <button>Cartão de Crédito</button>
            </li>
            <li>
              <button>Cartão de Débito</button>
            </li>
            <li>
              <button>Dinheiro</button>
            </li>
          </ul>
        </BottomCard>
      </FormContainer>
      <CheckoutContainer></CheckoutContainer>
    </CartContainer>
  )
}
