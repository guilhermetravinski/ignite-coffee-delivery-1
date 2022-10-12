import { Trash } from 'phosphor-react'
import { ItemCounterButton } from '../../../../components/ItemCounterButton'
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
  return (
    <CheckoutContainer>
      <Subtitle value={'Cafés selecionados'} />

      <div>
        <ItemsList>
          <ListItem>
            <img src={'americano.svg'} alt="" />
            <div>
              <p>Expresso tradicional</p>
              <footer>
                <ItemCounterButton
                  itemQuantity={1}
                  onDecreaseItemQuantity={() => {}}
                  onIncreaseItemQuantity={() => {}}
                />
                <DeleteButton>
                  <Trash size={16} />
                  Remover
                </DeleteButton>
              </footer>
            </div>
            <strong>R$ 9,90</strong>
          </ListItem>

          <ListItemDivider />

          <ListItem>
            <img src={'americano.svg'} alt="" />
            <div>
              <p>Expresso tradicional</p>
              <footer>
                <ItemCounterButton
                  itemQuantity={1}
                  onDecreaseItemQuantity={() => {}}
                  onIncreaseItemQuantity={() => {}}
                />
                <DeleteButton>
                  <Trash size={16} />
                  Remover
                </DeleteButton>
              </footer>
            </div>
            <strong>R$ 9,90</strong>
          </ListItem>

          <ListItemDivider />
        </ItemsList>

        <PricesContainer>
          <div>
            <span>Total de itens</span>
            <strong>R$ 29,70</strong>
          </div>

          <div>
            <span>Entrega</span>
            <strong>R$ 3,50</strong>
          </div>

          <div>
            <span>Total</span>
            <strong>R$ 33,20</strong>
          </div>
        </PricesContainer>

        <CheckoutButton>Confirmar Pedido</CheckoutButton>
      </div>
    </CheckoutContainer>
  )
}