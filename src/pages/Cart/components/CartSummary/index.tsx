import { convertPriceToText } from '../../../../helpers/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { CartItem } from '../CartItem'
import { Subtitle } from '../Subtitle'
import {
  CheckoutContainer,
  ItemsList,
  PricesContainer,
  CheckoutButton,
} from './styles'

type CartSummaryProps = {
  onAddDeliveryAddress: () => void
}

export function CartSummary({ onAddDeliveryAddress }: CartSummaryProps) {
  const { cartItems, totalPrice } = useCart()

  const deliveryPrice = 5.5

  const totalPriceWithDeliveryPrice = totalPrice + deliveryPrice

  return (
    <CheckoutContainer>
      <Subtitle value={'Cafés selecionados'} />

      <div>
        {cartItems.length === 0 ? (
          <span>Você não possui nenhum café no carrinho</span>
        ) : (
          <ItemsList>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ItemsList>
        )}

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
