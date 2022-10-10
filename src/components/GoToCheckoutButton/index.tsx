import { ShoppingCart } from 'phosphor-react'
import { GoToCheckoutButtonContainer } from './styles'

export function GoToCheckoutButton() {
  return (
    <GoToCheckoutButtonContainer to="/checkout">
      <ShoppingCart size={22} weight="fill" />
    </GoToCheckoutButtonContainer>
  )
}
