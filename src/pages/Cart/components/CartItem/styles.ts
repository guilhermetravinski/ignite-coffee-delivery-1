import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  gap: 1.25rem;

  > img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    > p {
      line-height: 1.3125rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
      margin-bottom: 0.5rem;
    }

    > footer {
      display: flex;
      gap: 0.5rem;
    }
  }

  > strong {
    text-align: right;
    flex: 1;
    font-weight: 700;
    line-height: 1.3125rem;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const CartItemDivider = styled.div`
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  margin-top: 1.5rem;
`
