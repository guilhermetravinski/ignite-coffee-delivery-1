/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme.colors['base-card']};
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

    @media (max-width: 720px) {
      flex-direction: column;
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
    props.isActive ? props.theme.colors['brand-purple'] : 'transparent'};
  border-radius: 6px;

  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) =>
    props.isActive
      ? props.theme.colors['brand-purple-light']
      : props.theme.colors['base-button']};


  transition: background-color 0.2s, color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['base-subtitle']};
    background: ${(props) => props.theme.colors['base-hover']};
  }

  > svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const CheckoutContainer = styled.div``
