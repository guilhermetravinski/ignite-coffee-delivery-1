import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  Container,
  GoToCheckoutButton,
  HeaderContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <Container>
      <HeaderContainer>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Recife, PE</span>
          </LocationContainer>

          <GoToCheckoutButton to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </GoToCheckoutButton>
        </div>
      </HeaderContainer>
    </Container>
  )
}
