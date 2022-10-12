import { SubtitleContainer } from './styles'

type SubtitleProps = {
  value: string
}

export function Subtitle({ value }: SubtitleProps) {
  return <SubtitleContainer>{value}</SubtitleContainer>
}
