import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { GoToCheckoutButton } from '../GoToCheckoutButton'
import { Container, HeaderContainer } from './styles'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
        <div>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>

          <GoToCheckoutButton />
        </div>
      </HeaderContainer>
    </Container>
  )
}
