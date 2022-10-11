import { useEffect, useState } from 'react'
import {
  CardFooter,
  CoffeeCard,
  CoffeeListContainer,
  ItemCounterButton,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeesList from '../../../../data/coffees'

type Coffee = {
  id: number
  title: string
  description: string
  tags: string[]
  price: string
  imageUrl: string
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    setCoffees([...coffeesList])
  }, [])

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <ul>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id}>
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
                  <button>
                    <Minus size={14} />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus size={14} />
                  </button>
                </ItemCounterButton>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CardFooter>
          </CoffeeCard>
        ))}
      </ul>
    </CoffeeListContainer>
  )
}
