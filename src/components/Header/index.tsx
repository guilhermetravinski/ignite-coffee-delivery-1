import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
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
            <span>Recife, PE</span>
          </div>

          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </HeaderContainer>
    </Container>
  )
}
