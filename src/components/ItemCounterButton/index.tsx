import { Minus, Plus } from 'phosphor-react'
import { ItemCounterButtonContainer } from './styles'

type ItemCounterButtonProps = {
  itemQuantity: number
  onDecreaseItemQuantity: () => void
  onIncreaseItemQuantity: () => void
}

export function ItemCounterButton({
  itemQuantity,
  onDecreaseItemQuantity,
  onIncreaseItemQuantity,
}: ItemCounterButtonProps) {
  return (
    <ItemCounterButtonContainer>
      <button disabled={itemQuantity <= 1} onClick={onDecreaseItemQuantity}>
        <Minus size={14} />
      </button>
      <p>{itemQuantity}</p>
      <button onClick={onIncreaseItemQuantity}>
        <Plus size={14} />
      </button>
    </ItemCounterButtonContainer>
  )
}
