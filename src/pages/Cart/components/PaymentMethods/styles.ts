/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme['--base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  > ul {
    margin-top: 2rem;

    list-style: none;

    display: flex;
    gap: 0.75rem;

    > li {
      width: 100%;
    }
  }
`

type PaymentOptionButtonProps = {
  isActive: boolean
}

export const PaymentOptionButton = styled.button<PaymentOptionButtonProps>`
  width: 100%;
  padding: 1rem 0 1rem 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  border: 1px solid
    ${(props) =>
    props.isActive ? props.theme['--brand-purple'] : 'transparent'};
  border-radius: 6px;

  color: ${(props) => props.theme['--base-text']};
  background: ${(props) =>
    props.isActive
      ? props.theme['--brand-purple-light']
      : props.theme['--base-button']};


  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: ${(props) => props.theme['--base-subtitle']};
    background: ${(props) => props.theme['--base-hover']};
  }

  > svg {
    color: ${(props) => props.theme['--brand-purple']};
  }
`

export const CheckoutContainer = styled.div``
