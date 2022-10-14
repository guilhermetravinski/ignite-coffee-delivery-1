import styled from 'styled-components'

export const CartContainer = styled.main`
  width: 100%;
  margin: 0 auto 9.75rem;
  padding: 0 1rem;

  position: relative;
  top: 9rem;

  display: flex;
  gap: 2rem;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;

  > form {
    margin-top: 0.9375rem;

    background-color: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
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
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;

  transition: border-color 0.2s;

  :focus {
    border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
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
