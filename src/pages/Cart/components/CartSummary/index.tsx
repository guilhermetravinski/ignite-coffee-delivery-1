import { Trash } from 'phosphor-react'
import { Subtitle } from '../Subtitle'
import {
  CheckoutContainer,
  ItemsList,
  ListItem,
  PricesContainer,
  CheckoutButton,
  DeleteButton,
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
                <button>- 1 +</button>
                <DeleteButton>
                  <Trash size={16} />
                  Remover
                </DeleteButton>
              </footer>
            </div>
            <strong>R$ 9,90</strong>
          </ListItem>

          <ListItem>
            <img src={'americano.svg'} alt="" />
            <div>
              <p>Expresso tradicional</p>
              <footer>
                <button>- 1 +</button>
                <DeleteButton>
                  <Trash size={16} />
                  Remover
                </DeleteButton>
              </footer>
            </div>
            <strong>R$ 9,90</strong>
          </ListItem>
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
