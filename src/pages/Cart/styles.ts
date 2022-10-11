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

export const CardHeader = styled.div`
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

type FullsizeInputProps = {
  isOptional?: boolean
}

export const FullsizeInput = styled(BaseInput) <FullsizeInputProps>`
  width: 100%;

`

export const SmallInput = styled(BaseInput)`
  max-width: 3.75rem;
`

export const CheckoutContainer = styled.div``
