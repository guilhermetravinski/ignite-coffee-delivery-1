import styled from 'styled-components'

export const SubtitleContainer = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4375rem;

  color: ${(props) => props.theme['--base-subtitle']};
`
