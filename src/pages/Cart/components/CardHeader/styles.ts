/* eslint-disable prettier/prettier */
import styled from 'styled-components'

type CardHeaderContainerProps = {
  isDefaultColor: boolean
}

export const CardHeaderContainer = styled.div<CardHeaderContainerProps>`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) =>
    props.isDefaultColor
      ? props.theme.colors['brand-yellow-dark']
      : props.theme.colors['brand-purple']};
  }

  > div {
    > strong {
      line-height: 1.3125rem;
      font-weight: 400;

      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    > p {
      font-size: 0.875rem;
      line-height: 1.125rem;
      font-weight: 400;

      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`
