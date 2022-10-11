import { ReactNode } from 'react'
import { CardHeaderContainer } from './styles'

type CardHeaderProps = {
  icon: ReactNode
  title: string
  description: string
}

export function CardHeader({ icon, title, description }: CardHeaderProps) {
  return (
    <CardHeaderContainer>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </CardHeaderContainer>
  )
}
