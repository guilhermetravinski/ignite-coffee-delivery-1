import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

type RoundedIconProps = {
  icon: ReactNode
  bgColor: string
}

export function RoundedIcon({ icon, bgColor }: RoundedIconProps) {
  return <RoundedIconContainer bgColor={bgColor}>{icon}</RoundedIconContainer>
}
