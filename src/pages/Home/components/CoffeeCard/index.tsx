import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../CoffeeList'
import { CardFooter, CoffeeCardContainer, ItemCounterButton } from './styles'

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [itemQuantity, setItemQuantity] = useState(1)

  function handleIncreaseItemQuantity() {
    setItemQuantity(itemQuantity + 1)
  }

  function handleDecreaseItemQuantity() {
    if (itemQuantity === 1) {
      return null
    }

    setItemQuantity(itemQuantity - 1)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={'../../../../public/' + coffee.imageUrl} alt="" />

      <div>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <strong>{coffee.title}</strong>

      <p>{coffee.description}</p>

      <CardFooter>
        <strong>{coffee.price}</strong>

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

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
