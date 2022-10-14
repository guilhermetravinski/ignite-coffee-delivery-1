import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'
import { GoToCartButton, HeaderContainer, LocationContainer } from './styles'

export function Header() {
  const { cartItems } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>
      <div>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Recife, PE</span>
        </LocationContainer>

        <GoToCartButton to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </GoToCartButton>
      </div>
    </HeaderContainer>
  )
}
