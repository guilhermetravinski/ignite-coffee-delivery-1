/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const CartContainer = styled.main`
  width: 100%;
  margin: 0 auto 9.75rem;

  position: relative;
  top: 9rem;

  padding: 0 1rem;

  display: flex;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;

  > form {
    margin-top: 0.9375rem;

    background-color: ${(props) => props.theme['--base-card']};
    border-radius: 6px;
    padding: 2.5rem;
  }
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4375rem;

  color: ${(props) => props.theme['--base-subtitle']};
`

export const InputsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseInput = styled.input`
  padding: 0.75rem;
  background: ${(props) => props.theme['--base-input']};
  color: ${(props) => props.theme['--base-text']};
  border: 1px solid ${(props) => props.theme['--base-button']};
  border-radius: 4px;

  ::placeholder {
    color: ${(props) => props.theme['--base-label']};
  }
`

export const DefaultInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const FullsizeInput = styled(BaseInput)`
  width: 100%;
`

export const SmallInput = styled(BaseInput)`
  max-width: 3.75rem;
`

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

  border: 1px solid ${(props) =>
    props.isActive ? props.theme['--brand-purple'] : 'transparent'};
  border-radius: 6px;

  color: ${(props) => props.theme['--base-text']};
  background: ${(props) => props.isActive
    ? props.theme['--brand-purple-light']
    : props.theme['--base-button']};

  cursor: pointer;

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