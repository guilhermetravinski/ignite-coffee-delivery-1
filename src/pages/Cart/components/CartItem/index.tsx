import { Trash } from 'phosphor-react'
import { Fragment } from 'react'
import { ItemCounterButton } from '../../../../components/ItemCounterButton'
import { convertPriceToText } from '../../../../helpers/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { CartItem as CartItemType } from '../../../../reducers/cart/reducer'
import { DeleteButton } from '../CartSummary/styles'
import { CartItemContainer, CartItemDivider } from './styles'

type CartItemProps = {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const {
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
    removeItemFromCart,
  } = useCart()

  return (
    <Fragment>
      <CartItemContainer>
        <img src={item.imageUrl} alt="" />
        <div>
          <p>{item.title}</p>
          <footer>
            <ItemCounterButton
              itemQuantity={item.quantity}
              onDecreaseItemQuantity={() => decreaseCartItemQuantity(item.id)}
              onIncreaseItemQuantity={() => increaseCartItemQuantity(item.id)}
            />
            <DeleteButton onClick={() => removeItemFromCart(item.id)}>
              <Trash size={16} />
              Remover
            </DeleteButton>
          </footer>
        </div>
        <strong>R$ {convertPriceToText(item.price)}</strong>
      </CartItemContainer>

      <CartItemDivider />
    </Fragment>
  )
}
