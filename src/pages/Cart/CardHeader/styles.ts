import styled from 'styled-components'

export const CardHeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme['--brand-yellow-dark']};
  }

  > div {
    > strong {
      line-height: 1.3125rem;
      font-weight: 400;

      color: ${(props) => props.theme['--base-subtitle']};
    }

    > p {
      font-size: 0.875rem;
      line-height: 1.125rem;
      font-weight: 400;

      color: ${(props) => props.theme['--base-text']};
    }
  }
`
