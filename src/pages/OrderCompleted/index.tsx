import {
  InfoContainer,
  OrderCompletedContainer,
  SectionContainer,
  TitlesContainer,
} from './styles'
import orderCompleted from '../../assets/order-completed.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { getPaymentMethodName } from '../../helpers/getPaymentMethodName'

export function OrderCompleted() {
  const { deliveryAddress, paymentMethod } = useContext(CartContext)

  return (
    <OrderCompletedContainer>
      <TitlesContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitlesContainer>

      <SectionContainer>
        <div>
          <InfoContainer variant="purple">
            <MapPin size={32} weight="fill" />
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {deliveryAddress?.street}, {deliveryAddress?.number}
                </strong>
              </p>
              <p>
                {deliveryAddress?.neighborhood} - {deliveryAddress?.city},{' '}
                {deliveryAddress?.district}
              </p>
            </div>
          </InfoContainer>

          <InfoContainer variant="yellow">
            <Timer size={32} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoContainer>

          <InfoContainer isDarkIcon={true} variant="yellow">
            <CurrencyDollar size={32} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>{getPaymentMethodName(paymentMethod!)}</strong>
            </div>
          </InfoContainer>
        </div>

        <img
          src={orderCompleted}
          alt="Deliveryman with a yellow shirt riding a purple motorcycle with a package to deliver"
        />
      </SectionContainer>
    </OrderCompletedContainer>
  )
}
