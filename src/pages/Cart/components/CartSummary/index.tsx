import { Trash } from 'phosphor-react'
import { Fragment } from 'react'
import { ItemCounterButton } from '../../../../components/ItemCounterButton'
import { convertPriceToText } from '../../../../helpers/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { Subtitle } from '../Subtitle'
import {
  CheckoutContainer,
  ItemsList,
  ListItem,
  PricesContainer,
  CheckoutButton,
  DeleteButton,
  ListItemDivider,
} from './styles'

type CartSummaryProps = {
  onAddDeliveryAddress: () => void
}

export function CartSummary({ onAddDeliveryAddress }: CartSummaryProps) {
  const {
    cartItems,
    totalPrice,
    removeItemFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  } = useCart()

  const deliveryPrice = 5.5

  const totalPriceWithDeliveryPrice = totalPrice + deliveryPrice

  function handleRemoveCartItem(id: string) {
    removeItemFromCart(id)
  }

  return (
    <CheckoutContainer>
      <Subtitle value={'Cafés selecionados'} />

      <div>
        <ItemsList>
          {cartItems.map((item) => (
            <Fragment key={item.id}>
              <ListItem>
                <img src={item.imageUrl} alt="" />
                <div>
                  <p>{item.title}</p>
                  <footer>
                    <ItemCounterButton
                      itemQuantity={item.quantity}
                      onDecreaseItemQuantity={() =>
                        decreaseCartItemQuantity(item.id)
                      }
                      onIncreaseItemQuantity={() =>
                        increaseCartItemQuantity(item.id)
                      }
                    />
                    <DeleteButton onClick={() => handleRemoveCartItem(item.id)}>
                      <Trash size={16} />
                      Remover
                    </DeleteButton>
                  </footer>
                </div>
                <strong>R$ {convertPriceToText(item.price)}</strong>
              </ListItem>

              <ListItemDivider />
            </Fragment>
          ))}
        </ItemsList>

        <PricesContainer>
          <div>
            <span>Total de itens</span>
            <strong>R$ {convertPriceToText(totalPrice)}</strong>
          </div>

          <div>
            <span>Entrega</span>
            <strong>R$ {convertPriceToText(deliveryPrice)}</strong>
          </div>

          <div>
            <span>Total</span>
            <strong>
              R$ {convertPriceToText(totalPriceWithDeliveryPrice)}
            </strong>
          </div>
        </PricesContainer>

        <CheckoutButton
          onClick={onAddDeliveryAddress}
          disabled={cartItems.length <= 0}
        >
          Confirmar Pedido
        </CheckoutButton>
      </div>
    </CheckoutContainer>
  )
}
