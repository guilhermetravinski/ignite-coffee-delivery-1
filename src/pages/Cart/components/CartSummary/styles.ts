import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 28rem;

  > div {
    margin-top: 0.9375rem;
    padding: 2.5rem;

    background: ${(props) => props.theme['--base-card']};
    border-radius: 6px 44px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const ItemsList = styled.ul`
  list-style: none;

  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ListItem = styled.li`
  display: flex;
  gap: 1.25rem;

  > img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    > p {
      line-height: 1.3125rem;
      color: ${(props) => props.theme['--base-subtitle']};
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
    color: ${(props) => props.theme['--base-text']};
  }
`

export const ListItemDivider = styled.div`
  border: 1px solid ${(props) => props.theme['--base-button']};
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  text-transform: uppercase;
  line-height: 1.1875rem;
  font-size: 0.75rem;

  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['--base-button']};
  color: ${(props) => props.theme['--base-text']};

  cursor: pointer;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
    color: ${(props) => props.theme['--base-subtitle']};
  }

  > svg {
    color: ${(props) => props.theme['--brand-purple']};
  }
`

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    > span {
      color: ${(props) => props.theme['--base-text']};
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    > strong {
      color: ${(props) => props.theme['--base-text']};
      line-height: 1.3125rem;
      font-weight: 400;
    }

    &:last-child {
      span,
      strong {
        font-size: 1.25rem;
        line-height: 1.625rem;
        color: ${(props) => props.theme['--base-subtitle']};
        font-weight: 700;
      }
    }
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['--brand-yellow']};
  color: ${(props) => props.theme['--white']};

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-transform: uppercase;
`