import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeDeliveryHome from '../../assets/coffee-delivery-home.svg'
import {
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  IntroLeftContainer,
  IntroLeftListItem,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroLeftContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <IntroLeftListItem iconType="cart">
              <ShoppingCart size={32} weight="fill" />
              <p>Compra simples e segura</p>
            </IntroLeftListItem>
            <IntroLeftListItem iconType="package">
              <Package size={32} weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </IntroLeftListItem>
            <IntroLeftListItem iconType="timer">
              <Timer size={32} weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </IntroLeftListItem>
            <IntroLeftListItem iconType="coffee">
              <Coffee size={32} weight="fill" />
              <p>O café chega fresquinho até você</p>
            </IntroLeftListItem>
          </ul>
        </IntroLeftContainer>
        <img src={coffeeDeliveryHome} alt="" />
      </IntroContainer>
      <CoffeeListContainer></CoffeeListContainer>
    </HomeContainer>
  )
}
