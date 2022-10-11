import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { convertPriceToText } from '../../../../helpers/formatPrice'
import { Coffee } from '../CoffeeList'
import { CardFooter, CoffeeCardContainer, ItemCounterButton } from './styles'

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [itemQuantity, setItemQuantity] = useState(1)

  const { addItemToCart } = useContext(CartContext)

  function handleIncreaseItemQuantity() {
    setItemQuantity(itemQuantity + 1)
  }

  function handleDecreaseItemQuantity() {
    if (itemQuantity === 1) {
      return null
    }

    setItemQuantity(itemQuantity - 1)
  }

  function handleAddItemToCart() {
    addItemToCart({
      id: coffee.id,
      title: coffee.title,
      price: coffee.price,
      quantity: itemQuantity,
    })
    setItemQuantity(1)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.imageUrl} alt="" />

      <div>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <strong>{coffee.title}</strong>

      <p>{coffee.description}</p>

      <CardFooter>
        <strong>{convertPriceToText(coffee.price)}</strong>

        <div>
          <ItemCounterButton>
            <button
              disabled={itemQuantity <= 1}
              onClick={handleDecreaseItemQuantity}
            >
              <Minus size={14} />
            </button>
            <p>{itemQuantity}</p>
            <button onClick={handleIncreaseItemQuantity}>
              <Plus size={14} />
            </button>
          </ItemCounterButton>

          <button onClick={handleAddItemToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
