import { useEffect, useState } from 'react'
import { CoffeeListContainer } from './styles'
import coffeesList from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'

export type Coffee = {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
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
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </ul>
    </CoffeeListContainer>
  )
}
