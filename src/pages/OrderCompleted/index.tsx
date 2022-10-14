import {
  InfoContainer,
  OrderCompletedContainer,
  SectionContainer,
  TitlesContainer,
} from './styles'
import orderCompleted from '../../assets/order-completed.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { getPaymentMethodName } from '../../helpers/getPaymentMethodName'
import { useCart } from '../../hooks/useCart'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoundedIcon } from '../../components/RoundedIcon'
import { useTheme } from 'styled-components'

export function OrderCompleted() {
  const { deliveryAddress, paymentMethod } = useCart()
  const navigate = useNavigate()
  const { colors } = useTheme()

  useEffect(() => {
    if (
      !deliveryAddress?.street ||
      !deliveryAddress.zipcode ||
      !deliveryAddress.city
    ) {
      navigate('/')
    }
  }, [deliveryAddress])

  return (
    <OrderCompletedContainer className="container">
      <TitlesContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitlesContainer>

      <SectionContainer>
        <div>
          <InfoContainer variant="purple">
            <RoundedIcon
              icon={<MapPin weight="fill" />}
              bgColor={colors['brand-purple']}
            />
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
            <RoundedIcon
              icon={<Timer weight="fill" />}
              bgColor={colors['brand-yellow']}
            />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoContainer>

          <InfoContainer isDarkIcon={true} variant="yellow">
            <RoundedIcon
              icon={<CurrencyDollar weight="fill" />}
              bgColor={colors['brand-yellow-dark']}
            />
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
