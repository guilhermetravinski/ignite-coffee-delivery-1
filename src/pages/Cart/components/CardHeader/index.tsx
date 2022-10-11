import { ReactNode } from 'react'
import { CardHeaderContainer } from './styles'

type CardHeaderProps = {
  icon: ReactNode
  title: string
  description: string
  isDefaultColor?: boolean
}

export function CardHeader({
  icon,
  title,
  description,
  isDefaultColor = true,
}: CardHeaderProps) {
  return (
    <CardHeaderContainer isDefaultColor={isDefaultColor}>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </CardHeaderContainer>
  )
}
