import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { ItemCounterButton } from '../../../../components/ItemCounterButton'
import { convertPriceToText } from '../../../../helpers/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { Coffee } from '../CoffeeList'
import { CardFooter, CoffeeCardContainer } from './styles'

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [itemQuantity, setItemQuantity] = useState(1)

  const { addItemToCart } = useCart()

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
      imageUrl: coffee.imageUrl,
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
          <ItemCounterButton
            itemQuantity={itemQuantity}
            onDecreaseItemQuantity={handleDecreaseItemQuantity}
            onIncreaseItemQuantity={handleIncreaseItemQuantity}
          />

          <button onClick={handleAddItemToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
