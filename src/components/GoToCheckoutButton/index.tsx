import { ShoppingCart } from 'phosphor-react'
import { GoToCheckoutButtonContainer } from './styles'

type GoToCheckoutButtonProps = {
  isHeader?: boolean
}

export function GoToCheckoutButton({
  isHeader = false,
}: GoToCheckoutButtonProps) {
  return (
    <GoToCheckoutButtonContainer to="/checkout" isHeader={isHeader}>
      <ShoppingCart size={22} weight="fill" />
    </GoToCheckoutButtonContainer>
  )
}
