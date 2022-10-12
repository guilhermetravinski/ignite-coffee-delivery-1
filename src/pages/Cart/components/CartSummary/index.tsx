import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ItemCounterButton } from '../../../../components/ItemCounterButton'
import { CartContext } from '../../../../contexts/CartContext'
import { convertPriceToText } from '../../../../helpers/formatPrice'
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

export function CartSummary() {
  const { cartItems, totalPrice, removeItemFromCart } = useContext(CartContext)

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
            <>
              <ListItem>
                <img src={item.imageUrl} alt="" />
                <div>
                  <p>{item.title}</p>
                  <footer>
                    <ItemCounterButton
                      itemQuantity={item.quantity}
                      onDecreaseItemQuantity={() => {}}
                      onIncreaseItemQuantity={() => {}}
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
            </>
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

        <CheckoutButton>Confirmar Pedido</CheckoutButton>
      </div>
    </CheckoutContainer>
  )
}
