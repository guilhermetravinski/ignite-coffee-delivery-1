import {
  InfoContainer,
  OrderCompletedContainer,
  SectionContainer,
  TitlesContainer,
} from './styles'
import orderCompleted from '../../assets/order-completed.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function OrderCompleted() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farropos - Porto Alegre, RS</p>
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
              <strong>Cartão de crédito</strong>
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
